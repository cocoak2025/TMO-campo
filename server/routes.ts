import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertQuoteSchema } from "@shared/schema";
import { z } from "zod";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DEFAULT_QUOTE_RECIPIENT = "transportocampo@gmail.com";
const web3FormsAccessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
const quoteRecipientEmail =
  process.env.QUOTE_RECIPIENT_EMAIL?.trim() || DEFAULT_QUOTE_RECIPIENT;
const adminApiKey = process.env.ADMIN_API_KEY?.trim();

function requireAdminAccess(req: Request, res: Response): boolean {
  if (!adminApiKey) {
    res.status(404).json({ success: false, message: "Not found" });
    return false;
  }

  const providedApiKey = req.header("x-admin-key")?.trim();
  if (providedApiKey !== adminApiKey) {
    res.status(401).json({ success: false, message: "Accès non autorisé" });
    return false;
  }

  return true;
}

async function sendQuoteRequestEmail(payload: z.infer<typeof insertQuoteSchema>, id: string) {
  if (!web3FormsAccessKey) {
    throw new Error("WEB3FORMS_ACCESS_KEY non configurée");
  }

  const wheelChairText = payload.wheelchairRequired ? "Oui" : "Non";

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: web3FormsAccessKey,
      subject: `Nouvelle demande de devis (${payload.institutionName})`,
      from_name: "Site TMO Campo",
      to: quoteRecipientEmail,
      replyto: payload.email,
      demande_id: id,
      institution: payload.institutionName,
      contact: payload.contactName,
      email: payload.email,
      telephone: payload.phone,
      type_institution: payload.institutionType,
      nombre_patients: payload.numberOfPatients || "Non renseigné",
      frequence: payload.frequency || "Non renseignée",
      adresse_depart: payload.pickupAddress || "Non renseignée",
      adresse_destination: payload.destinationAddress || "Non renseignée",
      fauteuil_roulant: wheelChairText,
      informations_complementaires: payload.additionalInfo || "Aucune",
    }),
  });

  if (!response.ok) {
    throw new Error(`Échec Web3Forms: HTTP ${response.status}`);
  }

  const result = (await response.json()) as { success?: boolean; message?: string };
  if (!result.success) {
    throw new Error(result.message || "Échec Web3Forms");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Message envoyé avec succès",
        id: message.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Données invalides", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erreur serveur" 
        });
      }
    }
  });

  // Quote request endpoint for institutions/EMS
  app.post("/api/quote", async (req, res) => {
    try {
      const validatedData = insertQuoteSchema.parse(req.body);
      const quote = await storage.createQuoteRequest(validatedData);
      await sendQuoteRequestEmail(validatedData, quote.id);
      res.status(201).json({ 
        success: true, 
        message: "Demande de devis envoyée avec succès",
        id: quote.id,
        emailSent: true,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Données invalides", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erreur serveur" 
        });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    if (!requireAdminAccess(req, res)) {
      return;
    }

    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erreur serveur" 
      });
    }
  });

  // Get all quote requests (for admin purposes)
  app.get("/api/quote", async (req, res) => {
    if (!requireAdminAccess(req, res)) {
      return;
    }

    try {
      const quotes = await storage.getQuoteRequests();
      res.json(quotes);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erreur serveur" 
      });
    }
  });

  return httpServer;
}

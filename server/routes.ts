import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertQuoteSchema } from "@shared/schema";
import { z } from "zod";

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
      res.status(201).json({ 
        success: true, 
        message: "Demande de devis envoyée avec succès",
        id: quote.id 
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
  app.get("/api/contact", async (_req, res) => {
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
  app.get("/api/quote", async (_req, res) => {
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

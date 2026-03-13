import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form schema
export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
}).extend({
  email: z.string().trim().email("Email invalide").max(160, "Email trop long"),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(30, "Numéro trop long"),
  name: z.string().trim().min(2, "Nom requis").max(120, "Nom trop long"),
  message: z.string().trim().min(10, "Message trop court").max(2000, "Message trop long"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Quote request for EMS/Institutions
export const quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  institutionName: text("institution_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  institutionType: text("institution_type").notNull(),
  numberOfPatients: text("number_of_patients"),
  frequency: text("frequency"),
  pickupAddress: text("pickup_address"),
  destinationAddress: text("destination_address"),
  wheelchairRequired: boolean("wheelchair_required").default(false),
  additionalInfo: text("additional_info"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertQuoteSchema = createInsertSchema(quoteRequests).pick({
  institutionName: true,
  contactName: true,
  email: true,
  phone: true,
  institutionType: true,
  numberOfPatients: true,
  frequency: true,
  pickupAddress: true,
  destinationAddress: true,
  wheelchairRequired: true,
  additionalInfo: true,
}).extend({
  email: z.string().trim().email("Email invalide").max(160, "Email trop long"),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(30, "Numéro trop long"),
  institutionName: z.string().trim().min(2, "Nom de l'institution requis").max(160, "Nom de l'institution trop long"),
  contactName: z.string().trim().min(2, "Nom du contact requis").max(120, "Nom du contact trop long"),
  institutionType: z.string().trim().min(1, "Type d'institution requis").max(50, "Type d'institution trop long"),
  numberOfPatients: z.string().trim().max(100, "Valeur trop longue").optional(),
  frequency: z.string().trim().max(60, "Valeur trop longue").optional(),
  pickupAddress: z.string().trim().max(200, "Adresse trop longue").optional(),
  destinationAddress: z.string().trim().max(200, "Adresse trop longue").optional(),
  additionalInfo: z.string().trim().max(2000, "Informations trop longues").optional(),
});

export type InsertQuote = z.infer<typeof insertQuoteSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;

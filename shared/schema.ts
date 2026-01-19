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
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  name: z.string().min(2, "Nom requis"),
  message: z.string().min(10, "Message trop court"),
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
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  institutionName: z.string().min(2, "Nom de l'institution requis"),
  contactName: z.string().min(2, "Nom du contact requis"),
  institutionType: z.string().min(1, "Type d'institution requis"),
});

export type InsertQuote = z.infer<typeof insertQuoteSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;

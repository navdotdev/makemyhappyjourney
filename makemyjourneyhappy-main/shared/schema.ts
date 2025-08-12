import { z } from "zod";

// User types (simplified without database)
export interface User {
  id: string;
  username: string;
  password: string;
}

export interface ContactInquiry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredCircuit: string;
  message: string;
  createdAt: Date;
}

// Schemas for validation
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const insertContactInquirySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  preferredCircuit: z.string(),
  message: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;

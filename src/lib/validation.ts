import { z } from "zod";

export const consultationSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  organisationName: z.string().trim().min(2, "Please enter your organisation name."),
  email: z.union([z.literal(""), z.email("Please enter a valid work email.")]).optional(),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").regex(/^[+\d][\d\s()-]+$/, "Please enter a valid phone number."),
  organisationType: z.string().min(1, "Please select an organisation type."),
  employeeCount: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  message: z.string().trim().min(10, "Please tell us a little more (at least 10 characters)."),
  consent: z.boolean().refine((value) => value, "You must agree before sending your enquiry."),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

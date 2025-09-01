import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Download project endpoint
  app.get("/download-project", (req, res) => {
    try {
      const filePath = path.join(process.cwd(), "project-download.tar.gz");
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "Project file not found" });
      }
      
      // Set headers for download
      res.setHeader('Content-Disposition', 'attachment; filename="digital-hospital-project.tar.gz"');
      res.setHeader('Content-Type', 'application/gzip');
      
      // Stream the file
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
      
    } catch (error) {
      console.error("Download error:", error);
      res.status(500).json({ error: "Failed to download project" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store in database
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      const transporter = createTransporter();
      
      const emailContent = `
        New ${validatedData.type} submission:
        
        Name: ${validatedData.name}
        Phone: ${validatedData.phone}
        Description: ${validatedData.description || 'No description provided'}
        
        Submitted at: ${new Date().toLocaleString()}
      `;
      
      await transporter.sendMail({
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: 'mahimasinggh1710@gmail.com',
        subject: `Digital Hospital Digital India - ${validatedData.type} from ${validatedData.name}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">New ${validatedData.type}</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Phone:</strong> ${validatedData.phone}</p>
              <p><strong>Description:</strong> ${validatedData.description || 'No description provided'}</p>
              <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p style="color: #64748b; font-size: 14px;">This email was sent from the Digital Hospital Digital India website contact form.</p>
          </div>
        `
      });
      
      res.status(201).json({
        success: true,
        message: "Contact submission received and email sent successfully",
        id: submission.id
      });
    } catch (error) {
      console.error("Contact submission error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to process contact submission"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

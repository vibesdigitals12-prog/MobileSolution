import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Download source code endpoint
  app.get("/download-source", (req, res) => {
    const zipPath = path.join(process.cwd(), "rk-mobile-solution.zip");
    res.download(zipPath, "rk-mobile-solution.zip", (err) => {
      if (err) {
        console.error("Download error:", err);
        res.status(500).send("Error downloading file");
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}

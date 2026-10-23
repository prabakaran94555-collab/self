import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  app.use(express.json());

  const isProduction = process.env.NODE_ENV === 'production';
  let vite: any;

  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
  }

  // Gemini AI assistant endpoint for Prabakaran's portfolio
  app.post('/api/ai-chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not configured.' });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are an AI career assistant representing Prabakaran S, an Agriculture Engineering student (2023-2027) at Dhanalakshmi Srinivasan University, Tiruchirappalli.
Prabakaran specializes in:
- Agriculture Engineering & Smart Farming technologies (IoT, automated crop monitoring, precision ag)
- Java Full Stack Development (Java, Spring Boot, MySQL, HTML, CSS, Bootstrap, JavaScript)
- Embedded Systems & Microcontrollers (STM32, ESP32, Arduino UNO, IoT simulations, Footstep Power Generator)
- Internships: Industrial Intern at Aavin Industries (dairy processing, agriculture machinery), Data Science Intern in Agricultural Entrepreneurship, Embedded Systems Intern at IPCS Global.
- Projects: AGRI-SYNC (Smart Agricultural Management Platform using Java & Spring Boot), Footstep Power Generator (embedded systems & IoT energy harvesting).
- Certifications & Honors: Embedded Systems Certification (IPCS Global), Java Full Stack Certification (IPCS Global), Blockchain Technology Hackathon, NCC 'B' Certificate, District Level NCC Gold Medal for Dance Competition and Parade.
- Soft Skills: Active Listening, Public Speaking.
- Location: Tiruvannamalai Dt., Tamil Nadu.
- Career Objective: Seeking an entry-level Agriculture Engineering position applying smart farming technologies, embedded systems, and full-stack development.

Answer recruiters, engineers, and visitors professionally, politely, enthusiastically, and accurately on behalf of Prabakaran or as his AI portfolio guide. Keep answers concise, helpful, and highlight his multidisciplinary strength in agriculture + technology.`;

      const chatModel = 'gemini-2.5-flash';
      
      const contents = [
        ...(history || []).map((h: any) => ({
          role: h.role,
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ];

      const response = await ai.models.generateContent({
        model: chatModel,
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ error: error.message || 'Failed to generate AI response' });
    }
  });

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();

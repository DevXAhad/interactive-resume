// api/generate-resume.ts

import { VercelRequest, VercelResponse } from '@vercel/node';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

const resumes: { [key: string]: any } = {}; // In-memory store (use a database for production)

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { username, resumeData } = req.body;

    if (!username || !resumeData) {
      return res.status(400).json({ error: 'Username and resume data are required.' });
    }

    const resumeId = uuidv4(); // Generate a unique ID
    resumes[resumeId] = { username, ...resumeData };

    const uniqueUrl = `https://${process.env.VERCEL_URL}/api/resume/${resumeId}`;
    res.status(200).json({ url: uniqueUrl });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

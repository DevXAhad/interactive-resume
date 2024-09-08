// api/resume.js
const resumes = {}; // In-memory store for simplicity

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, resumeData } = req.body;
    if (!username || !resumeData) {
      return res.status(400).json({ error: 'Username and resumeData are required' });
    }
    
    const uniqueId = Date.now(); // Simple unique ID
    resumes[`${username}-${uniqueId}`] = resumeData;
    
    res.status(200).json({ url: `https://${username}.vercel.app/resume/${uniqueId}` });
  } else if (req.method === 'GET') {
    const { username, id } = req.query;
    if (!username || !id) {
      return res.status(400).json({ error: 'Username and ID are required' });
    }

    const resumeData = resumes[`${username}-${id}`];
    if (resumeData) {
      res.status(200).json(resumeData);
    } else {
      res.status(404).json({ error: 'Resume not found' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

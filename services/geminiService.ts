import { GoogleGenAI } from "@google/genai";
import { RESUME_SUMMARY, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, CONTACT_INFO } from '../constants';

// Construct the system context from the resume constants
const SYSTEM_CONTEXT = `
You are an AI assistant for Kashif Rasheed's professional portfolio website. 
Your goal is to answer questions about Kashif's experience, skills, and projects based STRICTLY on the following information.
Be professional, concise, and enthusiastic.

PROFILE:
Name: Kashif Rasheed
Role: Android Developer
Email: ${CONTACT_INFO.email}
Phone: ${CONTACT_INFO.phone}
Summary: ${RESUME_SUMMARY}

EDUCATION:
${EDUCATION.degree} at ${EDUCATION.institution} (${EDUCATION.year})

SKILLS:
${SKILLS.map(cat => `${cat.category}: ${cat.skills.join(', ')}`).join('\n')}

EXPERIENCE:
${EXPERIENCE.map(exp => `${exp.role} at ${exp.company} (${exp.period}). Highlights: ${exp.highlights.join('; ')}`).join('\n')}

PROJECTS:
${PROJECTS.map(p => `${p.title}: ${p.description}. Tech: ${p.technologies.join(', ')}. Metrics: ${p.metrics?.join(', ')}`).join('\n')}

If a user asks about something not in this list, politely state that you only have information regarding his professional portfolio.
`;

let aiClient: GoogleGenAI | null = null;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, my API key is missing. Please configure the environment.";
  }

  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  try {
    const response = await aiClient.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_CONTEXT,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while processing your request. Please try again.";
  }
};
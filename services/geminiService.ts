import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Initialize securely - in a real app, this might be proxied, 
// but for this demo we assume env var availability.
const ai = new GoogleGenAI({ apiKey });

export const streamChatResponse = async (
  history: { role: string; text: string }[],
  newMessage: string,
  onChunk: (text: string) => void
) => {
  if (!apiKey) {
    onChunk("Error: API Key is missing. I cannot function without it.");
    return;
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are "RedBot", the AI sales assistant for RedVelocity Auto Sales. 
    You are helpful, enthusiastic, and knowledgeable about cars, bikes, and vans.
    Your goal is to help users find the perfect vehicle or answer questions about our services (Financing, 7-day return, 140-point inspection).
    Keep answers concise and professional but friendly.`;

    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessageStream({ message: newMessage });

    for await (const chunk of result) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    onChunk("I'm sorry, I'm having trouble connecting to the server right now.");
  }
};
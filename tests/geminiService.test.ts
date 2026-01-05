import { describe, it, expect, vi, beforeEach } from "vitest";
import { sendChatMessage } from "../services/geminiService";

// Mock the GoogleGenAI library
vi.mock("@google/generative-ai", () => ({
  GoogleGenerativeAI: vi.fn().mockImplementation(() => ({
    getGenerativeModel: vi.fn().mockReturnValue({
      generateContent: vi.fn().mockResolvedValue({
        response: {
          text: () =>
            Promise.resolve("Hello, this is a mock response from Patriot."),
        },
      }),
    }),
  })),
}));

describe("Gemini Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("sendChatMessage should return text response on success", async () => {
    const history = [{ role: "user", parts: [{ text: "Hi" }] }] as any;
    const response = await sendChatMessage("How are you?", history);
    expect(response).toBe("Hello, this is a mock response from Patriot.");
  });

  it("sendChatMessage should handle API failures gracefully", async () => {
    // Override mock to throw error
    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    (GoogleGenerativeAI as any).mockImplementationOnce(() => ({
      getGenerativeModel: vi.fn().mockReturnValue({
        generateContent: vi.fn().mockRejectedValue(new Error("Network error")),
      }),
    }));

    await expect(sendChatMessage("Hi", [])).rejects.toThrow(
      "Failed to connect to AI service.",
    );
  });
});

export const featuresData = [
  {
    id: 1,
    title: "AI Code Completion",
    description:
      "Accelerate your development with intelligent, context-aware code suggestions. Build faster with fewer errors as AI understands your intent, auto-completes complex logic, and reduces repetitive coding tasks—so you can focus on solving real problems.",
    imagePosition: "left",
    codeSnippet: `// AI-powered form handler with smart suggestions
async function handleSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(event.target);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}`,
  },
  {
    id: 2,
    title: "Automated Testing",
    description:
      "Ensure code reliability without the overhead of manual testing. Automatically generate unit and integration tests tailored to your logic, helping you catch bugs early and maintain confidence in every deployment.",
    imagePosition: "right",
    codeSnippet: `// AI-generated test suite
import request from "supertest";
import app from "../app";

describe("User Registration", () => {
  it("should register a new user successfully", async () => {
    const response = await request(app)
      .post("/api/register")
      .send({
        username: "testuser",
        password: "securePassword123",
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.username).toBe("testuser");
  });

  it("should fail with invalid input", async () => {
    const response = await request(app)
      .post("/api/register")
      .send({});

    expect(response.status).toBe(400);
  });
});`,
  },
  {
    id: 3,
    title: "Smart Debugging",
    description:
      "Debug smarter, not harder. Get real-time insights into errors, actionable suggestions, and guided fixes powered by AI—so you can resolve issues quickly and keep your workflow uninterrupted.",
    imagePosition: "left",
    codeSnippet: `// AI-assisted debugging example
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);

    if (!response.ok) {
      throw new Error(\`HTTP error: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user data:", error);

    // AI might suggest retry logic
    return {
      error: true,
      message: "Unable to load user data. Please try again.",
    };
  }
}`,
  },
];

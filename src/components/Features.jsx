import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeExamples } from "../data/CodeExamples";

const featuresData = [
  {
    title: "AI Code Completion",
    description:
      "Boost your coding speed with AI-powered code suggestions that understand your context and help you write code faster.",
    image: "code-completion.png",
    imagePosition: "left",
    codeSnippet: `function handleSubmit() {
  // AI will suggest code to handle form submission
  const data = await fetch("/api/submit"
  // Automatically generates error handling and response parsing)}`,
  },

  {
    title: "Autmoated Testing",
    description:
      "Generate unit tests and integration tests automatically with AI, ensuring your code is robust and bug-free without the hassle of writing tests manually.",
    image: "testing.png",
    imagePosition: "right",
    codeSnippet: `describe("User Registration", () => {
  it("should register a new user successfully", () => {
    // AI generates test cases based on your code
    const response = await request(app)
      .post("/api/register")
      .send({ username: "testuser", password: "password123" });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });`,
  },

  {
    title: "Smart Debugging",
    description:
      "Identify and fix bugs quickly with AI-powered debugging tools that provide insights into your code's behavior.",
    image: "debugging.png",
    imagePosition: "left",
    codeSnippet: `try {
  // AI helps identify potential issues in your code
  const result = await performComplexOperation();
} catch (error) {
  // AI suggests possible fixes based on the error
  console.error("An error occurred:", error);
  // AI might suggest a fix here based on the error message
}`,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {featuresData.map((feature, index) => (
            <div className="" key={index}>
              {/* Code/Image Section */}
              <div className="">
                <div className="">
                  {/* IDE Interface */}
                  <div className="">
                    <div className="">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500"></div>
                      </div>

                      <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                        {feature.title}
                      </span>
                    </div>

                    <div className="">
                      <SyntaxHighlighter
                        language="jsx"
                        w
                        className="h-full rounded-lg"
                        style={nightOwl}
                        customStyle={{
                          margin: 0,
                          borderRadius: "8px",
                          fontSize: "11px",
                          lineHeight: "1.4",
                          height: "100%",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {feature.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

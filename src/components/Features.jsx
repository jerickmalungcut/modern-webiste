import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { featuresData } from "../data/FeaturesData";

/**
 * Features Section
 * ---------------------------------------
 * - Displays product features
 * - Alternating layout (left/right)
 * - Code preview UI
 */
const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 🔹 Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        {/* 🔹 Features List */}
        <div className="space-y-20 lg:space-y-28">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* ======================
                  CODE PREVIEW
              ====================== */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />

                  {/* Card */}
                  <div className="relative bg-gray-900/50 border border-gray-700/50 rounded-2xl p-5 backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        <span className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                        <span className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-gray-400 text-sm">
                        {feature.title}
                      </span>
                    </div>

                    {/* Code Block */}
                    <div className="h-65] overflow-auto rounded-lg border border-white/5 bg-black/40 group-hover:border-blue-500/40">
                      <SyntaxHighlighter
                        language="jsx"
                        style={nightOwl}
                        customStyle={{
                          margin: 0,
                          background: "transparent",
                          fontSize: "0.8rem",
                          lineHeight: "1.5",
                          padding: "16px",
                        }}
                      >
                        {feature.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>

              {/* ======================
                  TEXT CONTENT
              ====================== */}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    {feature.description}
                  </p>
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

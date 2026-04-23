import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * Hero Component
 * ---------------------------------------
 * - Landing section with headline + CTA
 * - Interactive code preview with tabs
 * - Mouse-based radial gradient effect
 */
const Hero = () => {
  // 🔹 Track mouse position for background effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 🔹 Active tab for code preview
  const [activeTab, setActiveTab] = useState("App.jsx");

  /**
   * 🔹 Optimize mouse move listener
   * Prevent excessive re-renders using requestAnimationFrame
   */
  useEffect(() => {
    let frameId;

    const handleMouseMove = (event) => {
      frameId = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  /**
   * 🔹 Memoize floating card (performance optimization)
   */
  const currentFloatingCard = useMemo(
    () => floatingCards[activeTab],
    [activeTab],
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ================================
          BACKGROUND EFFECTS
      ================================= */}

      {/* 🔹 Mouse radial gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />

      {/* 🔹 Decorative blurred blobs */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* ================================
          MAIN CONTENT
      ================================= */}

      <div className="max-w-7xl w-full mx-auto relative">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ================================
              LEFT CONTENT (TEXT)
          ================================= */}

          <div className="text-center lg:text-left">
            {/* 🔹 Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">
                Introducing BuildFlow AI
              </span>
            </div>

            {/* 🔹 Main Heading (SEO important: use ONE h1) */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold mb-6 leading-tight animate-in slide-in-from-bottom duration-700 delay-100">
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-white via-blue-100 to-cyan-100">
                Build Smarter
              </span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400">
                Ship Faster
              </span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-white via-blue-100 to-cyan-100">
                With AI Assistance
              </span>
            </h1>

            {/* 🔹 Description */}
            <p className="text-base lg:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 animate-in slide-in-from-bottom duration-700 delay-200">
              Supercharge your development workflow with intelligent code
              suggestions, real-time debugging insights, and automated best
              practices.
            </p>

            {/* 🔹 CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in slide-in-from-bottom duration-700 delay-300">
              {/* Primary CTA */}
              <button className="group px-6 py-3 bg-linear-to-b from-blue-600 to-blue-400 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition">
                <span>Get Started for Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              {/* Secondary CTA */}
              <button className="group px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                <span>See How It Works</span>
              </button>
            </div>
          </div>

          {/* ================================
              RIGHT CONTENT (CODE PREVIEW)
          ================================= */}

          <div className="w-full">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl">
              {/* 🔹 IDE HEADER */}
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-gray-300">CodeFlow AI</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>

              {/* 🔹 Tabs */}
              <div className="flex gap-2 p-3 overflow-x-auto">
                {Object.keys(codeExamples).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 text-sm rounded-t-lg border ${
                      activeTab === tab
                        ? "bg-blue-500/30 text-white"
                        : "text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* 🔹 Code Viewer */}
              <div className="relative h-75 overflow-auto rounded-lg border border-white/10 no-scrollbar">
                <SyntaxHighlighter
                  language="jsx"
                  style={nightOwl}
                  customStyle={{
                    margin: 0,
                    fontSize: "11px",
                    lineHeight: "1.4",
                    background: "transparent",
                  }}
                >
                  {codeExamples[activeTab]}
                </SyntaxHighlighter>
              </div>

              {/* 🔹 Floating Card */}
              <div
                className={`hidden lg:block absolute bottom-4 right-4 w-72 p-4 rounded-lg backdrop-blur-xl border border-white/20 shadow-xl ${currentFloatingCard.bgColor}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-6 h-6 flex items-center justify-center ${currentFloatingCard.iconColor}`}
                  >
                    {currentFloatingCard.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${currentFloatingCard.textColor}`}
                  >
                    {currentFloatingCard.title}
                  </span>
                </div>
                <p className={`text-sm ${currentFloatingCard.contentColor}`}>
                  {currentFloatingCard.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

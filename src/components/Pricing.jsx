import { Check, Star } from "lucide-react";
import { pricingPlans } from "../data/PricingData";

/**
 * Pricing Section
 * ----------------------------------
 * - Displays subscription plans
 * - Highlights most popular plan
 * - Fully responsive grid
 */
const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ======================
            SECTION HEADER
        ====================== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Choose the plan that fits your workflow. Upgrade anytime as your
            team grows.
          </p>
        </div>

        {/* ======================
            PRICING CARDS
        ====================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 group ${
                plan.mostPopular
                  ? "bg-[#0a0a0f] border-blue-500 shadow-xl shadow-blue-500/20 lg:scale-105"
                  : "bg-[#0a0a0f] border-gray-800 hover:border-gray-700"
              }`}
            >
              {/* 🔥 Most Popular Badge */}
              {plan.mostPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-semibold bg-linear-to-r from-blue-500 to-cyan-500 shadow-md">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* ======================
                  PLAN HEADER
              ====================== */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                <div className="flex justify-center items-end">
                  <span className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </div>

              {/* ======================
                  FEATURES LIST
              ====================== */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* ======================
                  CTA BUTTON
              ====================== */}
              <button
                className={`mt-auto py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-sm ${
                  plan.mostPopular
                    ? "bg-linear-to-r from-blue-500 to-cyan-500 hover:opacity-90"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* ======================
            FOOTER CTA
        ====================== */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Need a custom solution?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

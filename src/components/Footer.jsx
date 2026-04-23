import { footerLinks, socialLinks } from "../data/FooterData";

/**
 * Footer Component
 * ----------------------------------
 * - Displays navigation links
 * - Includes branding and social links
 * - Fully responsive (mobile-first)
 */
export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0f] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ======================
            TOP SECTION
        ====================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* 🔹 BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="CodeFlow Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Build faster with AI-powered tools designed for modern developers
              and teams. Automate workflows, reduce bugs, and ship confidently.
            </p>

            {/* 🔹 SOCIAL LINKS */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 🔹 LINK GROUPS */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-white font-semibold mb-4 text-sm">
                  {group.title}
                </h3>

                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ======================
            BOTTOM SECTION
        ====================== */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Jerick Malungcut. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

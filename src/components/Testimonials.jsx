import { useEffect, useState } from "react";
import { testimonialsContent } from "../data/TestimonialData";

/**
 * Testimonials Section
 * ----------------------------------
 * - Fetches user avatars from API
 * - Merges with static testimonial content
 * - Displays responsive testimonial cards
 */
const Testimonials = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch random users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=3");
        const data = await res.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ======================
            HEADER
        ====================== */}
        <div className="mb-16 text-center lg:text-left max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What developers are saying
          </h2>

          <p className="text-gray-400 text-lg">
            Real feedback from developers and teams using AI-powered workflows
            to build faster and smarter.
          </p>
        </div>

        {/* ======================
            TESTIMONIAL LIST
        ====================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? [...Array(3)].map((_, i) => (
                // 🔹 Skeleton Loader
                <div
                  key={i}
                  className="h-48 bg-[#0a0a0f] border border-gray-800 rounded-2xl animate-pulse"
                />
              ))
            : users.map((user, index) => {
                const content = testimonialsContent[index];

                return (
                  <div
                    key={user.login.uuid}
                    className="bg-[#0a0a0f] border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition-all duration-300"
                  >
                    {/* Quote */}
                    <p className="text-gray-200 text-base leading-relaxed mb-6">
                      “{content?.quote}”
                    </p>

                    {/* User Info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={user.picture.large}
                        alt={user.name.first}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {user.name.first} {user.name.last}
                        </h4>
                        <p className="text-gray-400 text-xs">{content?.role}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

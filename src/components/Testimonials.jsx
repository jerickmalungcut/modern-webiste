import { useEffect, useState } from "react";

const testimonialsData = [
  {
    name: "Sarah Chen",
    role: "Senior Developer at Tech Solutions",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "This product has transformed the way I work. It's intuitive, efficient, and has significantly boosted my productivity. I can't imagine going back to my old tools!",
  },
  {
    name: "Michael Lee",
    role: "Project Manager at Innovate Inc.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "One of the best investments we've made for our team. The support and features have exceeded our expectations, making project management a breeze.",
  },
  {
    name: "Emily Davis",
    role: "UX Designer at Creative Minds",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "As a designer, I appreciate the attention to detail and user-friendly interface. It has made collaborating with developers so much easier and more enjoyable.",
  },
];

const Testimonials = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  return (
    <section id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Left side - Header */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What developers are saying about us
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Everything you need to build, test, and deploy applications with
              AI-powered development tools.
            </p>
          </div>

          {/* Right side - Testimonials */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 sm:space-y-8 lg:space-y-6">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="shrink-0">
                      {/* Quotation Mark */}
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        "
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="grow">
                      <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                        {testimonialsData[index]?.quote}
                      </p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img
                          src={user.picture.large}
                          alt={user.name.first}
                          className="w-10 h-10 sm:h-12 sm:w-12 rounded-full object-cover mt-4"
                        />
                        <div className="mt-2">
                          <h4 className="font-semibold text-sm sm:text-base">
                            {user.name.first} {user.name.last}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {testimonialsData[index]?.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "AxiaAnalytics helped us streamline our material procurement process with predictive analytics. We saw a **25% efficiency gain** in our supply chain.",
    client: "Struchem Africa Ltd",
    industry: "Construction",
  },
  {
    id: 2,
    quote:
      "Their work on customer sentiment analysis transformed how we approach client feedback. We're now making **data-driven decisions** on service improvements, leading to higher retention.",
    client: "Wishconsultancy",
    industry: "Consumer Service",
  },
  {
    id: 3,
    quote:
      "We leveraged their data engineering expertise to build a real-time monitoring dashboard for our retail sites. This has been crucial for **optimizing fuel distribution** and reducing downtime.",
    client: "Vivo Energy Kenya",
    industry: "Fuel Retail",
  },
  {
    id: 4,
    quote:
      "Implementing their solution for warehouse inventory tracking was seamless. It has drastically cut down on manual errors and improved our **overall stock accuracy**.",
    client: "KINSON LIMITED",
    industry: "Flooring",
  },
  {
    id: 5,
    quote:
      "As an NGO, optimizing resource allocation is key. AxiaAnalytics provided a model that helps us forecast community needs, ensuring our **aid reaches the right people at the right time**.",
    client: "Fadhila Kenya",
    industry: "NGO",
  },
  {
    id: 6,
    quote:
      "Their business intelligence dashboards gave us clarity into our sales channels for the first time. We can now identify high-performing products and **target our marketing effectively**.",
    client: "MSENGWEDU ENTERPRISES",
    industry: "General Merchant",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 px-4 gradient-navy text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent">
          Hear From Our Clients
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[280px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100 animate-fade-in" : "opacity-0"
                }`}
              >
                <blockquote className="text-2xl italic mb-6">
                  "{testimonial.quote.replace(/\*\*/g, "")}"
                </blockquote>
                <p className="font-bold text-xl">
                  - {testimonial.client} ({testimonial.industry})
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

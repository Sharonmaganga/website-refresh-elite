import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "👥",
    title: "AI Expert Consultation",
    description:
      "Strategic guidance, roadmapping, and feasibility studies from industry-leading AI veterans.",
    gradient: "from-blue-50 to-yellow-50",
  },
  {
    icon: "🤖",
    title: "AI Optimized Solutions",
    description:
      "Development and deployment of custom AI agents and intelligent workflow automation systems.",
    gradient: "from-yellow-50 to-pink-50",
  },
  {
    icon: "💡",
    title: "AI Strategy Development",
    description:
      "Creating a clear, business-aligned strategy for AI adoption and value realization across your organization.",
    gradient: "from-blue-50 to-yellow-50",
  },
  {
    icon: "🛠️",
    title: "AI Implementation Support",
    description:
      "Hands-on technical assistance for seamless integration of AI models into your existing infrastructure.",
    gradient: "from-yellow-50 to-pink-50",
  },
  {
    icon: "🧠",
    title: "AI & Predictive Modeling",
    description:
      "Custom machine learning models, predictive analytics, and intelligent automation.",
    gradient: "from-blue-50 to-yellow-50",
  },
  {
    icon: "📊",
    title: "Data Engineering & Architecture",
    description:
      "Build robust data pipelines, scalable cloud architecture, and data governance frameworks.",
    gradient: "from-yellow-50 to-pink-50",
  },
  {
    icon: "📈",
    title: "Business Intelligence & Viz",
    description:
      "Interactive dashboards, real-time analytics, and comprehensive reporting tools for strategic oversight.",
    gradient: "from-blue-50 to-yellow-50",
  },
  {
    icon: "⚖️",
    title: "AI Ethics & Governance",
    description:
      "Developing policies, audits, and frameworks to ensure your AI systems are fair, transparent, and compliant with regulations.",
    gradient: "from-yellow-50 to-pink-50",
  },
  {
    icon: "☁️",
    title: "Cloud Data Migration & Optimization",
    description:
      "Seamlessly moving your data infrastructure to the cloud (AWS, Azure, GCP) and optimizing it for performance and cost.",
    gradient: "from-blue-50 to-yellow-50",
  },
];

const Services = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Our Services</h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Comprehensive AI and data solutions designed to transform your business
        </p>

        <div className="space-y-8">
          {services.map((service, index) => (
            <section key={index} className="mb-8">
              <div className={`bg-gradient-to-r ${service.gradient} rounded-2xl p-10`}>
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold mb-3">{service.title}</h2>
                    <p className="text-lg text-foreground">{service.description}</p>
                  </div>
                </div>
                <Link to="/contact">
                  <Button
                    className={`${
                      index % 2 === 0
                        ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                        : "bg-accent text-accent-foreground hover:bg-accent/90"
                    } font-semibold`}
                  >
                    Request Consultation
                  </Button>
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

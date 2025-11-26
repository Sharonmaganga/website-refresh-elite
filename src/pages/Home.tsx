import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import IndustriesAccordion from "@/components/IndustriesAccordion";
import TestimonialSlider from "@/components/TestimonialSlider";

const services = [
  {
    icon: "👥",
    title: "AI Expert Consultation",
    description:
      "Strategic guidance, roadmapping, and feasibility studies from industry-leading AI veterans.",
  },
  {
    icon: "🤖",
    title: "AI Optimized Solutions",
    description:
      "Development and deployment of custom AI agents and intelligent workflow automation systems.",
  },
  {
    icon: "💡",
    title: "AI Strategy Development",
    description:
      "Creating a clear, business-aligned strategy for AI adoption and value realization across your organization.",
  },
  {
    icon: "🛠️",
    title: "AI Implementation Support",
    description:
      "Hands-on technical assistance for seamless integration of AI models into your existing infrastructure.",
  },
  {
    icon: "🧠",
    title: "AI & Predictive Modeling",
    description:
      "Custom ML models, predictive analytics, and intelligent solutions for forecasting and decision-making.",
  },
  {
    icon: "📊",
    title: "Data Engineering & Strategy",
    description:
      "Build robust data pipelines, scalable cloud architecture, and reliable data governance frameworks.",
  },
  {
    icon: "📈",
    title: "Business Intelligence & Viz",
    description:
      "Interactive dashboards and real-time analytics for comprehensive reporting and strategic oversight.",
  },
  {
    icon: "⚖️",
    title: "AI Ethics & Governance",
    description:
      "Developing policies, audits, and frameworks to ensure your AI systems are fair, transparent, and compliant with regulations.",
  },
  {
    icon: "☁️",
    title: "Cloud Data Migration & Optimization",
    description:
      "Seamlessly moving your data infrastructure to the cloud (AWS, Azure, GCP) and optimizing it for performance and cost.",
  },
];

const caseStudies = [
  {
    label: "CASE STUDY 1",
    title: "80% Reduction in Manual Processing",
    description:
      "We helped a leading Kenyan logistics company automate operations, saving 200+ hours per month.",
  },
  {
    label: "CASE STUDY 2",
    title: "Risk Management for Financial Services",
    description:
      "Implemented a predictive model that reduced credit default risk by 15% for a micro-finance institution.",
  },
  {
    label: "CASE STUDY 3",
    title: "Supply Chain Optimization",
    description:
      "Designed a demand forecasting engine that led to a 30% reduction in stockouts for a major retailer.",
  },
];

const Home = () => {
  return (
    <div>
      <section className="gradient-navy text-primary-foreground py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Transform Your Business with Data & AI
              </h1>
              <p className="text-xl mb-8 opacity-90">
                AxiaAnalytics delivers cutting-edge AI solutions and data analytics
                services that drive real business results in Nairobi and beyond.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-semibold">
                    Get Started
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    variant="outline"
                    className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-primary-foreground/10 backdrop-blur-lg rounded-2xl p-8 border border-primary-foreground/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold">100+</div>
                    <div className="opacity-75">Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">50+</div>
                    <div className="opacity-75">Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">95%</div>
                    <div className="opacity-75">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">24/7</div>
                    <div className="opacity-75">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Core Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive AI and data solutions designed to accelerate your digital
            transformation journey
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-primary font-semibold hover:underline"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesAccordion />

      <TestimonialSlider />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="gradient-navy rounded-2xl p-8 text-primary-foreground"
            >
              <div className="text-sm font-semibold mb-2 text-accent">
                {study.label}
              </div>
              <h2 className="text-xl font-bold mb-4">{study.title}</h2>
              <p className="text-sm mb-6 opacity-75">{study.description}</p>
              <Link to="/blog">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Read Full Story
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how AI and data analytics can drive your next breakthrough
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-6 text-lg font-semibold">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const industries = [
  {
    id: "finance",
    icon: "🏛️",
    title: "Finance & Banking",
    items: [
      "**Fraud Detection:** Deploying real-time anomaly detection models to minimize financial risk.",
      "**Credit Scoring:** Developing advanced, non-traditional scoring models for better lending decisions.",
      "**Regulatory Reporting:** Automating compliance and regulatory report generation using AI.",
      "**Personalized Banking:** Utilizing customer data to offer hyper-personalized investment and product advice.",
    ],
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "Healthcare",
    items: [
      "**Predictive Diagnostics:** Building models to forecast patient outcomes and disease progression.",
      "**Resource Optimization:** AI-driven scheduling for hospital staff and equipment utilization.",
      "**Patient Data Analysis:** Securely analyzing clinical data for research and operational efficiency.",
      "**Telemedicine Integration:** Developing intelligent systems to enhance remote patient monitoring and care.",
    ],
  },
  {
    id: "logistics",
    icon: "🚛",
    title: "Logistics & Supply Chain",
    items: [
      "**Route Optimization:** Dynamic route planning using real-time traffic and delivery data to cut costs.",
      "**Inventory Forecasting:** Predictive modeling to optimize stock levels and minimize warehousing expenses.",
      "**Demand Sensing:** Utilizing external factors (weather, events) to accurately forecast product demand.",
      "**Autonomous Operations:** Implementing AI for automated warehouse management and tracking.",
    ],
  },
  {
    id: "manufacturing",
    icon: "🏭",
    title: "Manufacturing",
    items: [
      "**Predictive Maintenance:** Using sensor data to anticipate equipment failures before they occur.",
      "**Quality Control:** Implementing Computer Vision AI for automated defect detection on production lines.",
      "**Production Scheduling:** Optimizing complex manufacturing schedules to maximize throughput.",
      "**Energy Optimization:** AI systems that monitor and adjust machine usage to reduce energy consumption.",
    ],
  },
  {
    id: "ecommerce",
    icon: "🛍️",
    title: "E-Commerce & Retail",
    items: [
      "**Personalized Recommendations:** Building AI engines that drive sales through targeted product suggestions.",
      "**Customer Segmentation:** Using clustering techniques to better understand buying behavior and marketing ROI.",
      "**Dynamic Pricing:** Implementing algorithms that adjust prices in real-time based on competitor data and demand.",
      "**Churn Prediction:** Identifying customers likely to leave and automating retention campaigns.",
    ],
  },
  {
    id: "energy",
    icon: "🔌",
    title: "Energy & Utilities",
    items: [
      "**Grid Load Forecasting:** Predicting energy consumption to optimize power generation and distribution.",
      "**Asset Management:** Using AI to monitor the health of remote assets like pipelines and wind turbines.",
      "**Smart Meter Data Analysis:** Processing large volumes of usage data for billing accuracy and consumer insights.",
      "**Renewable Energy Integration:** Optimizing the intermittent power flow from solar and wind resources.",
    ],
  },
];

const IndustriesAccordion = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Industries We Transform</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {industries.map((industry) => (
            <AccordionItem
              key={industry.id}
              value={industry.id}
              className="border-l-4 border-accent bg-muted rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{industry.icon}</div>
                  <h3 className="font-bold text-xl text-primary text-left">
                    {industry.title}
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="list-none ml-0 text-foreground space-y-3 text-sm">
                  {industry.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2 font-bold mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default IndustriesAccordion;

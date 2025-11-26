const articles = [
  {
    category: "AI Trends",
    title: "The Rise of AI Agents in Enterprise Workflows",
    description: "Discover how autonomous AI agents are transforming business operations.",
    date: "Nov 15, 2025",
    gradient: "from-primary to-accent",
  },
  {
    category: "Data Strategy",
    title: "Building a Data-Driven Culture",
    description: "Transform your company into a data-driven powerhouse.",
    date: "Nov 10, 2025",
    gradient: "from-accent to-primary",
  },
];

const Blog = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Blog & Insights</h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Stay updated with AI, data analytics, and digital transformation trends
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${article.gradient}`}></div>
              <div className="p-6">
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent/20 text-accent-foreground"
                  }`}
                >
                  {article.category}
                </span>
                <h2 className="text-2xl font-bold my-3">{article.title}</h2>
                <p className="text-muted-foreground mb-4">{article.description}</p>
                <span className="text-sm text-muted-foreground">{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

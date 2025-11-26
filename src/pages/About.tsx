const About = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About AxiaAnalytics</h1>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-lg text-foreground mb-4">
              AxiaAnalytics was founded with a vision to democratize AI and data analytics
              for businesses across Africa. Based in Nairobi, Kenya, we recognized the
              transformative power of data-driven decision making.
            </p>
            <p className="text-lg text-foreground mb-4">
              What started as a small consultancy has grown into a full-service AI and data
              analytics firm, serving clients across industries.
            </p>
            <p className="text-lg text-foreground">
              Today, we're at the forefront of Africa's AI revolution, helping businesses
              leverage cutting-edge technology.
            </p>
          </div>
          <div className="gradient-navy rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-6">By The Numbers</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold mb-2 text-accent">100+</div>
                <div className="opacity-75">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-accent">50+</div>
                <div className="opacity-75">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-accent">15+</div>
                <div className="opacity-75">Industries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-accent">95%</div>
                <div className="opacity-75">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-lg text-foreground">
              To empower businesses with intelligent, data-driven solutions that unlock
              growth, optimize operations, and create competitive advantages.
            </p>
          </div>
          <div className="bg-yellow-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4 text-accent">Our Vision</h2>
            <p className="text-lg text-foreground">
              To be Africa's leading AI and analytics partner, recognized for innovation,
              impact, and transforming businesses through technology.
            </p>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl text-primary">
              ✓
            </div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-muted-foreground">Exceptional quality</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl text-accent">
              🧠
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-muted-foreground">Cutting-edge tech</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🤝
            </div>
            <h3 className="text-xl font-bold mb-2">Partnership</h3>
            <p className="text-muted-foreground">Lasting relationships</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              💡
            </div>
            <h3 className="text-xl font-bold mb-2">Impact</h3>
            <p className="text-muted-foreground">Measurable value</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

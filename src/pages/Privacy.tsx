const Privacy = () => {
  return (
    <div className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Effective Date: 5/1/2025</p>

        <p className="text-foreground">
          At AxiaAnalytics, we respect your privacy and are committed to protecting your
          personal data. This Privacy Policy explains how we collect, use, and safeguard
          your information when you visit our website or interact with our services.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
          1. Information We Collect
        </h2>
        <p className="text-foreground">
          We may collect and process the following types of information:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>
            <strong>Personal Identification Information</strong> (e.g., name, email
            address, phone number, company name, job title) when you fill out forms,
            subscribe to services, or contact us.
          </li>
          <li>
            <strong>Payment Information</strong>: Processed securely via third-party
            payment processors like Stripe and PayPal. We do not store full credit card
            details on our servers.
          </li>
          <li>
            <strong>Usage Data</strong>: (e.g., IP address, browser type, pages visited,
            time spent) collected through cookies and analytics tools to help improve
            website performance and user experience.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
          2. How We Use Your Information
        </h2>
        <p className="text-foreground">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>To provide, operate, and maintain our services</li>
          <li>To respond to inquiries and support requests</li>
          <li>To send important service and administrative updates</li>
          <li>To personalize your experience</li>
          <li>To process transactions</li>
          <li>To analyze website usage and improve our offerings</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
          3. Sharing Your Information
        </h2>
        <p className="text-foreground">
          We do not sell or rent your personal data. We may share your information with
          trusted third parties only when necessary, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Payment processors (e.g., Stripe, PayPal)</li>
          <li>
            Service providers assisting with website operation, marketing, or analytics
          </li>
          <li>Legal authorities, when required by law</li>
        </ul>
        <p className="text-foreground mt-4">
          All third parties are obligated to maintain the confidentiality and security of
          your information.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
          4. Cookies & Tracking Technologies
        </h2>
        <p className="text-foreground">We use cookies and similar technologies to:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Remember your preferences</li>
          <li>Improve site performance</li>
          <li>Analyze user behavior for improvements</li>
        </ul>
        <p className="text-foreground mt-4">
          You can control cookie settings through your browser at any time.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
          5. Your Rights & Choices
        </h2>
        <p className="text-foreground">
          Depending on your location, you may have rights under data privacy laws,
          including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Accessing your personal data</li>
          <li>Correcting inaccurate data</li>
          <li>Requesting deletion of your data</li>
          <li>Objecting to or limiting data processing</li>
          <li>Withdrawing consent at any time (where applicable)</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
          6. Data Security
        </h2>
        <p className="text-foreground">
          We take security seriously and implement appropriate technical and organizational
          measures to protect your personal data. Our website uses HTTPS, and all payment
          data is processed via PCI-compliant platforms.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
          7. Third-Party Links
        </h2>
        <p className="text-foreground">
          Our website may contain links to external sites. We are not responsible for the
          privacy practices or content of those sites.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">
          8. Changes to This Policy
        </h2>
        <p className="text-foreground">
          We may update this Privacy Policy from time to time. All changes will be posted
          on this page with an updated effective date.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">9. Contact Us</h2>
        <p className="text-foreground">
          If you have any questions or concerns about this Privacy Policy, please Contact
          Us at:
        </p>
        <ul className="list-none pl-0 space-y-2 text-foreground">
          <li>📧 Email: info@axiaanalytics.com</li>
          <li>🌐 Website: https://axiaanalytics.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;

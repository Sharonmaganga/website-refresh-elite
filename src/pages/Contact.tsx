import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We will get back to you within 24 hours.");
    setFormData({
      name: "",
      organization: "",
      email: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Get In Touch</h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Ready to transform your business? Let's start a conversation
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  type="text"
                  value={formData.organization}
                  onChange={(e) => handleChange("organization", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="service">Service Interest</Label>
                <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="ai-consult">AI Expert Consultation</SelectItem>
                    <SelectItem value="ai-optimize">AI Optimized Solutions</SelectItem>
                    <SelectItem value="ai-strategy">AI Strategy Development</SelectItem>
                    <SelectItem value="ai-support">AI Implementation Support</SelectItem>
                    <SelectItem value="ai-ml">AI & Predictive Modeling</SelectItem>
                    <SelectItem value="data-engineering">
                      Data Engineering & Strategy
                    </SelectItem>
                    <SelectItem value="business-intelligence">
                      Business Intelligence & Viz
                    </SelectItem>
                    <SelectItem value="ai-ethics">AI Ethics & Governance</SelectItem>
                    <SelectItem value="cloud-migration">
                      Cloud Data Migration & Optimization
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="mt-2"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary-hover py-6 font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="gradient-navy rounded-2xl p-8 text-primary-foreground mb-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="opacity-75">Nairobi, Kenya</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-semibold mb-1">Phone / WhatsApp</div>
                    <a
                      href="tel:+254728702495"
                      className="opacity-75 hover:opacity-100 transition"
                    >
                      +254 728 702 495
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a
                      href="mailto:Axiaanalyticsglobal@gmail.com"
                      className="opacity-75 hover:opacity-100 transition"
                    >
                      Axiaanalyticsglobal@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/AxiaAnalytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-foreground/10 px-4 py-3 rounded-lg hover:bg-primary-foreground/20 transition"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://linkedin.com/company/AxiaAnalytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-foreground/10 px-4 py-3 rounded-lg hover:bg-primary-foreground/20 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

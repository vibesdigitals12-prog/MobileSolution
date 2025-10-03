import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll contact you shortly at " + formData.phone,
    });
    setFormData({ name: "", phone: "", product: "", message: "" });
  };

  return (
    <section className="py-16 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-contact-name"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  data-testid="input-contact-phone"
                />
              </div>
              <div>
                <Input
                  placeholder="Product Interest (Optional)"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  data-testid="input-contact-product"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                  data-testid="textarea-contact-message"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-contact-submit">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:8950386412" className="flex items-start gap-4 hover-elevate p-3 rounded-md -m-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground" data-testid="text-contact-phone">8950386412</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/918950386412" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover-elevate p-3 rounded-md -m-3"
                >
                  <div className="bg-primary/10 p-2 rounded-md">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">8950386412</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">Mon - Sat: 10 AM - 8 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Quick WhatsApp Contact</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant responses on WhatsApp
              </p>
              <a href="https://wa.me/918950386412" target="_blank" rel="noopener noreferrer">
                <Button className="w-full gap-2" variant="default" data-testid="button-whatsapp-quick">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/rk mobile logo_1759513795900.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="RK MOBILE Solution" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="font-bold text-lg font-serif">RK MOBILE</h3>
                <p className="text-sm text-muted-foreground">Solution</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Premium smartphones and accessories at the best prices. Genuine products with expert support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Smartphones</li>
              <li className="text-muted-foreground">Cases & Covers</li>
              <li className="text-muted-foreground">Chargers</li>
              <li className="text-muted-foreground">Headphones</li>
              <li className="text-muted-foreground">Screen Guards</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:8950386412" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                8950386412
              </a>
              <a href="https://wa.me/918950386412" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <div className="flex gap-2 mt-4">
                <Button size="icon" variant="ghost" className="h-8 w-8" data-testid="button-social-facebook">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8" data-testid="button-social-instagram">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} RK MOBILE Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

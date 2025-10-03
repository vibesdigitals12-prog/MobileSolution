import { Button } from "@/components/ui/button";
import { Phone, Shield, Award, Headphones } from "lucide-react";

interface HeroProps {
  onBrowse?: (category: string) => void;
}

export default function Hero({ onBrowse }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
            Latest Smartphones & Accessories
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Premium Quality, Best Prices
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" onClick={() => onBrowse?.('Smartphones')} data-testid="button-shop-phones">
              Shop Phones
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background/60 backdrop-blur"
              onClick={() => onBrowse?.('Accessories')}
              data-testid="button-browse-accessories"
            >
              Browse Accessories
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, text: "Genuine Products" },
              { icon: Award, text: "Best Warranty" },
              { icon: Headphones, text: "Expert Support" },
              { icon: Phone, text: "24/7 Available" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm" data-testid={`trust-badge-${idx}`}>
                <div className="bg-primary/10 p-2 rounded-md">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
}

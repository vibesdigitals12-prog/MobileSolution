import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Phone } from "lucide-react";

interface FeaturedDeal {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  gradient: string;
}

const featuredDeals: FeaturedDeal[] = [
  {
    id: "1",
    title: "Flagship Deal of the Week",
    description: "Premium smartphones with exclusive discounts",
    price: 45999,
    originalPrice: 59999,
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    id: "2",
    title: "Accessory Combo Pack",
    description: "Get 50% off on cases, chargers & more",
    price: 1499,
    originalPrice: 2999,
    gradient: "from-purple-600/20 to-pink-600/20"
  }
];

export default function FeaturedSection() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold font-serif">Featured Deals</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredDeals.map((deal) => {
            const discount = Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100);
            
            return (
              <Card 
                key={deal.id} 
                className={`relative overflow-hidden p-8 bg-gradient-to-br ${deal.gradient}`}
                data-testid={`card-featured-${deal.id}`}
              >
                <Badge className="mb-4 bg-accent text-accent-foreground" data-testid={`badge-discount-${deal.id}`}>
                  {discount}% OFF - Limited Time
                </Badge>
                
                <h3 className="text-2xl font-bold mb-2" data-testid={`text-deal-title-${deal.id}`}>
                  {deal.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {deal.description}
                </p>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-primary" data-testid={`text-deal-price-${deal.id}`}>
                    ₹{deal.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{deal.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <a href="tel:8950386412">
                  <Button className="gap-2" data-testid={`button-contact-deal-${deal.id}`}>
                    <Phone className="h-4 w-4" />
                    Contact for Deal
                  </Button>
                </a>

                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

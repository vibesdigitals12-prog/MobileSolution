import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  specs?: string[];
  badge?: string;
  inStock: number;
}

interface ProductCardProps {
  product: Product;
  onContact?: (product: Product) => void;
}

export default function ProductCard({ product, onContact }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-product-${product.id}`}>
      <div className="relative aspect-square bg-gradient-to-br from-muted/50 to-muted p-6">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${product.image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        {product.badge && (
          <Badge className="absolute top-3 right-3" variant="default" data-testid={`badge-${product.id}`}>
            {product.badge}
          </Badge>
        )}
        {discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground" data-testid={`discount-${product.id}`}>
            {discount}% OFF
          </Badge>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg mb-1" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          {product.specs && product.specs.length > 0 && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.specs.slice(0, 2).join(' • ')}
            </p>
          )}
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold font-serif text-primary" data-testid={`text-price-${product.id}`}>
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {product.inStock ? (
          <div className="flex gap-2">
            <a href="tel:8950386412" className="flex-1">
              <Button 
                size="sm" 
                variant="default" 
                className="w-full gap-2"
                data-testid={`button-call-${product.id}`}
              >
                <Phone className="h-4 w-4" />
                Call
              </Button>
            </a>
            <a href="https://wa.me/918950386412" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full gap-2"
                data-testid={`button-whatsapp-${product.id}`}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        ) : (
          <Badge variant="secondary" className="w-full justify-center" data-testid={`badge-out-of-stock-${product.id}`}>
            Out of Stock
          </Badge>
        )}
      </div>
    </Card>
  );
}

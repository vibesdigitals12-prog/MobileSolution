import ProductCard, { Product } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onContact?: (product: Product) => void;
}

export default function ProductGrid({ products, onContact }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onContact={onContact}
        />
      ))}
    </div>
  );
}

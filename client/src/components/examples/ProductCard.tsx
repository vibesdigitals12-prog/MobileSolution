import ProductCard, { Product } from '../ProductCard';

export default function ProductCardExample() {
  const sampleProduct: Product = {
    id: '1',
    name: 'Premium Flagship Phone',
    category: 'Smartphones',
    price: 49999,
    originalPrice: 59999,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="48" fill="%236b7280"%3EPhone%3C/text%3E%3C/svg%3E',
    specs: ['6.7" AMOLED Display', '256GB Storage', '5G Network'],
    badge: 'Best Seller',
    inStock: 1
  };

  return (
    <div className="max-w-sm">
      <ProductCard product={sampleProduct} />
    </div>
  );
}

import ProductGrid from '../ProductGrid';
import { Product } from '../ProductCard';

export default function ProductGridExample() {
  const products: Product[] = [
    {
      id: '1',
      name: 'Flagship Pro Max',
      category: 'Smartphones',
      price: 79999,
      originalPrice: 89999,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23dbeafe" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="32" fill="%233b82f6"%3EPro Max%3C/text%3E%3C/svg%3E',
      specs: ['6.7" Display', '512GB', '5G'],
      badge: 'New',
      inStock: 1
    },
    {
      id: '2',
      name: 'Premium Case Combo',
      category: 'Accessories',
      price: 999,
      originalPrice: 1499,
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f3e8ff" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="32" fill="%23a855f7"%3ECase%3C/text%3E%3C/svg%3E',
      specs: ['Shockproof', 'All Models'],
      inStock: 1
    }
  ];

  return (
    <div className="p-4">
      <ProductGrid products={products} />
    </div>
  );
}

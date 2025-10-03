import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import FeaturedSection from "@/components/FeaturedSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DownloadButton from "@/components/DownloadButton";
import { Product } from "@/components/ProductCard";

// todo: remove mock functionality - replace with real data from backend
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Flagship Pro Max',
    category: 'Smartphones',
    price: 79999,
    originalPrice: 89999,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Cdefs%3E%3ClinearGradient id="g1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%233b82f6;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%238b5cf6;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g1)" width="400" height="400"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="28" font-weight="600" fill="white"%3EPro Max%3C/text%3E%3Ctext x="50%25" y="55%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="white" opacity="0.9"%3E512GB%3C/text%3E%3C/svg%3E',
    specs: ['6.7" AMOLED Display', '512GB Storage', '5G Network', '108MP Camera'],
    badge: 'New Arrival',
    inStock: 1
  },
  {
    id: '2',
    name: 'Ultra 5G Smartphone',
    category: 'Smartphones',
    price: 54999,
    originalPrice: 64999,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Cdefs%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2306b6d4;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%233b82f6;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g2)" width="400" height="400"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="28" font-weight="600" fill="white"%3EUltra 5G%3C/text%3E%3Ctext x="50%25" y="55%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="white" opacity="0.9"%3E256GB%3C/text%3E%3C/svg%3E',
    specs: ['6.5" Display', '256GB', '5G', '64MP'],
    badge: 'Best Seller',
    inStock: 1
  },
  {
    id: '3',
    name: 'Budget Smart Plus',
    category: 'Smartphones',
    price: 15999,
    originalPrice: 18999,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Cdefs%3E%3ClinearGradient id="g3" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2310b981;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%2306b6d4;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g3)" width="400" height="400"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="28" font-weight="600" fill="white"%3ESmart Plus%3C/text%3E%3Ctext x="50%25" y="55%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="white" opacity="0.9"%3E128GB%3C/text%3E%3C/svg%3E',
    specs: ['6.1" Display', '128GB', '4G', '48MP'],
    inStock: 1
  },
  {
    id: '4',
    name: 'Mid-Range Power',
    category: 'Smartphones',
    price: 29999,
    originalPrice: 34999,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Cdefs%3E%3ClinearGradient id="g4" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23f59e0b;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23ef4444;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g4)" width="400" height="400"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="28" font-weight="600" fill="white"%3EPower%3C/text%3E%3Ctext x="50%25" y="55%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="white" opacity="0.9"%3E128GB%3C/text%3E%3C/svg%3E',
    specs: ['6.4" Display', '128GB', '5G', '50MP'],
    inStock: 1
  },
  {
    id: '5',
    name: 'Premium Case Bundle',
    category: 'Accessories',
    price: 1499,
    originalPrice: 2499,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Cdefs%3E%3ClinearGradient id="g5" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23a855f7;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23ec4899;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g5)" width="400" height="400"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="28" font-weight="600" fill="white"%3ECase Bundle%3C/text%3E%3Ctext x="50%25" y="55%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="white" opacity="0.9"%3E3 Pieces%3C/text%3E%3C/svg%3E',
    specs: ['Shockproof', 'All Models', '3 Colors'],
    badge: 'Deal',
    inStock: 1
  },
  {
    id: '6',
    name: 'Fast Charger 65W',
    category: 'Accessories',
    price: 1299,
    originalPrice: 1999,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Cdefs%3E%3ClinearGradient id="g6" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2314b8a6;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%2310b981;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g6)" width="400" height="400"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="28" font-weight="600" fill="white"%3E65W Charger%3C/text%3E%3Ctext x="50%25" y="55%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="white" opacity="0.9"%3EFast Charging%3C/text%3E%3C/svg%3E',
    specs: ['65W Fast Charge', 'Type-C Cable', 'Universal'],
    inStock: 1
  },
  {
    id: '7',
    name: 'Wireless Earbuds Pro',
    category: 'Accessories',
    price: 2999,
    originalPrice: 4499,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Cdefs%3E%3ClinearGradient id="g7" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%236366f1;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%238b5cf6;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g7)" width="400" height="400"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="28" font-weight="600" fill="white"%3EEarbuds Pro%3C/text%3E%3Ctext x="50%25" y="55%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="white" opacity="0.9"%3EWireless%3C/text%3E%3C/svg%3E',
    specs: ['ANC', '40H Battery', 'Touch Control'],
    badge: 'Popular',
    inStock: 1
  },
  {
    id: '8',
    name: 'Tempered Glass Pack',
    category: 'Accessories',
    price: 399,
    originalPrice: 799,
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Cdefs%3E%3ClinearGradient id="g8" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2394a3b8;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%2364748b;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g8)" width="400" height="400"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="28" font-weight="600" fill="white"%3EScreen Guard%3C/text%3E%3Ctext x="50%25" y="55%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="white" opacity="0.9"%3E2 Pack%3C/text%3E%3C/svg%3E',
    specs: ['9H Hardness', 'All Models', '2 Pack'],
    inStock: 1
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Smartphones', 'Accessories', 'Featured', 'New Arrivals'];

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    if (activeCategory !== 'All') {
      if (activeCategory === 'Featured') {
        filtered = mockProducts.filter(p => p.badge === 'Deal' || p.badge === 'Best Seller');
      } else if (activeCategory === 'New Arrivals') {
        filtered = mockProducts.filter(p => p.badge === 'New Arrival' || p.badge === 'New');
      } else {
        filtered = mockProducts.filter(p => p.category === activeCategory);
      }
    }

    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs?.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const scrollToProducts = (category: string) => {
    setActiveCategory(category);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={setSearchQuery} />
      
      <div className="bg-accent/20 border-b border-accent/30 py-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <p className="text-sm font-medium">Complete Source Code Available</p>
          <DownloadButton />
        </div>
      </div>

      <Hero onBrowse={scrollToProducts} />
      
      <div id="products">
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <section className="container mx-auto px-4 py-12">
          <ProductGrid products={filteredProducts} />
        </section>
      </div>

      <FeaturedSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

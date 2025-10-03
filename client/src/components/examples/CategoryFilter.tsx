import CategoryFilter from '../CategoryFilter';
import { useState } from 'react';

export default function CategoryFilterExample() {
  const [active, setActive] = useState('All');
  const categories = ['All', 'Smartphones', 'Accessories', 'Featured', 'New Arrivals'];
  
  return (
    <CategoryFilter 
      categories={categories}
      activeCategory={active}
      onCategoryChange={setActive}
    />
  );
}

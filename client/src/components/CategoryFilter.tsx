import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className="whitespace-nowrap"
              data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Phone, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import logoImage from "@assets/rk mobile logo_1759513795900.jpg";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
}

export default function Header({ onSearch, onCategoryChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="RK MOBILE Solution" className="h-10 w-10 object-contain" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold font-serif">RK MOBILE</h1>
                <p className="text-xs text-muted-foreground -mt-1">Solution</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search mobiles & accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                data-testid="input-search"
              />
            </div>
          </form>

          <div className="flex items-center gap-2">
            <a href="tel:8950386412">
              <Button variant="default" size="sm" className="hidden sm:flex gap-2" data-testid="button-call">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">8950386412</span>
              </Button>
            </a>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                  data-testid="input-search-mobile"
                />
              </div>
            </form>
            <a href="tel:8950386412" className="block">
              <Button variant="default" className="w-full gap-2" data-testid="button-call-mobile">
                <Phone className="h-4 w-4" />
                Call 8950386412
              </Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

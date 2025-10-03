import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918950386412"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      data-testid="button-whatsapp-float"
    >
      <Button 
        size="icon" 
        className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-green-600 hover:bg-green-700 text-white"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
}

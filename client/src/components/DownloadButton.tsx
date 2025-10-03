import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadButton() {
  const handleDownload = () => {
    window.open('/download-source', '_blank');
  };

  return (
    <Button 
      onClick={handleDownload}
      size="lg"
      className="gap-2 bg-green-600 hover:bg-green-700 text-white"
      data-testid="button-download-source"
    >
      <Download className="h-5 w-5" />
      Download Source Code (ZIP)
    </Button>
  );
}

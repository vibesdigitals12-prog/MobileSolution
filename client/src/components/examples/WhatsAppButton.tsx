import WhatsAppButton from '../WhatsAppButton';

export default function WhatsAppButtonExample() {
  return (
    <div className="relative h-40 border-2 border-dashed rounded-md flex items-center justify-center">
      <p className="text-muted-foreground">WhatsApp button appears in bottom-right corner</p>
      <WhatsAppButton />
    </div>
  );
}

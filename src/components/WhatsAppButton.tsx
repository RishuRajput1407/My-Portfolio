
export const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/919134842606" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block hover:opacity-90 transition-opacity"
      >
        <img 
          src="https://static.vecteezy.com/system/resources/previews/021/460/383/original/whatsapp-logo-free-png.png" 
          alt="WhatsApp" 
          className="w-14 h-14"
        />
      </a>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import WhatsappStart from "../component/WhatsappStart";
import WhatsAppMainPage from "../component/LeftBar";
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  }, []);
  return (
    <div>
      {isOpen ? (
        <WhatsappStart />
      ) : (
        <>
          <WhatsAppMainPage />
        </>
      )}
    </div>
  );
}

export default Home;

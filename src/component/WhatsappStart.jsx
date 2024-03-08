import React from "react";
import "../styles/whatsappStart.css";
function WhatsappStart() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-[400px]   flex flex-col items-center gap-5">
        <img
          className="w-12 opacity-30"
          src="https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png"
          alt="img"
        />
        <span className="inline-block w-full h-1 mt-4 loadigLine"></span>
        <span className="mt-8">
          <h3 className="text-xl">WhatsApp</h3>
          <p className="flex items-center justify-center opacity-60 mt-2">
            <img
              className="w-8"
              src="https://logowik.com/content/uploads/images/803_lock.jpg"
              alt=""
            />
            End-to-end-encryted
          </p>
        </span>
      </div>
    </div>
  );
}

export default WhatsappStart;

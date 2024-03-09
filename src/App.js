import "./App.css";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import ContextProvider from "./context/ContextProvider";
import Mic from "./component/Mic";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Helmet>
          <link
            rel="icon"
            href="https://png.pngtree.com/png-clipart/20230401/original/pngtree-whatsapp-phone-icon-png-image_9015282.png"
            type="image/png"
          />
        </Helmet>
        <Home />
      </ContextProvider>
    </div>
  );
}

export default App;

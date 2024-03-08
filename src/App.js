import "./App.css";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          rel="icon"
          href="https://png.pngtree.com/png-clipart/20230401/original/pngtree-whatsapp-phone-icon-png-image_9015282.png"
          type="image/png"
        />
      </Helmet>
      <Home />
    </div>
  );
}

export default App;

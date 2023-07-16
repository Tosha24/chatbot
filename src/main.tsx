import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ReduxProvider } from "../redux/provider.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
 
    <Router>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </Router>
 
);

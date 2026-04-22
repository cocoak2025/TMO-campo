import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Signal prerenderer (@prerenderer/rollup-plugin) that the page is ready.
// Waits one frame so React has rendered into the DOM.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.dispatchEvent(new Event("render-event"));
  });
});

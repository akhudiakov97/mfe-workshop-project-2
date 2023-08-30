import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory }) => {
  const Router = defaultHistory ? BrowserRouter : MemoryRouter;
  const root = createRoot(el);
  root.render(
    <Router>
      <App onNavigate={onNavigate} />
    </Router>
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      root.render(
        <Router basename={nextPathname}>
          <App onNavigate={onNavigate} />
        </Router>
      );
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_landing-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: true });
  }
}

export { mount };

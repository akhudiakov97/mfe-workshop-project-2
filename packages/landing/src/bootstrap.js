import React from "react";
import { createRoot } from "react-dom/client";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from 'history';
import App from "./App";

const mount = (el, { onNavigate, isDevMode }) => {
  const history = createMemoryHistory();

  const root = createRoot(el);
  root.render(
    isDevMode ? (
      <BrowserRouter>
        <App onNavigate={onNavigate} />
      </BrowserRouter>
    ) : (
      <HistoryRouter history={history}>
        <App onNavigate={onNavigate} />
      </HistoryRouter>
    )
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_landing-dev-root");

  if (devRoot) {
    mount(devRoot, { isDevMode: true });
  }
}

export { mount };

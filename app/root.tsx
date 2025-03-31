import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { createContext, useContext, useState } from "react";

import "./tailwind.css";

// Language context for the application
export const LanguageContext = createContext({
  language: 'ko',
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+KR:wght@100..900&display=swap",
  },
  { rel: "icon", href: "/favicon.ico" },
  { 
    rel: "apple-touch-icon", 
    sizes: "180x180", 
    href: "/images/apple-touch-icon.png" 
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/images/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/images/favicon-16x16.png",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('ko');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  return (
    <html lang={language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-matcha-light">
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
          {children}
        </LanguageContext.Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

import { useEffect } from "react";

const SITE_URL = "https://michellerojas.netlify.app";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface PageMetaOptions {
  title: string;
  description: string;
  image?: string;
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageMeta({ title, description, image = DEFAULT_OG_IMAGE }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", image);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);
    setCanonical(`${SITE_URL}${window.location.pathname}`);
  }, [title, description, image]);
}

"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const CONSENT_STORAGE_KEY = "michaela-cookie-consent";
const CONSENT_ACCEPTED = "accepted";
const CONSENT_REJECTED = "rejected";
const GOOGLE_TAG_MANAGER_ID = "GTM-TT5XXCX5";
export const COOKIE_CONSENT_OPEN_EVENT = "open-cookie-consent";

type ConsentChoice = typeof CONSENT_ACCEPTED | typeof CONSENT_REJECTED;

function readConsent(): ConsentChoice | null {
  const storedChoice = window.localStorage.getItem(CONSENT_STORAGE_KEY);

  return storedChoice === CONSENT_ACCEPTED || storedChoice === CONSENT_REJECTED
    ? storedChoice
    : null;
}

function subscribeToConsent() {
  return () => {};
}

function removeCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const separatorIndex = cookie.indexOf("=");
    const name = (
      separatorIndex === -1 ? cookie : cookie.slice(0, separatorIndex)
    ).trim();

    if (!name) {
      return;
    }

    document.cookie = `${name}=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = `${name}=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
  });
}

function removeGoogleTagManager() {
  document
    .querySelectorAll(
      `script[src*="googletagmanager.com"], iframe[src*="googletagmanager.com"], script[data-consent-gtm="${GOOGLE_TAG_MANAGER_ID}"]`,
    )
    .forEach((element) => element.remove());

  delete window.dataLayer;
}

function loadGoogleTagManager() {
  if (
    document.querySelector(
      `script[data-consent-gtm="${GOOGLE_TAG_MANAGER_ID}"]`,
    )
  ) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_MANAGER_ID}`;
  script.dataset.consentGtm = GOOGLE_TAG_MANAGER_ID;
  document.head.appendChild(script);
}

export default function CookieConsent() {
  const choice = useSyncExternalStore(
    subscribeToConsent,
    readConsent,
    () => null,
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (choice === CONSENT_ACCEPTED) {
      loadGoogleTagManager();
    }
  }, [choice]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);

    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpen);

    return () =>
      window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpen);
  }, []);

  function saveChoice(nextChoice: ConsentChoice) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, nextChoice);

    if (nextChoice === CONSENT_REJECTED) {
      removeCookies();
      removeGoogleTagManager();
    }

    window.location.reload();
  }

  if (choice && !isOpen) {
    return null;
  }

  return (
    <aside
      className="fixed left-0 md:left-3 bottom-0 md:bottom-3 z-50 grid w-fit md:max-w-4/12  bg-cream border-2 border-brown/40 p-6 rounded-xl"
      aria-label="Nastavení cookies"
    >
      <div>
        <h2 className="text-[1.05rem] font-semibold text-foreground">
          Mohu sbírat analytické cookies?
        </h2>
        <p className="mt-1.5 max-w-2xl font-sans text-[0.85rem] leading-normal text-text-light">
          Pomáhají mi pochopit, jak web používáte, a díky tomu ho průběžně
          zlepšovat. Bez vašeho souhlasu nic takového nespustím.
        </p>
      </div>
      <div className="mt-6 flex w-full items-center gap-2.5 self-center sm:w-auto">
        <button
          type="button"
          className="btn-base btn-secondary"
          onClick={() => saveChoice(CONSENT_REJECTED)}
        >
          Odmítnout
        </button>
        <button
          type="button"
          className="btn-base btn-primary"
          onClick={() => saveChoice(CONSENT_ACCEPTED)}
        >
          Povolit
        </button>
      </div>
    </aside>
  );
}

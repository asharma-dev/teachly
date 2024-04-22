"use client";
import { PopupButton, PopupWidget } from "react-calendly";
import { useEffect, useState } from "react";

export default function Calendly() {
  const [rootElement, setRootElement] = useState<null | HTMLElement>(null);

  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("cal_id"));
    }
  }, []);

  return (
    rootElement && (
      <PopupWidget
        url="calendly_URL"
        rootElement={rootElement}
        text="Schedule Appointment"
      />
    )
  );
}

import { useState } from "react";
import "./Disclosure.css";

export default function Disclosure() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <section className="disclosure">
      <h2>Accessible Disclosure</h2>

      <button
        className="disclosure-btn"
        aria-expanded={open}
        aria-controls="disclosure-content"
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        {open ? "Hide Details" : "Show Details"}
      </button>

      <div id="disclosure-content" role="region" hidden={!open}>
        <p>
          This is the disclosure content. It can be expanded and collapsed using
          the mouse or keyboard.
        </p>
      </div>
    </section>
  );
}

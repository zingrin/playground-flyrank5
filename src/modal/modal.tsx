import { useEffect, useRef, useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else {
      openButtonRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section>
      <h2>Accessible Modal</h2>

      <button ref={openButtonRef} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <div className="overlay">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <h3 id="modal-title">Welcome!</h3>

            <p>This is my first accessible modal.</p>

            <button ref={closeButtonRef} onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

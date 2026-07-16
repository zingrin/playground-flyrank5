import { useRef, useState } from "react";
import "./Tabs.css";

const tabs = [
  {
    id: "html",
    title: "HTML",
    content: "HTML is the structure of a web page.",
  },
  {
    id: "css",
    title: "CSS",
    content: "CSS is used for styling web pages.",
  },
  {
    id: "react",
    title: "React",
    content: "React is a JavaScript library for building UIs.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let newIndex = index;

    switch (event.key) {
      case "ArrowRight":
        newIndex = (index + 1) % tabs.length;
        break;

      case "ArrowLeft":
        newIndex = (index - 1 + tabs.length) % tabs.length;
        break;

      case "Home":
        newIndex = 0;
        break;

      case "End":
        newIndex = tabs.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    setActiveTab(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <section>
      <h2>Accessible Tabs</h2>

      <div role="tablist" aria-label="Programming Tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tabs[activeTab].id}`}
        aria-labelledby={`tab-${tabs[activeTab].id}`}
        tabIndex={0}
      >
        <p>{tabs[activeTab].content}</p>
      </div>
    </section>
  );
}

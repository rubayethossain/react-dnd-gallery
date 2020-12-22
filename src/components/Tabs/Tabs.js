import { useState } from "react";
import "./tabs.styles.css";

/* 
    items is an array of objects.
    The object shape is below,
    {
        title: "Image",
        content: anything
    }
*/

function Tabs({ items = [] }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (Array.isArray(items) && !items.length) return null;

  return (
    <div className="tabs">
      <ul className="tab-list">
        {items.map((tab, index) => (
          <li
            className={`tab-item ${activeTabIndex === index ? "active" : ""}`}
            onClick={setActiveTabIndex.bind(null, index)}
            key={index}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      <div className="tab-contents">{items[activeTabIndex].content}</div>
    </div>
  );
}

export default Tabs;

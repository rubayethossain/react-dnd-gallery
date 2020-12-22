import "./switchboard.styles.css";
import { useMemo, useState } from "react";

function SwitchPane({ children }) {
  return <div className="switch-pane">{children}</div>;
}

/* 
    items is an array of objects.
    The object shape is below,
    {
        icon: "iconPath",
        type: "content" || "button",
        content: anything,
        action: function,
        ...extra_properties
    }
*/

function SwitchBoard({ items = [] }) {
  const [activeSwitchIndex, setActiveSwitchIndex] = useState(0);
  const [showPane, togglePane] = useState(false);

  const handleClick = (switchIndex) => {
    const clickedSwitch = items[switchIndex];

    togglePane((paneStatus) => !paneStatus);

    setActiveSwitchIndex(switchIndex);

    if (clickedSwitch.type === "button") {
      clickedSwitch.action(clickedSwitch);
    }
  };

  const activeSwitch = useMemo(() => {
    return items[activeSwitchIndex];
  }, [items, activeSwitchIndex]);

  return (
    <div className="switch-board">
      <ul className="switch-list">
        {items.map((item, index) => (
          <li
            className="switch-list-item"
            key={index}
            onClick={handleClick.bind(null, index)}
          >
            <img src={item.icon} alt="" />
          </li>
        ))}
      </ul>

      {showPane && activeSwitch.type === "content" && (
        <SwitchPane>{activeSwitch.content}</SwitchPane>
      )}
    </div>
  );
}

export default SwitchBoard;

import "./switchboard.styles.css";
import { cogIcon, trashIcon } from "assets/images";

function SwitchPane({ children }) {
  return <div className="switch-pane">{children}</div>;
}

function SwitchBoard(props) {
  return (
    <div className="switch-board">
      <ul className="switch-list">
        <li className="switch-list-item">
          <img src={cogIcon} alt="" />
        </li>
        <li className="switch-list-item">
          <img src={trashIcon} alt="" />
        </li>
      </ul>

      <SwitchPane />
    </div>
  );
}

export default SwitchBoard;

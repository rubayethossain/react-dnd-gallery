import "./switchboard.styles.css";
import { cogIcon, trashIcon } from "assets/images";

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
    </div>
  );
}

export default SwitchBoard;

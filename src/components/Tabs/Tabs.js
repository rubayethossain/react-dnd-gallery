import "./tabs.styles.css";

function Tabs({ items }) {
  return (
    <div className="tabs">
      <ul className="tab-list">
        <li className="tab-item active">Image</li>
        <li className="tab-item">Filter</li>
      </ul>

      <div className="tab-contents">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          temporibus magni non repellendus deserunt ab ipsum quisquam nostrum
          tempore quibusdam? Est magnam enim, totam aliquam deserunt error eius
          facilis obcaecati asperiores ut illo porro?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          temporibus magni non repellendus deserunt ab ipsum quisquam nostrum
          tempore quibusdam? Est magnam enim, totam aliquam deserunt error eius
          facilis obcaecati asperiores ut illo porro?
        </p>
      </div>
    </div>
  );
}

export default Tabs;

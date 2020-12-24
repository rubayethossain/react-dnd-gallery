import "./button.styles.css";

function Button({ children, type, onClick, className, btnType }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${btnType || "primary"} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

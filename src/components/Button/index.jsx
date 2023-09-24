const Button = ({ variant = "primary", children, className, ...rest }) => {
  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "btn btn--primary";
      break;

    case "border":
      variantClass = "btn btn--border --black";
      break;

    default:
      break;
  }

  return (
    <button className={`${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

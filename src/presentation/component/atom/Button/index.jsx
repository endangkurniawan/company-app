import "./style.scss";

const Button = (props) => {
  const { variant, link, children } = props;

  const classNames = variant !== undefined ? `btn btn--${variant}` : "btn btn--primary";

  if (link) {
    return (
      <a {...props} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
};

export default Button;

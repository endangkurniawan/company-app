const Logo = (props) => {
  const { fileName, name, clas } = props;
  return <img src={`./asset/img/logo/${fileName}`} alt={name} className={clas} />;
};

export default Logo;

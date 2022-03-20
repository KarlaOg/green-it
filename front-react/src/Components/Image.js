const Image = ({ small, medium }) => {
  return <img src={small} srcSet={`${small} 375w, ${medium} 768w`} />;
};

export default Image;

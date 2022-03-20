const Image = ({ small, medium }) => {
  return <img src={small} srcSet={`${small} 768w, ${medium} 1280w`} />;
};

export default Image;

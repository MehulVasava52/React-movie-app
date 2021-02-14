import "../resources/loader.css";
const Loader = () => {
  return (
    <div className="loaderContainer">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;

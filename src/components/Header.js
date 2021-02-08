import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="headerContainer">
      <img className="logo" src={require("../resources/images/logo.png")} />
      <SearchBar />
    </div>
  );
};

export default Header;

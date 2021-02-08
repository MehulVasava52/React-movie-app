import "./resources/styles.css";
import MainCardView from "./components/MainCardView";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
const App = (props) => {
  return (
    <div className="appContainer">
      <Header />
      <MainCardView />
      <BottomBar />
    </div>
  );
};

export default App;

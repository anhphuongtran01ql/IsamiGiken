import "./App.css";
import FooterComponent from "./Component/Footer/footer";
import HeaderComponent from "./Component/Header/header";
import TopPage from "./Component/TopPage/topPage";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderComponent className="top-page__header" />
      </header>
      <TopPage className="app__top-page" />
      <footer>
        <FooterComponent className="top-page__footer" />
      </footer>
    </div>
  );
}

export default App;

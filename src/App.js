import "./App.css";
import FooterComponent from "./Component/Footer/footer";
import HeaderComponent from "./Component/Header/header";
import RouteComponent from "./Component/Route/route";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderComponent className="top-page__header" />
      </header>
      <RouteComponent />
      <FooterComponent className="top-page__footer" />
    </div>
  );
}

export default App;

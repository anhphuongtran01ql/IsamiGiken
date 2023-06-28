import "./App.css";
import FooterComponent from "./Component/Footer/footer";
import HeaderComponent from "./Component/Header/header";
import RouteComponent from "./Component/Route/route";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderComponent />
      </header>
      <main>
        <RouteComponent />
      </main>
      <footer>
        <FooterComponent/>
      </footer>
    </div>
  );
}

export default App;

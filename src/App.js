import Header from "./components/Layout/Header.tsx";
import Footer from "./components/Layout/Footer.tsx";
import Home from "./pages/Home/Home.tsx";
import "./index.css"

function App() {
  return (
    <div className="App bg-bgColor text-textBase">
      <Header/>
      <Home />
     <Footer />
    </div>
  );
}

export default App;

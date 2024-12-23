import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import "./index.css"

function App() {
  return (
    <div className="App bg-bgColor text-textBase font-roboto">
      <Header/>
      <Home />
     <Footer />
    </div>
  );
}

export default App;

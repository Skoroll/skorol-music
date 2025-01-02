import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import FilteredMusic from "./pages/FilteredMusic.tsx";
import About from "./pages/About.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App bg-bgColor text-textBase font-roboto flex flex-col min-h-screen">
                <Header />
                <main className="p-5 flex-1">
                    <Routes>
                        <Route path="/skorol-music" element={<Home />} />
                        <Route path="/all" element={<FilteredMusic />} /> 
                        <Route path="/:genre" element={<FilteredMusic />} /> {/* Route dynamique */}
                        <Route path="/a-propos" element={<About />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;

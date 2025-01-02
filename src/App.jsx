import { useState } from "react";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skils from "./Components/Skils/Skils";

function App() {
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
        console.log(theme);
    };

    return (
        <div
            className={`h-auto w-full overflow-hidden transition-colors duration-300 ${
                theme ? "bg-white text-black" : "bg-[#171d32] text-white"
            }`}
        >
            <Navbar handleTheme={handleTheme} theme={theme} />
            <Home theme={theme} />
            <About theme={theme} />
            <Skils theme={theme} />
            <Projects theme={theme} />
            <Footer theme={theme} />
        </div>
    );
}

export default App;

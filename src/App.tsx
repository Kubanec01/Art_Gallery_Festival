import { ParallaxProvider } from "react-scroll-parallax";
import { Footer } from "./components/footerSection/Footer";
import { Navbar } from "./components/navbarSection/Navbar";
import { MainRoutes } from "./routes/MainRoutes";



function App() {
  return (
    <ParallaxProvider>
    <Navbar />
    <MainRoutes />
    <Footer />
    </ParallaxProvider>
  );
}

export default App;

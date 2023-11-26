import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Scrolltotop from "./components/scrollup/Scrolltotop";
import About from "./pages/about/about";
import { Contact } from "./pages/contact/Contact";
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Portfolio />
			<Contact />
			<Scrolltotop />
		</>
	);
}

export default App;

import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import About from "./Sections/About";
import Projects from "./Sections/Project";
import Clients from "./Sections/Clients";
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer";
import WorkExperience from "./Sections/Experience";
const App = () => {
	return (
		<main className="max-w-7xl mx-auto relative">
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Clients />
			<WorkExperience />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;

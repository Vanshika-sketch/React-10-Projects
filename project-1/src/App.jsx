import "./App.css";
import HeroSection from "./components/hero.jsx";
import Navigation from "./components/navigation.jsx";
const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
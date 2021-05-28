import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import useWindowSize from "./utils/useWindowSize";

function App() {

  const size = useWindowSize();

  console.log(size);

  return (
    <>
      <Header />
      <Hero size={size} />
      <FirstSection size={size} />
      <SecondSection />
      <Footer />
    </>
  );
}

export default App;

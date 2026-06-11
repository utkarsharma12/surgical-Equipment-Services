import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProducts from "../components/FeaturedProducts";
import Process from "../components/Process";
import Contact from "../components/Contact";
import AnimatedFlowers from "../components/AnimatedFlowers";

function Home() {
  return (
    <>
      <AnimatedFlowers />
      <Hero />
      <Stats />
      <Categories />
      <About />
      <WhyChooseUs />
      <FeaturedProducts />
      <Process />
      <Contact />
    </>
  );
}

export default Home;
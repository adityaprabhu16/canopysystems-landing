
import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";
import {Services} from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs"; 
import { Pricing } from "./components/sections/Pricing";
import { CTA } from "./components/sections/CallToAction";

function App() {
  return (
  <Layout title="Canopy Systems">
    <Hero />
    <Brands />
    <Services />
    <AboutUs />
    <Pricing />
    <CTA />
  </Layout>);
}

export default App

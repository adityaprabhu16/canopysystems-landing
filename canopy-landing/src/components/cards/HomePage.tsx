
import { Layout } from "../Layout";
import { Hero } from "../sections/Hero";
import { Brands } from "../sections/Brands";
import {Services} from "../sections/Services";
import { AboutUs } from "../sections/AboutUs"; 
import { Pricing } from "../sections/Pricing";
import { CTA } from "../sections/CallToAction";
import { Contact } from "../sections/Contact";

function HomePage() {
  return (
  <Layout title="Canopy Systems">
    <Hero />
    <Brands />
    <Services />
    <AboutUs />
    <Pricing />
    <CTA />
    <Contact />
  </Layout>);
}

export default HomePage
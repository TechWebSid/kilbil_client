import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import OurValues from '../components/OurValues';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <OurValues />
      <Testimonials />
      <Footer />
    </main>
  );
} 
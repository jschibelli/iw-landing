import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesGrid from '../components/ServicesGrid';
import PortfolioTeaser from '../components/PortfolioTeaser';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <ServicesGrid />
      <PortfolioTeaser />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}

import { GetServerSideProps } from 'next';
import { createClient } from 'redis';
import Hero from '../../components/Hero';
import WhyChooseUs from '../../components/WhyChooseUs';
import ServicesGrid from '../../components/ServicesGrid';
import PortfolioTeaser from '../../components/PortfolioTeaser';
import Testimonials from '../../components/Testimonials';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const redis = createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_TOKEN,
  });
  await redis.connect();
  const config = await redis.hGetAll(`tenant:${params?.tenant}`);
  await redis.disconnect();
  return {
    props: { tenantConfig: config || {} },
  };
};

export default function LandingPage({ tenantConfig }: { tenantConfig: any }) {
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
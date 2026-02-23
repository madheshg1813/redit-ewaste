import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import HomeProcess from '@/components/HomeProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServiceAreas from '@/components/ServiceAreas';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Header />
      <Hero />
      <StatsBar />
      <Services />
      <HomeProcess />
      <WhyChooseUs />
      <ServiceAreas />
      <Footer />
    </main>
  );
}

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductMenu from "@/components/ProductMenu";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomOrders from "@/components/CustomOrders";
import Hampers from "@/components/Hampers";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import InstagramSection from "@/components/InstagramSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <Hero />
      <About />
      <ProductMenu />
      <FeaturedProducts />
      <CustomOrders />
      <Hampers />
      <WhyChooseUs />
      <Gallery />
      <InstagramSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

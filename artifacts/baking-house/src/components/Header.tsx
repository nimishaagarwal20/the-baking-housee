import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import logoPath from "@assets/WhatsApp_Image_2026-06-25_at_6.54.10_PM_1782395390273.jpeg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Custom Orders", href: "#custom-orders" },
    { label: "Hampers", href: "#hampers" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoPath}
              alt="The Baking House Logo"
              className="h-12 w-auto rounded-full object-cover transition-all duration-300"
              data-testid="header-logo"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-xl leading-tight text-primary">The Baking Housee</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">By Tanisha Agarwal</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="nav-desktop">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
              data-testid="button-header-order"
            >
              <a href={getWhatsAppLink("Hello The Baking Housee! I would like to place an order.")} target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-md py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2" data-testid="nav-mobile">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="w-full bg-[#25D366] text-white hover:bg-[#128C7E]"
            data-testid="button-mobile-header-order"
          >
            <a href={getWhatsAppLink("Hello The Baking Housee! I would like to place an order.")} target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}

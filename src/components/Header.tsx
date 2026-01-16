import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#home", label: "Əsas səhifə" },
  { href: "#services", label: "Xidmətlər" },
  { href: "#projects", label: "Layihələr" },
  { href: "#news", label: "Xəbərlər" },
  { href: "#careers", label: "Karyera" },
  { href: "#contact", label: "Əlaqə" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 gradient-hero-bg shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-white rounded-lg p-1.5 shadow-md">
              <img
                src={logo}
                alt="MSN Enerji Xidmətləri MMC"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="hidden sm:block text-primary-foreground font-semibold text-lg">
              MSN Enerji Xidmətləri
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:bg-primary-foreground/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1 bg-primary-foreground/10 rounded-xl p-3 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 text-primary-foreground font-medium rounded-lg transition-colors hover:bg-primary-foreground/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

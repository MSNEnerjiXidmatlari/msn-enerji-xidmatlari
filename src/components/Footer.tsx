import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-energy-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Company */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="MSN Enerji Xidmətləri MMC"
              className="h-12 w-auto brightness-0 invert"
            />
            <span className="font-semibold text-lg">
              MSN Enerji Xidmətləri MMC
            </span>
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} MSN Enerji Xidmətləri MMC. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { ArrowDown, Zap, Leaf, Award } from "lucide-react";
import logo from "@/assets/logo.png";


const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-6 font-medium text-sm">
              <Award size={16} />
              İxtisas attestatı sahibi
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              Enerji Səmərəliliyi{" "}
              <span className="gradient-text">Gələcək</span> üçün
            </h1>

            <p className="text-xl text-foreground font-medium mb-8 max-w-xl leading-relaxed">
              Texnoloji yenilik, qabaqcıl həllər və enerjidə mükəmməllik burada!
            </p>

            <p className="text-lg text-muted-foreground mb-4 max-w-xl leading-relaxed">
              "MSN Enerji Xidmətləri MMC" enerji səmərəlilik sektorunda enerji auditoruna
              tələbin formalaşması ilə əlaqədar 20.12.2024-cü il tarixində təsis edilmişdir.
            </p>

            <p className="text-muted-foreground mb-10 max-w-xl">
              Məqsədimiz Azərbaycanın hədəf götürdüyü təmiz enerji keçidinə dəstək olmaq
              və bu məqsədə xidmət etməkdir.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full card-shadow text-sm font-medium">
                <Zap className="text-primary" size={18} />
                Enerji Auditi
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full card-shadow text-sm font-medium">
                <Leaf className="text-secondary" size={18} />
                Təmiz Enerji
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full card-shadow text-sm font-medium">
                <Award className="text-primary" size={18} />
                Sertifikatlı
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-bg text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Əlaqə saxlayın
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Logo Showcase */}
          <div className="flex justify-center lg:justify-center lg:ml-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-30 scale-75" />
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-xl border border-border">
                <img
                  src={logo}
                  alt="MSN Enerji Xidmətləri MMC Logo"
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Building2, Factory, FileSearch, BarChart3, Lightbulb, Settings } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Bina Enerji Auditi",
    description: "Yaşayış və kommersiya binalarının enerji istehlakının qiymətləndirilməsi",
  },
  {
    icon: Factory,
    title: "Sənaye Auditi",
    description: "Sənaye müəssisələri üçün enerji səmərəliliyi təhlili",
  },
  {
    icon: FileSearch,
    title: "Enerji Sertifikatlaşdırma",
    description: "Enerji performans sertifikatlarının hazırlanması",
  },
  {
    icon: BarChart3,
    title: "Enerji Hesabatları",
    description: "Detallı enerji istehlakı hesabatları və təkliflər",
  },
  {
    icon: Lightbulb,
    title: "Səmərəlilik Tövsiyələri",
    description: "Enerji qənaəti üçün praktik tövsiyələr və həllər",
  },
  {
    icon: Settings,
    title: "Texniki Məsləhət",
    description: "Enerji sistemlərinin optimallaşdırılması üzrə məsləhət",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Xidmətlər
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Xidmətlərimiz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bina və təsərrüfat subyektlərinə peşəkar enerji audit xidmətləri göstəririk
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-2xl card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-bg text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Xidmət sifariş et
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

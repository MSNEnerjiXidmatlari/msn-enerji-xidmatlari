import { ExternalLink, Calendar } from "lucide-react";
import newsImage from "@/assets/news_images/news-energy-attestat.jpg";

const newsItems = [
  {
    id: 1,
    title: "Enerji auditi sahəsində növbəti ixtisas attestatı təqdim edilib",
    excerpt:
      "Energetika Nazirliyində növbəti enerji auditoru ixtisası attestatının təqdim olunması məqsədilə görüş keçirilib. Görüşdə Energetika Nazirliyinin müavini Elnur Soltanov 'MSN Enerji Xidmətləri' MMC-nin nümayəndəsinə ixtisas attestatını təqdim etmişdir.",
    link: "https://enerjiportali.az/enerji-auditi-sah%C9%99sind%C9%99-novb%C9%99ti-ixtisas-attestati-t%C9%99qdim-edilib/",
    date: "03.01.2026",
    image: newsImage,
    alt: "Energetika Nazirliyində ixtisas attestatının təqdim olunması görüşü",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Xəbərlər
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ən son xəbərlər
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Şirkətimizin son yenilikləri və sektora dair vacib xəbərlər
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* News Image */}
              <div className="h-48 relative overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-xs font-medium">
                  <Calendar size={12} />
                  {item.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Daha ətraflı
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}

          {/* Coming Soon Card */}
          <div className="bg-muted/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-border min-h-[320px]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Calendar className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Yeni xəbərlər tezliklə
            </h3>
            <p className="text-muted-foreground text-sm">
              Ən son yeniliklərdən xəbərdar olmaq üçün izləyin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

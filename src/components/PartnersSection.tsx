const partners = [
  {
    name: "Azərbaycan Energetika Nazirliyi",
    shortName: "MinEnergy",
    website: "https://www.minenergy.gov.az",
    logo: "https://www.google.com/s2/favicons?domain=www.minenergy.gov.az&sz=128",
  },
  {
    name: "EVO World",
    shortName: "EVO",
    website: "https://www.evo-world.org",
    logo: "https://www.google.com/s2/favicons?domain=www.evo-world.org&sz=128",
  },
  {
    name: "RENAC",
    shortName: "RENAC",
    website: "https://www.renac.de",
    logo: "https://www.google.com/s2/favicons?domain=www.renac.de&sz=128",
  },
  {
    name: "Eco Yapı",
    shortName: "ECO YAPI",
    website: "https://www.eco-yapi.com",
    logo: "https://www.google.com/s2/favicons?domain=www.eco-yapi.com&sz=128",
  },
];

const marqueePartners = [...partners, ...partners];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Tərəfdaşlarımız
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Etibarlı tərəfdaş şəbəkəmiz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Birgə layihələr və peşəkar əməkdaşlıqlar üçün güvəndiyimiz tərəfdaşlar
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 py-6">
          <div className="partners-marquee">
            {marqueePartners.map((partner, index) => (
              <a
                key={`${partner.website}-${index}`}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 min-w-[260px] px-5 py-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
                aria-label={`${partner.name} saytına keçid`}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-10 h-10 rounded-md object-contain"
                />
                <div>
                  <p className="text-xs text-muted-foreground">{partner.shortName}</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {partner.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

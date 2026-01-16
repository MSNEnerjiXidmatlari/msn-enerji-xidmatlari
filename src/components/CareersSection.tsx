import { Briefcase, Users, TrendingUp } from "lucide-react";

const CareersSection = () => {
  return (
    <section id="careers" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Karyera
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Komandamıza qoşulun
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enerji sektorunda karyeranızı inkişaf etdirmək üçün bizimlə əməkdaşlıq edin
          </p>
        </div>

        {/* No Vacancies State */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-muted/50 rounded-2xl p-12 text-center border-2 border-dashed border-border">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Hazırda aktiv vakansiyalarımız yoxdur
            </h3>
            {/* <p className="text-muted-foreground mb-8">
              Lakin CV-nizi göndərə bilərsiniz - gələcək imkanlar üçün sizinlə əlaqə saxlaya bilərik
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
            >
              CV göndər
            </a> */}
          </div>
        </div>

        {/* Why Join Us */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="text-secondary" size={24} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Peşəkar Komanda</h4>
            <p className="text-muted-foreground text-sm">
              Təcrübəli mütəxəssislərdən ibarət komanda ilə işləyin
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-primary" size={24} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">İnkişaf İmkanları</h4>
            <p className="text-muted-foreground text-sm">
              Karyera inkişafı və təhsil imkanları təmin edirik
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="text-secondary" size={24} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Maraqlı Layihələr</h4>
            <p className="text-muted-foreground text-sm">
              Enerji sektorunda innovativ layihələrdə iştirak edin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;

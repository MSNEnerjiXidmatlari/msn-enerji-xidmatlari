import { useState } from "react";
import {
  FileCheck,
  BookOpenCheck,
  ShieldCheck,
  Power,
  BatteryCharging,
  Building2,
  Factory,
  BarChart3,
  Settings,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const services = [
  {
    icon: Building2,
    title: "Bina Enerji Auditi",
    description: "Yaşayış və kommersiya binalarının enerji istehlakının qiymətləndirilməsi",
  },
  {
    icon: Factory,
    title: "Sənaye Enerji Auditi",
    description: "Sənaye müəssisələri üçün enerji səmərəliliyi təhlili",
  },
  {
    icon: BookOpenCheck,
    title: "Təlimlər",
    description: "Enerji effektivliyi istiqamətində təlimlərin keçirilməsi",
  },
  {
    icon: BarChart3,
    title: "Enerji Sertifikatlaşdırma",
    description: "Enerji performans sertifikatlarının hazırlanması",
  },
  {
    icon: FileCheck,
    title: "Enerji Pasportları",
    description: "Hesabatlar üzrə enerji pasportlarının hazırlanması",
  },
  {
    icon: Settings,
    title: "Mühəndis Xidmətləri",
    description: "Enerji məsələlərində mühəndislik xidmətlərinin göstərilməsi",
  },
  {
    icon: ShieldCheck,
    title: "Elektrik təhlükəsizliyi",
    description: "Elektrik sistemlərinin təhlükəsizlik yoxlanışı və həllərin tapılmasına dəstək",
  },
  {
    icon: Power,
    title: "Güc faktoru",
    description: " Lokal elektrik şəbəkələrində güc faktorunun yoxlanışı və optimal avadanlıq seçiminə dəstək",
  },
  {
    icon: BatteryCharging,
    title: "Performans yoxlanışı",
    description: "Akkumulyator-batareya sistemlərində performansın yoxlanılması",
  },
];

const ServicesSection = () => {
  const [isTrainingDialogOpen, setIsTrainingDialogOpen] = useState(false);
  const trainingItems = [
    "Enerji menecerlərin hazırlanması və inkişaf etdirilməsi",
    "Enerji auditorların hazırlanması və inkişafı",
    "Enerjinin iqtisadiyyatı",
    "ISO 50001 Enerji menecment sistemlərinin tətbiqi",
    "Enerji performansın ölçülməsi və doğrulanması",
    "Yaşıl Enerji Layihələrinin işlənib hazırlanması",
    "Bərpa olunan enerji texnologiyaları",
  ];

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
              {service.title === "Təlimlər" && (
                <Dialog
                  open={isTrainingDialogOpen}
                  onOpenChange={setIsTrainingDialogOpen}
                >
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Təlimlərin siyahısı
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Təlimlərin siyahısı</DialogTitle>
                    </DialogHeader>
                    <ul className="space-y-3 list-disc pl-5 text-sm text-muted-foreground">
                      {trainingItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      onClick={() => setIsTrainingDialogOpen(false)}
                      className="inline-flex items-center justify-center mt-4 px-5 py-2.5 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                      Təlim sifariş et
                    </a>
                  </DialogContent>
                </Dialog>
              )}
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

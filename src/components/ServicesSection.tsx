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
  CalendarDays,
  Clock3,
  Check,
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
    {
      name: "Enerji menecerlərin hazırlanması və inkişaf etdirilməsi",
      duration: "2 gün | 5 gün",
      studyTime: "12.5 saat | 40 saat",
      hasFieldTripAndWorkshops: true,
    },
    {
      name: "Enerji auditorların hazırlanması və inkişafı",
      duration: "5 gün",
      studyTime: "40 saat",
      hasFieldTripAndWorkshops: true,
    },
    {
      name: "Enerjinin iqtisadiyyatı",
      duration: "5 gün",
      studyTime: "40 saat",
      hasFieldTripAndWorkshops: true,
    },
    {
      name: "ISO 50001 Enerji menecment sistemlərinin tətbiqi",
      displayName: "İSO 50001 Enerji menecment sistemlərinin tətbiqi",
      duration: "5 gün",
      studyTime: "40 saat",
      hasFieldTripAndWorkshops: true,
    },
    {
      name: "Enerji performansın ölçülməsi və doğrulanması",
      duration: "2 gün",
      studyTime: "12 saat",
      hasFieldTripAndWorkshops: true,
    },
    {
      name: "Yaşıl Enerji Layihələrinin işlənib hazırlanması",
      duration: "5 gün",
      studyTime: "40 saat",
      hasFieldTripAndWorkshops: true,
    },
    {
      name: "Bərpa olunan enerji texnologiyaları",
      displayName: "Bərpa olunan enerji texnologiyaları üzrə təlimlər",
      duration: "5 gün",
      studyTime: "40 saat",
      hasFieldTripAndWorkshops: true,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
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
                  <DialogContent className="sm:max-w-6xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Təlimlərin siyahısı</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {trainingItems.map((item) => {
                        const subject = encodeURIComponent(
                          `Təlim üçün müraciət: ${item.name}`,
                        );

                        return (
                          <article
                            key={item.name}
                            className="group rounded-2xl border border-primary/10 bg-gradient-to-b from-card to-muted/40 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
                          >
                            <h4 className="min-h-12 text-base font-semibold text-foreground mb-4 leading-snug">
                              {item.displayName ?? item.name}
                            </h4>

                            <div className="space-y-2.5 text-sm text-muted-foreground">
                              <p className="flex items-center gap-2 rounded-lg bg-background/70 px-2.5 py-2">
                                <Clock3 size={16} className="text-foreground/70" />
                                <span>
                                  Müddət: <strong className="text-foreground">{item.duration}</strong>
                                </span>
                              </p>
                              <p className="flex items-center gap-2 rounded-lg bg-background/70 px-2.5 py-2">
                                <CalendarDays size={16} className="text-foreground/70" />
                                <span>
                                  Tədris vaxtı:{" "}
                                  <strong className="text-foreground">{item.studyTime}</strong>
                                </span>
                              </p>
                              <p className="flex items-start gap-2 rounded-lg bg-background/70 px-2.5 py-2">
                                <Check size={16} className="mt-0.5 text-green-600" />
                                <span>
                                  Sahə səfərləri və praktiki seminarlar{" "}
                                  <strong
                                    className="ml-1 inline-block rounded-md px-2 py-0.5 text-xs bg-green-100 text-green-700"
                                  >
                                    {item.hasFieldTripAndWorkshops ? "mövcuddur" : "mövcud deyil"}
                                  </strong>
                                </span>
                              </p>
                            </div>

                            <a
                              href={`mailto:office@msnenerji.az?subject=${subject}`}
                              className="inline-flex w-full items-center justify-center mt-5 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md group-hover:scale-[1.01]"
                            >
                              Təlim üçün müraciət et
                            </a>
                          </article>
                        );
                      })}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          ))}
        </div>

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

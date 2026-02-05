import { useState } from "react";
import { Phone, Mail, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzzpyvq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Əlaqə
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Bizimlə əlaqə saxlayın
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Suallarınız üçün bizimlə əlaqə saxlayın - ən qısa zamanda cavab verəcəyik
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Əlaqə məlumatları
            </h3>

            <div className="space-y-6">
              <a
                href="tel:+994509904373"
                className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="text-primary group-hover:text-primary-foreground" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-semibold text-foreground">+994 50 990 43 73</p>
                </div>
              </a>

              <a
                href="mailto:office@msnenerji.az"
                className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Mail className="text-secondary group-hover:text-secondary-foreground" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">office@msnenerji.az</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/msn-enerji-xidm%C9%99tl%C9%99ri-mmc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Linkedin className="text-primary group-hover:text-primary-foreground" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-semibold text-foreground">MSN Enerji Xidmətləri MMC</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl card-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <MapPin className="text-secondary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ünvan</p>
                  <p className="font-semibold text-foreground">Bakı, Azərbaycan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            {isSubmitted ? (
              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Mesajınız göndərildi!
                </h3>
                <p className="text-muted-foreground">
                  Bizimlə əlaqə saxladığınız üçün təşəkkür edirik. Ən qısa zamanda sizinlə əlaqə saxlayacağıq.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-primary font-medium hover:underline"
                >
                  Yeni mesaj göndər
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 card-shadow"
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Adınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Adınızı daxil edin"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Email ünvanınızı daxil edin"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Mesajınızı yazın..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 gradient-bg text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Göndərilir..."
                    ) : (
                      <>
                        Mesaj göndər
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { FolderKanban, Clock } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4 font-medium text-sm">
            <FolderKanban size={16} />
            Layihələrimiz
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tamamlanmış Layihələr
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enerji səmərəliliyi sahəsində həyata keçirdiyimiz layihələr
          </p>
        </div>

        {/* Coming Soon Placeholder */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-12 card-shadow text-center border border-border">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Tezliklə
            </h3>
            <p className="text-muted-foreground mb-6">
              Layihələrimiz haqqında məlumatlar tezliklə burada yerləşdiriləcək.
              Enerji auditi və səmərəlilik sahəsində həyata keçirdiyimiz 
              layihələri sizinlə paylaşacağıq.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                Enerji Auditi
              </span>
              <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                Səmərəlilik Layihələri
              </span>
              <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                Məsləhət Xidmətləri
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

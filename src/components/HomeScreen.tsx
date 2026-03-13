import { MODULES, type Module } from "@/data/modules";
import { Lock, Play, ChevronRight } from "lucide-react";

import modulo1Img from "@/assets/modulo-1.png";
import modulo2Img from "@/assets/modulo-2.png";
import modulo3Img from "@/assets/modulo-3.png";
import modulo4Img from "@/assets/modulo-4.png";
import modulo5Img from "@/assets/modulo-5.png";
import modulo6Img from "@/assets/modulo-6.png";

const MODULE_IMAGES: Record<string, string> = {
  iniciante: modulo1Img,
  copa: modulo2Img,
  whatsapp: modulo3Img,
  precificacao: modulo4Img,
  planilha: modulo5Img,
  virais: modulo6Img,
};

interface HomeScreenProps {
  unlockedModules: string[];
  completedLessons: string[];
  onNavigate: (screen: string) => void;
}

const HomeScreen = ({ unlockedModules, completedLessons, onNavigate }: HomeScreenProps) => {
  const allUnlockedLessons = MODULES.filter((m) => unlockedModules.includes(m.id))
    .flatMap((m) => m.lessons)
    .filter((l) => !l.comingSoon && !l.isDownload);
  const totalLessons = allUnlockedLessons.length;
  const completedCount = allUnlockedLessons.filter((l) => completedLessons.includes(l.id)).length;
  const progressPercent = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

  const getModuleProgress = (mod: Module) => {
    const available = mod.lessons.filter((l) => !l.comingSoon && !l.isDownload);
    const done = available.filter((l) => completedLessons.includes(l.id)).length;
    return { done, total: available.length, percent: available.length > 0 ? (done / available.length) * 100 : 0 };
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-primary rounded-xl p-6 md:p-8 mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-secondary mb-2">
          Bem-vinda, Copa Lucrativa! 🧶
        </h1>
        <p className="font-body text-primary-foreground/80">
          Sua jornada para lucrar com crochê começa agora.
        </p>

        <div className="mt-6">
          <div className="flex justify-between text-sm font-body text-primary-foreground/70 mb-2">
            <span>Seu progresso</span>
            <span>{completedCount} de {totalLessons} aulas concluídas</span>
          </div>
          <div className="h-3 bg-green-mid rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Module Cards */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {MODULES.map((mod) => {
          const isUnlocked = unlockedModules.includes(mod.id);
          const progress = getModuleProgress(mod);

          if (!isUnlocked) {
            return (
              <div
                key={mod.id}
                className="bg-muted/60 rounded-xl p-6 border border-border opacity-60"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground/50">{mod.shortTitle}</h3>
                    <p className="text-xs font-body text-muted-foreground">{mod.lessons.length} aulas</p>
                  </div>
                </div>
                <p className="text-sm font-body text-muted-foreground">
                  Disponível no plano completo
                </p>
              </div>
            );
          }

          return (
            <div
              key={mod.id}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => onNavigate(mod.id)}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">{mod.icon}</span>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                    {mod.shortTitle}
                  </h3>
                  <p className="text-xs font-body text-muted-foreground">{progress.total} aulas</p>
                </div>
                <ChevronRight size={20} className="text-muted-foreground group-hover:text-accent transition-colors mt-1" />
              </div>

              {MODULE_IMAGES[mod.id] && (
                <div className="rounded-lg overflow-hidden mb-3">
                  <img
                    src={MODULE_IMAGES[mod.id]}
                    alt={mod.shortTitle}
                    className="w-full h-32 object-cover"
                  />
                </div>
              )}

              <div className="mb-4">
                <div className="flex justify-between text-xs font-body text-muted-foreground mb-1">
                  <span>{progress.done}/{progress.total}</span>
                  <span>{Math.round(progress.percent)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full transition-all duration-500"
                    style={{ width: `${progress.percent}%` }}
                  />
                </div>
              </div>

              <button className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-green-mid transition-colors flex items-center justify-center gap-2">
                <Play size={14} />
                {progress.done > 0 ? "Continuar" : "Começar"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Motivational footer */}
      <p className="text-center font-display italic text-primary/70 mt-10 text-lg">
        "Cada ponto dado hoje é dinheiro no bolso amanhã."
      </p>
    </div>
  );
};

export default HomeScreen;

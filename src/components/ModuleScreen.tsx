import { MODULES, type Module, type Lesson } from "@/data/modules";
import { CheckCircle2, Circle, Clock, Download } from "lucide-react";

interface ModuleScreenProps {
  moduleId: string;
  completedLessons: string[];
  onSelectLesson: (moduleId: string, lessonId: string) => void;
}

const ModuleScreen = ({ moduleId, completedLessons, onSelectLesson }: ModuleScreenProps) => {
  const mod = MODULES.find((m) => m.id === moduleId);
  if (!mod) return null;

  const availableLessons = mod.lessons.filter((l) => !l.comingSoon);
  const totalAvailable = availableLessons.filter((l) => !l.isDownload).length;
  const completedCount = availableLessons.filter((l) => !l.isDownload && completedLessons.includes(l.id)).length;

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{mod.icon}</span>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">{mod.title}</h1>
        </div>
        <p className="font-body text-muted-foreground">
          {completedCount} de {totalAvailable} aulas concluídas
        </p>
        <div className="h-2 bg-muted rounded-full overflow-hidden mt-3 max-w-md">
          <div
            className="h-full bg-secondary rounded-full transition-all"
            style={{ width: `${totalAvailable > 0 ? (completedCount / totalAvailable) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        {mod.lessons.map((lesson, index) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const isComingSoon = lesson.comingSoon;

          return (
            <button
              key={lesson.id}
              disabled={isComingSoon}
              onClick={() => !isComingSoon && onSelectLesson(mod.id, lesson.id)}
              className={`w-full text-left p-4 rounded-lg border flex items-center gap-4 transition-all font-body ${
                isComingSoon
                  ? "bg-muted/40 border-border/50 cursor-not-allowed opacity-50"
                  : isCompleted
                  ? "bg-card border-secondary/30 hover:border-secondary/50"
                  : "bg-card border-border hover:border-accent hover:shadow-sm"
              }`}
            >
              <div className="flex-shrink-0">
                {isComingSoon ? (
                  <Clock size={20} className="text-muted-foreground" />
                ) : lesson.isDownload ? (
                  <Download size={20} className="text-accent" />
                ) : isCompleted ? (
                  <CheckCircle2 size={20} className="text-secondary" />
                ) : (
                  <Circle size={20} className="text-muted-foreground" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-foreground">
                  Aula {lesson.id}
                </span>
                <p className={`text-sm ${isComingSoon ? "text-muted-foreground" : "text-foreground"}`}>
                  {lesson.title}
                </p>
              </div>

              {isComingSoon && (
                <span className="text-xs bg-muted px-2 py-1 rounded font-body text-muted-foreground flex-shrink-0">
                  🔜 Em breve
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleScreen;

import { useState, useEffect } from "react";
import { MODULES } from "@/data/modules";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, ChevronLeft } from "lucide-react";

interface LessonScreenProps {
  moduleId: string;
  lessonId: string;
  completedLessons: string[];
  onToggleComplete: (lessonId: string) => void;
  onSelectLesson: (moduleId: string, lessonId: string) => void;
  onBack: () => void;
}

const LessonScreen = ({
  moduleId,
  lessonId,
  completedLessons,
  onToggleComplete,
  onSelectLesson,
  onBack,
}: LessonScreenProps) => {
  const mod = MODULES.find((m) => m.id === moduleId);
  if (!mod) return null;

  const availableLessons = mod.lessons.filter((l) => !l.comingSoon);
  const currentIndex = availableLessons.findIndex((l) => l.id === lessonId);
  const lesson = availableLessons[currentIndex];
  if (!lesson) return null;

  const prevLesson = currentIndex > 0 ? availableLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < availableLessons.length - 1 ? availableLessons[currentIndex + 1] : null;
  const isCompleted = completedLessons.includes(lesson.id);

  if (lesson.isDownload) {
    return (
      <div className="animate-fade-in max-w-3xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 font-body text-sm transition-colors">
          <ChevronLeft size={16} /> Voltar ao módulo
        </button>
        <div className="bg-card rounded-xl p-8 border border-border text-center">
          <span className="text-5xl mb-4 block">📥</span>
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">{lesson.title}</h2>
          <p className="font-body text-muted-foreground mb-6">
            Baixe as planilhas exclusivas para organizar suas finanças e precificar suas peças de crochê.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Planilha_de_precificacao.xlsx"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-body font-bold rounded-lg hover:brightness-110 transition-all"
            >
              📊 Planilha de Precificação
            </a>
            <a
              href="/MEI_Resumo_de_faturamento.xlsx"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-bold rounded-lg hover:brightness-110 transition-all"
            >
              💰 Resumo de Faturamento MEI
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 font-body text-sm transition-colors">
        <ChevronLeft size={16} /> Voltar ao módulo
      </button>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6">
        {/* Main content */}
        <div>
          {/* Video player */}
          <div className="relative w-full pb-[56.25%] bg-primary/10 rounded-xl overflow-hidden mb-6">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0&modestbranding=1`}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Lesson info */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="text-sm font-body text-muted-foreground mb-1">
                {mod.shortTitle} • Aula {lesson.id}
              </p>
              <h1 className="font-display text-xl md:text-2xl font-bold text-foreground">
                {lesson.title}
              </h1>
            </div>
            <button
              onClick={() => onToggleComplete(lesson.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm transition-all border ${
                isCompleted
                  ? "bg-secondary/10 border-secondary text-secondary-foreground"
                  : "bg-card border-border text-muted-foreground hover:border-secondary"
              }`}
            >
              {isCompleted ? <CheckCircle2 size={18} className="text-secondary" /> : <Circle size={18} />}
              {isCompleted ? "Concluída" : "Marcar como concluída"}
            </button>
          </div>

          <p className="font-body text-muted-foreground text-sm mb-6">
            Descrição da aula será adicionada aqui. Assista com atenção e pratique os passos demonstrados.
          </p>

          {/* Navigation buttons */}
          <div className="flex gap-3">
            {prevLesson && (
              <button
                onClick={() => onSelectLesson(moduleId, prevLesson.id)}
                className="flex items-center gap-2 px-5 py-3 bg-muted text-foreground rounded-lg font-body text-sm hover:bg-muted/80 transition-colors"
              >
                <ArrowLeft size={16} /> Aula anterior
              </button>
            )}
            {nextLesson && (
              <button
                onClick={() => onSelectLesson(moduleId, nextLesson.id)}
                className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-body text-sm hover:bg-green-mid transition-colors ml-auto"
              >
                Próxima aula <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Sidebar lesson list */}
        <div className="bg-card rounded-xl border border-border p-4 h-fit max-h-[70vh] overflow-y-auto hidden xl:block">
          <h3 className="font-display font-semibold text-foreground mb-3 text-sm">
            {mod.shortTitle}
          </h3>
          <div className="space-y-1">
            {availableLessons.map((l) => {
              const done = completedLessons.includes(l.id);
              const active = l.id === lessonId;
              return (
                <button
                  key={l.id}
                  onClick={() => onSelectLesson(moduleId, l.id)}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 text-xs font-body transition-colors ${
                    active
                      ? "bg-secondary/15 text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {done ? (
                    <CheckCircle2 size={14} className="text-secondary flex-shrink-0" />
                  ) : (
                    <Circle size={14} className="flex-shrink-0" />
                  )}
                  <span className="truncate">{l.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonScreen;

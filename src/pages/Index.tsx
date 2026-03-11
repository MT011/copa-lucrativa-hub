import { useState, useEffect } from "react";
import { PASSWORDS } from "@/data/modules";
import LoginScreen from "@/components/LoginScreen";
import MembersSidebar from "@/components/MembersSidebar";
import HomeScreen from "@/components/HomeScreen";
import ModuleScreen from "@/components/ModuleScreen";
import LessonScreen from "@/components/LessonScreen";

const Index = () => {
  const [unlockedModules, setUnlockedModules] = useState<string[] | null>(null);
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentLesson, setCurrentLesson] = useState<{ moduleId: string; lessonId: string } | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Restore session
  useEffect(() => {
    const savedPassword = localStorage.getItem("copa_password");
    if (savedPassword && PASSWORDS[savedPassword]) {
      setUnlockedModules(PASSWORDS[savedPassword]);
    }
    const saved = localStorage.getItem("copa_completed");
    if (saved) {
      try { setCompletedLessons(JSON.parse(saved)); } catch {}
    }
  }, []);

  const handleLogin = (modules: string[]) => {
    setUnlockedModules(modules);
  };

  const handleLogout = () => {
    localStorage.removeItem("copa_password");
    setUnlockedModules(null);
    setCurrentScreen("home");
    setCurrentLesson(null);
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
    setCurrentLesson(null);
  };

  const handleSelectLesson = (moduleId: string, lessonId: string) => {
    setCurrentLesson({ moduleId, lessonId });
    setCurrentScreen(moduleId);
  };

  const handleToggleComplete = (lessonId: string) => {
    setCompletedLessons((prev) => {
      const next = prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId];
      localStorage.setItem("copa_completed", JSON.stringify(next));
      return next;
    });
  };

  // Login screen
  if (!unlockedModules) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Members area
  return (
    <div className="min-h-screen bg-background">
      <MembersSidebar
        unlockedModules={unlockedModules}
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        mobileOpen={mobileMenuOpen}
        onMobileToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <main className="lg:ml-64 pt-14 lg:pt-0">
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
          {currentLesson ? (
            <LessonScreen
              moduleId={currentLesson.moduleId}
              lessonId={currentLesson.lessonId}
              completedLessons={completedLessons}
              onToggleComplete={handleToggleComplete}
              onSelectLesson={handleSelectLesson}
              onBack={() => setCurrentLesson(null)}
            />
          ) : currentScreen === "home" ? (
            <HomeScreen
              unlockedModules={unlockedModules}
              completedLessons={completedLessons}
              onNavigate={handleNavigate}
            />
          ) : (
            <ModuleScreen
              moduleId={currentScreen}
              completedLessons={completedLessons}
              onSelectLesson={handleSelectLesson}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;

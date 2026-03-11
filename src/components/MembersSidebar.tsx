import { Home, LogOut, Menu, X, Lock } from "lucide-react";
import { MODULES } from "@/data/modules";

interface MembersSidebarProps {
  unlockedModules: string[];
  currentScreen: string;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  mobileOpen: boolean;
  onMobileToggle: () => void;
}

const MembersSidebar = ({
  unlockedModules,
  currentScreen,
  onNavigate,
  onLogout,
  mobileOpen,
  onMobileToggle,
}: MembersSidebarProps) => {
  const navItems = [
    { id: "home", icon: "🏠", label: "Início", always: true },
    ...MODULES.map((m) => ({
      id: m.id,
      icon: m.icon,
      label: m.shortTitle,
      always: false,
    })),
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    if (mobileOpen) onMobileToggle();
  };

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-primary h-14 flex items-center px-4 shadow-lg">
        <button onClick={onMobileToggle} className="text-primary-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="ml-3 font-display text-secondary font-bold text-lg">🧶 Copa Lucrativa</span>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={onMobileToggle} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-primary z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-sidebar-border">
          <h2 className="font-display text-secondary font-bold text-xl">🧶 Copa Lucrativa</h2>
        </div>

        <nav className="flex-1 overflow-y-auto py-3">
          {navItems.map((item) => {
            const isUnlocked = item.always || unlockedModules.includes(item.id);
            const isActive = currentScreen === item.id;

            return (
              <button
                key={item.id}
                onClick={() => isUnlocked && handleNav(item.id)}
                disabled={!isUnlocked}
                className={`w-full text-left px-5 py-3 flex items-center gap-3 font-body text-sm transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-secondary font-semibold"
                    : isUnlocked
                    ? "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    : "text-sidebar-foreground/30 cursor-not-allowed"
                }`}
              >
                <span className="text-lg">{isUnlocked ? item.icon : "🔒"}</span>
                <span className="flex-1">{item.label}</span>
                {!isUnlocked && <Lock size={14} className="opacity-40" />}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <button
            onClick={onLogout}
            className="w-full text-left px-5 py-3 flex items-center gap-3 font-body text-sm text-sidebar-foreground/70 hover:text-red-300 transition-colors"
          >
            <LogOut size={18} />
            <span>Sair</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default MembersSidebar;

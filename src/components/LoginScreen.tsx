import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { PASSWORDS } from "@/data/modules";
import loginHero from "@/assets/login-hero.png";

interface LoginScreenProps {
  onLogin: (unlockedModules: string[]) => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const trimmed = password.trim().toUpperCase();
    const modules = PASSWORDS[trimmed];

    setTimeout(() => {
      if (modules) {
        localStorage.setItem("copa_password", trimmed);
        onLogin(modules);
      } else {
        setError("Senha incorreta. Verifique o email que recebeu após a compra.");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-4 relative overflow-hidden">
      {/* Hero image with gradient fade */}
      <div className="absolute inset-x-0 top-0 h-[60%] z-0">
        <img
          src={loginHero}
          alt=""
          className="w-full h-full object-cover object-[center_30%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="crochet" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-secondary" />
              <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-secondary" />
              <circle cx="40" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-secondary" />
              <circle cx="0" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-secondary" />
              <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-secondary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crochet)" />
        </svg>
      </div>

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        <div className="text-center mb-8">
          <span className="text-5xl mb-4 block animate-float">🧶</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-3">
            Método Crochê Copa Lucrativa
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg">
            Digite sua senha de acesso para entrar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {setPassword(e.target.value);setError("");}}
              placeholder="Sua senha de acesso"
              className="w-full px-5 py-4 rounded-lg bg-green-mid text-primary-foreground placeholder:text-primary-foreground/40 border-2 border-transparent focus:border-secondary focus:outline-none transition-colors text-lg font-body pr-12" />
            
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-secondary transition-colors">
              
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error &&
          <p className="text-red-300 text-sm font-body bg-red-900/20 p-3 rounded-lg">
              {error}
            </p>
          }

          <button
            type="submit"
            disabled={loading || !password.trim()}
            className="w-full py-4 rounded-lg bg-secondary text-secondary-foreground font-body font-bold text-lg hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
            
            {loading ?
            <span className="animate-spin">⏳</span> :

            <>
                ACESSAR MINHAS AULAS
                <ArrowRight size={20} />
              </>
            }
          </button>
        </form>

        <p className="text-center text-primary-foreground/40 text-xs mt-8 font-body">
          Problemas para acessar? Entre em contato: metodocrochelucrativobr@gmail.com

        </p>
      </div>
    </div>);
};

export default LoginScreen;
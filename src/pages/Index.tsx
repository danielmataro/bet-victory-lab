import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatsCard } from "@/components/StatsCard";
import { PricingCard } from "@/components/PricingCard";
import { TrendingUp, Target, Award, Star, BarChart3, Users } from "lucide-react";
import heroImage from "@/assets/hero-betting.jpg";
import analystImage from "@/assets/analyst-workspace.jpg";
import profitImage from "@/assets/profit-success.jpg";
import winnerImage from "@/assets/winner-celebration.jpg";

const Index = () => {
  const handleSubscribe = (plan: string) => {
    // Aquí se conectaría con Stripe después de configurar Supabase
    console.log(`Suscripción a plan: ${plan}`);
    alert("Para activar las suscripciones, primero conecta Supabase usando el botón verde en la parte superior derecha.");
  };

  const stats = [
    {
      title: "Precisión Global",
      value: 87,
      suffix: "%",
      description: "Aciertos en los últimos 12 meses",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Profit Total",
      value: 2847,
      suffix: "€",
      description: "Beneficios generados para nuestros miembros",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Apuestas Ganadoras",
      value: 324,
      suffix: "",
      description: "Picks exitosos este año",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Miembros Activos",
      value: 1250,
      suffix: "+",
      description: "Apostadores confiando en nosotros",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const basicFeatures = [
    "2-3 pronósticos 1x2 por jornada",
    "Análisis básico Liga Española",
    "Acceso a estadísticas históricas",
    "Soporte por email",
    "Comunidad de Telegram"
  ];

  const premiumFeatures = [
    "Todos los pronósticos 1x2 de la jornada",
    "Análisis profundo de cada partido",
    "Pronósticos VIP de máxima confianza",
    "Alertas antes de cada jornada",
    "Soporte prioritario 24/7",
    "Estadísticas avanzadas Liga Española",
    "Sesiones de análisis grupales"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">pronosticando</h1>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost">Estadísticas</Button>
            <Button variant="ghost">Planes</Button>
            <Button variant="outline">Iniciar Sesión</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.9)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Apuestas
            <span className="text-transparent bg-gradient-hero bg-clip-text"> Ganadoras</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Especialistas en pronósticos 1x2 de la Liga Española. Únete a miles de 
            apostadores que confían en nuestras predicciones y multiplica tus ganancias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Ver Picks Gratuitos
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8">
              Empezar Ahora
            </Button>
          </div>
          
          {/* Testimonial */}
          <Card className="max-w-2xl mx-auto p-6 bg-card/80 backdrop-blur-sm border-accent/20">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-warning fill-current" />
              ))}
            </div>
            <p className="text-card-foreground italic">
              "En 6 meses he recuperado mi inversión y generado un profit del 340%. 
              Las predicciones son increíblemente precisas."
            </p>
            <p className="text-muted-foreground mt-2">- Carlos M., miembro Premium</p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Resultados que Hablan por Sí Solos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Process Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Especialistas en
                <span className="text-transparent bg-gradient-hero bg-clip-text"> Liga Española</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Hemos especializado nuestros pronósticos en el 1x2 de las jornadas de 
                la Liga Española. Nuestro sistema de AI y analistas profesionales 
                analizan cada partido para ofrecerte los mejores pronósticos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Especialización exclusiva en Liga Española</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Pronósticos 1x2 con máxima precisión</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Análisis profundo de cada jornada</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl blur-xl"></div>
              <img 
                src={analystImage} 
                alt="Análisis profesional de apuestas" 
                className="relative rounded-2xl shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Profit Success Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Ganancias
                <span className="text-transparent bg-gradient-success bg-clip-text"> Comprobadas</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Más de €2.8M en ganancias generadas para nuestros miembros. 
                Nuestro sistema de AI con analistas profesionales garantiza la máxima 
                precisión y los mejores ratios de ganancia del mercado.
              </p>
              <Card className="p-6 bg-success/10 border-success/20 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-success font-semibold text-lg">ROI Promedio</p>
                    <p className="text-3xl font-bold text-success">+127%</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-success" />
                </div>
              </Card>
              <Button variant="success" size="lg" className="w-full lg:w-auto">
                Ver Historial Completo
              </Button>
            </div>
            <div className="lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-success opacity-20 rounded-2xl blur-xl"></div>
              <img 
                src={profitImage} 
                alt="Ganancias y éxito en apuestas" 
                className="relative rounded-2xl shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Historias de
                <span className="text-transparent bg-gradient-hero bg-clip-text"> Éxito</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Miles de apostadores confían en nuestro sistema de AI y analistas 
                profesionales. Cada pronóstico es verificado y optimizado para 
                garantizar los mejores resultados posibles.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="p-4 bg-gradient-card border-accent/20 text-center">
                  <p className="text-2xl font-bold text-primary">94%</p>
                  <p className="text-muted-foreground text-sm">Satisfacción</p>
                </Card>
                <Card className="p-4 bg-gradient-card border-accent/20 text-center">
                  <p className="text-2xl font-bold text-primary">3.2x</p>
                  <p className="text-muted-foreground text-sm">ROI Promedio</p>
                </Card>
              </div>
              <Button variant="hero" size="lg">
                Únete Ahora
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl blur-xl"></div>
              <img 
                src={winnerImage} 
                alt="Liga Española de Fútbol - Especialización en pronósticos 1x2" 
                className="relative rounded-2xl shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Elige Tu Plan
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Accede a picks profesionales y multiplica tus ganancias. 
            Sin compromisos, cancela cuando quieras.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Plan Básico"
              price="19,90"
              features={basicFeatures}
              onSubscribe={() => handleSubscribe("basic")}
            />
            <PricingCard
              title="Plan Premium"
              price="39,90"
              features={premiumFeatures}
              isPopular={true}
              onSubscribe={() => handleSubscribe("premium")}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              🔒 Pago seguro con Stripe • ✅ Garantía de satisfacción 30 días
            </p>
            <Card className="max-w-md mx-auto p-4 bg-success/10 border-success/20">
              <p className="text-success font-semibold">
                💰 Oferta Especial: 50% descuento en tu primer mes
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BarChart3 className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">pronosticando</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Predicciones profesionales de apuestas deportivas
          </p>
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <p className="text-muted-foreground mt-6 text-sm">
            © 2024 pronosticando. Juega con responsabilidad. +18
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
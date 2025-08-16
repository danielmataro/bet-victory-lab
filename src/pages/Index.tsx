import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatsCard } from "@/components/StatsCard";
import { PricingCard } from "@/components/PricingCard";
import { TrendingUp, Target, Award, Star, BarChart3, Users } from "lucide-react";
import heroImage from "@/assets/hero-betting.jpg";

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
    "2-3 picks diarios",
    "Análisis básico de partidos",
    "Acceso a estadísticas históricas",
    "Soporte por email",
    "Comunidad de Telegram"
  ];

  const premiumFeatures = [
    "5-7 picks diarios",
    "Análisis profundo y detallado",
    "Picks VIP de alta confianza",
    "Alertas en tiempo real",
    "Soporte prioritario 24/7",
    "Acceso a estrategias avanzadas",
    "Sesiones de coaching grupales"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">ProTipster</h1>
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
            Únete a miles de apostadores que confían en nuestras predicciones profesionales 
            y multiplica tus ganancias con estrategias probadas.
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
            <span className="text-xl font-bold text-foreground">ProTipster</span>
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
            © 2024 ProTipster. Juega con responsabilidad. +18
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
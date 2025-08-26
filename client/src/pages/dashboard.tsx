import { LiquidGlassCard } from "@/components/liquid-glass-card";
import { mockUserData } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Bell, MessageCircle, Search, GraduationCap, Sliders, Calendar, TrendingUp, Book, Lightbulb, Plus, LogOut } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useLocation } from "wouter";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { 
    name, 
    averageScore, 
    targetScore, 
    essaysCount, 
    studyHours, 
    streak, 
    progressPercentage, 
    nextExam 
  } = mockUserData;

  const handleLogout = () => {
    // In a real app, this would clear authentication tokens/session
    // For demo purposes, just redirect to landing page
    setLocation("/");
  };

  const handleQuickAccess = (tool: string) => {
    console.log(`Acessando ferramenta: ${tool}`);
    // Navigate to the specific tool page
    switch(tool) {
      case 'argumentos':
        setLocation('/argumentos');
        break;
      case 'repertorio':
        setLocation('/repertorio');
        break;
      case 'simulador':
        setLocation('/simulador');
        break;
      case 'estilo':
        setLocation('/estilo');
        break;
    }
  };

  const handleReadNewsletter = () => {
    console.log("Abrindo newsletter completa");
    // In a real app, this would open the full newsletter
  };

  const handleSuggestedAction = (action: string) => {
    console.log(`Executando ação: ${action}`);
    // Navigate to the specific action
    switch(action) {
      case 'argumentacao':
        setLocation('/argumentos');
        break;
      case 'repertorio':
        setLocation('/repertorio');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="flex items-center space-x-2" data-testid="link-dashboard-home">
                <div className="w-8 h-8 bg-bright-blue rounded-lg flex items-center justify-center">
                  <Plus className="text-white text-sm" />
                </div>
                <span className="text-2xl font-bold text-dark-blue">
                  DISSERT<span className="text-bright-blue">AI</span>
                </span>
              </Link>
              <h1 className="text-xl font-semibold text-dark-blue" data-testid="text-dashboard-title">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-soft-gray hover:text-bright-blue" data-testid="button-notifications">
                <Bell size={20} />
              </button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="flex items-center space-x-2 text-soft-gray hover:text-bright-blue border-soft-gray/30 hover:border-bright-blue"
                data-testid="button-logout"
              >
                <LogOut size={16} />
                <span>Sair</span>
              </Button>
              <div className="w-8 h-8 bg-bright-blue rounded-full flex items-center justify-center text-white text-sm font-bold" data-testid="avatar-user">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column (30%) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Welcome Card */}
            <LiquidGlassCard className="bg-gradient-to-br from-bright-blue/5 to-dark-blue/5 border-bright-blue/20" data-testid="card-welcome">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-dark-blue">Olá, {name.split(' ')[0]}! 👋</h3>
                <div className="w-10 h-10 bg-gradient-to-br from-bright-blue to-dark-blue rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={20} />
                </div>
              </div>
              <p className="text-soft-gray mb-4">Bem-vindo de volta. Continue sua jornada rumo à nota 1000!</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-bright-blue" data-testid="text-next-exam">
                  <Calendar className="mr-2" size={16} />
                  <span className="font-medium">Próxima prova: {nextExam}</span>
                </div>
              </div>
            </LiquidGlassCard>

            {/* Progress Card */}
            <LiquidGlassCard className="bg-gradient-to-br from-bright-blue/5 to-dark-blue/10 border-bright-blue/20" data-testid="card-progress">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-dark-blue">Progresso Geral</h4>
                <div className="w-8 h-8 bg-gradient-to-br from-bright-blue to-dark-blue rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white" size={16} />
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#progressGradient)"
                      strokeWidth="8"
                      strokeDasharray={314}
                      strokeDashoffset={314 - (progressPercentage / 100) * 314}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                    <defs>
                      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#5087ff" />
                        <stop offset="100%" stopColor="#09072e" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-dark-blue" data-testid="text-average-score">
                        {averageScore}
                      </div>
                      <div className="text-xs text-soft-gray">Nota Média</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-soft-gray">Meta: {targetScore}</span>
                  <span className="text-bright-blue font-semibold" data-testid="text-progress-percentage">{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-3 bg-gray-200">
                  <div className="h-full bg-gradient-to-r from-bright-blue to-dark-blue rounded-full transition-all duration-500" style={{width: `${progressPercentage}%`}} />
                </Progress>
              </div>
            </LiquidGlassCard>
          </div>

          {/* Center Column (45%) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Activity Stats */}
            <LiquidGlassCard className="bg-gradient-to-br from-bright-blue/5 to-soft-gray/5 border-bright-blue/20" data-testid="card-activity-stats">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-dark-blue">Estatísticas de Atividade</h4>
                <div className="w-8 h-8 bg-gradient-to-br from-bright-blue to-dark-blue rounded-full flex items-center justify-center">
                  <Book className="text-white" size={16} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-bright-blue/10 to-dark-blue/10 rounded-lg border border-bright-blue/20">
                  <div className="text-2xl font-bold text-bright-blue mb-1" data-testid="text-essays-count">
                    {essaysCount}
                  </div>
                  <div className="text-xs text-soft-gray font-medium">Redações</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-dark-blue/10 to-soft-gray/10 rounded-lg border border-dark-blue/20">
                  <div className="text-2xl font-bold text-dark-blue mb-1" data-testid="text-study-hours">
                    {studyHours}h
                  </div>
                  <div className="text-xs text-soft-gray font-medium">Estudo</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-soft-gray/10 to-bright-blue/10 rounded-lg border border-soft-gray/20">
                  <div className="text-2xl font-bold text-dark-blue mb-1" data-testid="text-streak">
                    {streak}
                  </div>
                  <div className="text-xs text-soft-gray font-medium">Dias Seguidos</div>
                </div>
              </div>
            </LiquidGlassCard>

            {/* Evolution Chart */}
            <LiquidGlassCard className="bg-gradient-to-br from-dark-blue/5 to-bright-blue/5 border-dark-blue/20" data-testid="card-evolution-chart">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-dark-blue to-bright-blue rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={16} />
                  </div>
                  <h4 className="font-semibold text-dark-blue">Evolução das Notas</h4>
                </div>
                <Select defaultValue="30-days" data-testid="select-chart-period">
                  <SelectTrigger className="w-32 border-bright-blue/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7-days">Últimos 7 dias</SelectItem>
                    <SelectItem value="30-days">Últimos 30 dias</SelectItem>
                    <SelectItem value="6-months">Últimos 6 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="h-48 flex items-center justify-center bg-gradient-to-br from-bright-blue/5 to-dark-blue/5 rounded-lg border border-bright-blue/20" data-testid="chart-evolution">
                <div className="text-center text-soft-gray">
                  <div className="w-16 h-16 bg-gradient-to-br from-bright-blue to-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div className="text-lg font-semibold text-bright-blue mb-2">Gráfico de Evolução</div>
                  <div className="text-sm text-dark-blue">Em breve: análise detalhada do seu progresso</div>
                </div>
              </div>
            </LiquidGlassCard>

            {/* Suggested Actions */}
            <LiquidGlassCard className="bg-gradient-to-br from-bright-blue/5 to-dark-blue/5 border-bright-blue/20" data-testid="card-suggested-actions">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-dark-blue">Próximas Ações Sugeridas</h4>
                <div className="w-8 h-8 bg-gradient-to-br from-bright-blue to-dark-blue rounded-full flex items-center justify-center">
                  <Lightbulb className="text-white" size={16} />
                </div>
              </div>
              <div className="space-y-3">
                <button 
                  onClick={() => handleSuggestedAction('argumentacao')}
                  className="w-full flex items-center p-4 bg-gradient-to-r from-bright-blue/10 to-dark-blue/10 rounded-lg border border-bright-blue/20 hover:from-bright-blue/20 hover:to-dark-blue/20 transition-all duration-200 group"
                  data-testid="button-suggested-arguments"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-bright-blue to-dark-blue rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Lightbulb className="text-white" size={18} />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-dark-blue">Pratique argumentação</div>
                    <div className="text-sm text-soft-gray">Use o Arquiteto de Argumentos</div>
                  </div>
                </button>
                <button 
                  onClick={() => handleSuggestedAction('repertorio')}
                  className="w-full flex items-center p-4 bg-gradient-to-r from-dark-blue/10 to-soft-gray/10 rounded-lg border border-dark-blue/20 hover:from-dark-blue/20 hover:to-soft-gray/20 transition-all duration-200 group"
                  data-testid="button-suggested-repertoire"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-dark-blue to-soft-gray rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Book className="text-white" size={18} />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-dark-blue">Amplie seu repertório</div>
                    <div className="text-sm text-soft-gray">Explore novos temas</div>
                  </div>
                </button>
              </div>
            </LiquidGlassCard>
          </div>

          {/* Right Column (25%) */}
          <div className="lg:col-span-3 space-y-5">
            {/* Newsletter */}
            <LiquidGlassCard className="bg-gradient-to-br from-soft-gray/5 to-bright-blue/5 border-soft-gray/20" data-testid="card-newsletter">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-dark-blue">Newsletter da Semana</h4>
                <div className="w-8 h-8 bg-gradient-to-br from-soft-gray to-bright-blue rounded-full flex items-center justify-center">
                  <Book className="text-white" size={16} />
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-dark-blue mb-2">Tecnologia e Sociedade 🤖</div>
                <p className="text-soft-gray mb-4 leading-relaxed">Explore como a inteligência artificial está transformando o mundo moderno...</p>
                <Button 
                  onClick={handleReadNewsletter}
                  variant="outline"
                  className="w-full text-bright-blue border-bright-blue/30 hover:bg-bright-blue/10 hover:border-bright-blue"
                  data-testid="button-read-newsletter"
                >
                  Ler Completa
                </Button>
              </div>
            </LiquidGlassCard>

            {/* Quick Access */}
            <LiquidGlassCard className="bg-gradient-to-br from-bright-blue/5 to-dark-blue/5 border-bright-blue/20" data-testid="card-quick-access">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-dark-blue">Acesso Rápido</h4>
                <div className="w-8 h-8 bg-gradient-to-br from-bright-blue to-dark-blue rounded-full flex items-center justify-center">
                  <Plus className="text-white" size={16} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  onClick={() => handleQuickAccess('argumentos')}
                  variant="outline" 
                  className="p-4 h-auto flex flex-col items-center border-bright-blue/30 hover:bg-gradient-to-br hover:from-bright-blue/10 hover:to-dark-blue/10 hover:border-bright-blue/50 transition-all duration-200 group"
                  data-testid="button-quick-arguments"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-bright-blue to-dark-blue rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <MessageCircle className="text-white" size={16} />
                  </div>
                  <div className="text-xs text-dark-blue font-medium">Argumentos</div>
                </Button>
                <Button 
                  onClick={() => handleQuickAccess('repertorio')}
                  variant="outline" 
                  className="p-4 h-auto flex flex-col items-center border-dark-blue/30 hover:bg-gradient-to-br hover:from-dark-blue/10 hover:to-soft-gray/10 hover:border-dark-blue/50 transition-all duration-200 group"
                  data-testid="button-quick-repertoire"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-dark-blue to-soft-gray rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Search className="text-white" size={16} />
                  </div>
                  <div className="text-xs text-dark-blue font-medium">Repertório</div>
                </Button>
                <Button 
                  onClick={() => handleQuickAccess('simulador')}
                  variant="outline" 
                  className="p-4 h-auto flex flex-col items-center border-bright-blue/30 hover:bg-gradient-to-br hover:from-bright-blue/10 hover:to-dark-blue/10 hover:border-bright-blue/50 transition-all duration-200 group"
                  data-testid="button-quick-simulator"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-bright-blue to-dark-blue rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <GraduationCap className="text-white" size={16} />
                  </div>
                  <div className="text-xs text-dark-blue font-medium">Simulador</div>
                </Button>
                <Button 
                  onClick={() => handleQuickAccess('estilo')}
                  variant="outline" 
                  className="p-4 h-auto flex flex-col items-center border-soft-gray/30 hover:bg-gradient-to-br hover:from-soft-gray/10 hover:to-bright-blue/10 hover:border-soft-gray/50 transition-all duration-200 group"
                  data-testid="button-quick-style"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-soft-gray to-bright-blue rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Sliders className="text-white" size={16} />
                  </div>
                  <div className="text-xs text-dark-blue font-medium">Estilo</div>
                </Button>
              </div>
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}

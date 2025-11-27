import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const problems = [
    {
      icon: 'Droplets',
      title: 'Загрязнение воды',
      description: 'Промышленные отходы и пластик загрязняют мировые океаны и водоёмы',
      severity: 'critical'
    },
    {
      icon: 'Wind',
      title: 'Загрязнение воздуха',
      description: 'Выбросы CO₂ и промышленных газов ухудшают качество воздуха',
      severity: 'high'
    },
    {
      icon: 'Trees',
      title: 'Вырубка лесов',
      description: 'Ежегодно уничтожаются миллионы гектаров лесных массивов',
      severity: 'critical'
    },
    {
      icon: 'Trash2',
      title: 'Отходы',
      description: 'Накопление пластика и неперерабатываемых материалов',
      severity: 'high'
    }
  ];

  const russiaProblems = [
    {
      title: 'Загрязнение Байкала',
      location: 'Озеро Байкал',
      impact: 'Промышленные стоки угрожают уникальной экосистеме',
      stats: '23 млн м³'
    },
    {
      title: 'Норильск',
      location: 'Красноярский край',
      impact: 'Один из самых загрязнённых городов мира',
      stats: '2 млн тонн выбросов/год'
    },
    {
      title: 'Вырубка тайги',
      location: 'Сибирь и Дальний Восток',
      impact: 'Потеря лесного покрова и биоразнообразия',
      stats: '1.1 млн га/год'
    }
  ];

  const worldProblems = [
    {
      title: 'Пластик в океанах',
      region: 'Мировой океан',
      impact: 'Великое тихоокеанское мусорное пятно площадью 1.6 млн км²',
      trend: 'up'
    },
    {
      title: 'Таяние ледников',
      region: 'Арктика и Антарктика',
      impact: 'Повышение уровня мирового океана на 3.3 мм/год',
      trend: 'up'
    },
    {
      title: 'Обезлесение Амазонии',
      region: 'Южная Америка',
      impact: 'Потеря 10 000 км² тропических лесов ежегодно',
      trend: 'stable'
    }
  ];

  const solutions = [
    {
      icon: 'Lightbulb',
      title: 'Энергоэффективность',
      actions: ['Использование LED-освещения', 'Утепление зданий', 'Энергосберегающая техника']
    },
    {
      icon: 'Recycle',
      title: 'Раздельный сбор',
      actions: ['Сортировка отходов', 'Переработка пластика', 'Компостирование органики']
    },
    {
      icon: 'Leaf',
      title: 'Зелёная энергия',
      actions: ['Солнечные панели', 'Ветрогенераторы', 'Электротранспорт']
    },
    {
      icon: 'ShoppingBag',
      title: 'Осознанное потребление',
      actions: ['Отказ от одноразового пластика', 'Многоразовая упаковка', 'Локальная продукция']
    }
  ];

  const facts = [
    { number: '8 млн тонн', label: 'пластика попадает в океаны ежегодно' },
    { number: '13%', label: 'сокращение лесного покрова с 1990 года' },
    { number: '+1.1°C', label: 'глобальное потепление с 1880 года' },
    { number: '1 млн видов', label: 'под угрозой исчезновения' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Globe" size={28} />
              ЭкоМир
            </h1>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-foreground'}`}>
                Главная
              </button>
              <button onClick={() => scrollToSection('problems')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'problems' ? 'text-primary' : 'text-foreground'}`}>
                Проблемы
              </button>
              <button onClick={() => scrollToSection('russia')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'russia' ? 'text-primary' : 'text-foreground'}`}>
                Россия
              </button>
              <button onClick={() => scrollToSection('world')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'world' ? 'text-primary' : 'text-foreground'}`}>
                Мир
              </button>
              <button onClick={() => scrollToSection('solutions')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'solutions' ? 'text-primary' : 'text-foreground'}`}>
                Решения
              </button>
              <button onClick={() => scrollToSection('facts')} className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'facts' ? 'text-primary' : 'text-foreground'}`}>
                Факты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Экология планеты —<br />наша общая ответственность
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Исследуйте ключевые экологические проблемы России и мира, узнайте о путях их решения и внесите свой вклад в сохранение планеты
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => scrollToSection('problems')} size="lg" className="text-base">
              Узнать о проблемах
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button onClick={() => scrollToSection('solutions')} variant="outline" size="lg" className="text-base">
              Что я могу сделать
            </Button>
          </div>
        </div>
      </section>

      <section id="problems" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Ключевые экологические проблемы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современные вызовы, требующие немедленного внимания и действий
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-2">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${problem.severity === 'critical' ? 'bg-destructive/10' : 'bg-accent/10'}`}>
                    <Icon name={problem.icon as any} size={28} className={problem.severity === 'critical' ? 'text-destructive' : 'text-accent'} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                    <div className="mt-3">
                      <span className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${problem.severity === 'critical' ? 'bg-destructive/10 text-destructive' : 'bg-accent/10 text-accent'}`}>
                        {problem.severity === 'critical' ? 'Критический уровень' : 'Высокий уровень'}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="russia" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Экология России</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Актуальные экологические проблемы на территории Российской Федерации
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {russiaProblems.map((problem, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-card">
                <div className="mb-4">
                  <Icon name="MapPin" size={24} className="text-primary mb-2" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{problem.title}</h3>
                  <p className="text-sm text-primary font-medium">{problem.location}</p>
                </div>
                <p className="text-muted-foreground mb-4">{problem.impact}</p>
                <div className="pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-foreground">{problem.stats}</div>
                  <div className="text-xs text-muted-foreground">масштаб проблемы</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="world" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Экология в мире</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Глобальные экологические вызовы, влияющие на всю планету
            </p>
          </div>
          <div className="space-y-6">
            {worldProblems.map((problem, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 bg-card">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="Globe2" size={24} className="text-accent" />
                      <h3 className="text-2xl font-semibold text-card-foreground">{problem.title}</h3>
                    </div>
                    <p className="text-primary font-medium mb-2">{problem.region}</p>
                    <p className="text-muted-foreground">{problem.impact}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon 
                      name={problem.trend === 'up' ? 'TrendingUp' : 'Minus'} 
                      size={24} 
                      className={problem.trend === 'up' ? 'text-destructive' : 'text-accent'} 
                    />
                    <span className="text-sm font-medium text-muted-foreground">
                      {problem.trend === 'up' ? 'Ухудшение' : 'Стабильно'}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Пути решения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Практические действия, которые может предпринять каждый для защиты окружающей среды
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 bg-card border-2 border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon name={solution.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">{solution.title}</h3>
                </div>
                <ul className="space-y-3">
                  {solution.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{action}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="facts" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Данные и факты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ключевые статистические показатели состояния окружающей среды
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-2">
                <div className="text-4xl font-bold text-primary mb-3">{fact.number}</div>
                <div className="text-muted-foreground">{fact.label}</div>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Card className="p-8 max-w-3xl mx-auto bg-card">
              <Icon name="Info" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Каждое действие имеет значение</h3>
              <p className="text-muted-foreground mb-6">
                Даже небольшие изменения в повседневных привычках могут существенно снизить ваш экологический след. 
                Начните с малого: откажитесь от пластиковых пакетов, экономьте воду и электроэнергию, 
                сортируйте отходы и выбирайте экологичные товары.
              </p>
              <Button size="lg" className="text-base">
                <Icon name="Heart" size={20} className="mr-2" />
                Присоединиться к движению
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-card-foreground flex items-center gap-2">
                <Icon name="Globe" size={24} className="text-primary" />
                ЭкоМир
              </h3>
              <p className="text-muted-foreground text-sm">
                Образовательная платформа об экологических проблемах и путях их решения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Разделы</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('problems')} className="text-muted-foreground hover:text-primary transition-colors">Проблемы</button></li>
                <li><button onClick={() => scrollToSection('russia')} className="text-muted-foreground hover:text-primary transition-colors">Россия</button></li>
                <li><button onClick={() => scrollToSection('world')} className="text-muted-foreground hover:text-primary transition-colors">Мир</button></li>
                <li><button onClick={() => scrollToSection('solutions')} className="text-muted-foreground hover:text-primary transition-colors">Решения</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-card-foreground">Источники</h4>
              <p className="text-muted-foreground text-sm">
                Данные основаны на исследованиях ООН, WWF, Greenpeace и Минприроды РФ
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 ЭкоМир. Образовательный проект об экологии планеты</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

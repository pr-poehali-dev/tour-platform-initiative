import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'rest',
      title: 'Отдохнуть',
      icon: 'Palmtree',
      description: 'Туры с проживанием и перелетом',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'see',
      title: 'Посмотреть',
      icon: 'Camera',
      description: 'Авторские экскурсии и маршруты',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      id: 'go',
      title: 'Сходить',
      icon: 'MapPin',
      description: 'Афиша и локальные активности',
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  const tours = [
    {
      id: 1,
      title: 'Райский отдых на Мальдивах',
      category: 'rest',
      location: 'Мальдивы',
      duration: '7 дней',
      price: '125 000 ₽',
      rating: 4.9,
      reviews: 128,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/f0f9bc31-c102-456f-9583-73a97aff3d83.jpg',
      tags: ['Все включено', 'Пляжный отдых']
    },
    {
      id: 2,
      title: 'Исторический тур по Европе',
      category: 'see',
      location: 'Прага, Вена, Будапешт',
      duration: '10 дней',
      price: '89 000 ₽',
      rating: 4.8,
      reviews: 94,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/fede18a7-4d62-4ed8-9c98-22a3a83c41f1.jpg',
      tags: ['Культура', 'Архитектура']
    },
    {
      id: 3,
      title: 'Восхождение в Альпы',
      category: 'go',
      location: 'Швейцария',
      duration: '5 дней',
      price: '65 000 ₽',
      rating: 4.7,
      reviews: 67,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/8be0f182-aaab-426c-a285-bee2b4a0c00f.jpg',
      tags: ['Активный отдых', 'Горы']
    }
  ];

  const filteredTours = activeCategory === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Plane" className="text-primary" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TravelHub
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#rest" className="text-sm font-medium hover:text-primary transition-colors">
                Отдохнуть
              </a>
              <a href="#see" className="text-sm font-medium hover:text-primary transition-colors">
                Посмотреть
              </a>
              <a href="#go" className="text-sm font-medium hover:text-primary transition-colors">
                Сходить
              </a>
              <a href="#shop" className="text-sm font-medium hover:text-primary transition-colors">
                Магазин
              </a>
              <a href="#partners" className="text-sm font-medium hover:text-primary transition-colors">
                Партнерам
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Найди свое приключение
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Туры, экскурсии, мероприятия и многое другое. Все в одном месте — просто выбери и забронируй
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-12">
              <div className="relative flex-1">
                <Icon name="MapPin" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Куда хотите поехать?" 
                  className="pl-10 h-14 text-base"
                />
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 h-14 px-8 text-base font-semibold">
                Поиск
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Icon name="TrendingUp" size={14} className="mr-1" />
                Популярное
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Мальдивы</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Европа</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Горы</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">Пляжи</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Чем хотите заняться?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {categories.map((cat) => (
              <Card 
                key={cat.id}
                className="group cursor-pointer border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-scale-in"
                onClick={() => setActiveCategory(cat.id)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={cat.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {activeCategory === 'all' ? 'Все предложения' : categories.find(c => c.id === activeCategory)?.title}
            </h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setActiveCategory('all')}
              className={activeCategory === 'all' ? 'hidden' : ''}
            >
              Показать все
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {tour.tags.map((tag, idx) => (
                      <Badge key={idx} className="bg-white/90 text-primary hover:bg-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {tour.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="MapPin" size={16} />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-1 text-sm mb-4">
                    <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="font-semibold">{tour.rating}</span>
                    <span className="text-muted-foreground">({tour.reviews} отзывов)</span>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">от</p>
                    <p className="text-2xl font-bold text-primary">{tour.price}</p>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90">
                    Забронировать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы к приключениям?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам путешественников, которые уже нашли свой идеальный отдых
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            Начать путешествие
            <Icon name="Sparkles" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Plane" size={24} />
                <span className="text-xl font-bold">TravelHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Ваш проводник в мир незабываемых путешествий
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Разделы</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Отдохнуть</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Посмотреть</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сходить</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Магазин</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнерам</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Следите за нами</h3>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 TravelHub. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

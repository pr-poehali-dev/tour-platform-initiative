import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const TourDetails = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tourId = searchParams.get('id') || '1';
  
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [travelers, setTravelers] = useState(2);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const tours: any = {
    '1': {
      id: 1,
      title: 'Райский отдых на Мальдивах',
      location: 'Мальдивы',
      duration: '7 дней / 6 ночей',
      price: 125000,
      rating: 4.9,
      reviews: 128,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/f0f9bc31-c102-456f-9583-73a97aff3d83.jpg',
      tags: ['Все включено', 'Пляжный отдых', '5 звезд'],
      gallery: [
        'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/f0f9bc31-c102-456f-9583-73a97aff3d83.jpg',
      ],
      description: 'Незабываемый отдых на райских островах Мальдив. Кристально чистая вода, белоснежные пляжи и роскошные виллы над водой ждут вас.',
      included: [
        'Авиаперелет эконом-классом',
        'Трансфер на скоростном катере',
        'Проживание в вилле над водой',
        'Питание All Inclusive',
        'Снорклинг и дайвинг',
        'SPA-процедуры (2 сеанса)',
        'Экскурсия на необитаемый остров'
      ],
      notIncluded: [
        'Виза (оформляется по прилету)',
        'Медицинская страховка',
        'Личные расходы',
        'Дополнительные экскурсии'
      ],
      program: [
        { day: 1, title: 'Прилет и заселение', description: 'Встреча в аэропорту, трансфер на остров, заселение в виллу, приветственный ужин' },
        { day: 2, title: 'Отдых на пляже', description: 'Свободный день. Знакомство с территорией отеля, пляжный отдых' },
        { day: 3, title: 'Снорклинг', description: 'Утренняя экскурсия для снорклинга на коралловом рифе' },
        { day: 4, title: 'День релакса', description: 'SPA-процедуры, йога на закате, романтический ужин' },
        { day: 5, title: 'Экскурсия', description: 'Поездка на необитаемый остров, пикник на пляже' },
        { day: 6, title: 'Свободный день', description: 'Отдых на пляже, дополнительные активности по желанию' },
        { day: 7, title: 'Вылет', description: 'Завтрак, выселение, трансфер в аэропорт' }
      ]
    },
    '2': {
      id: 2,
      title: 'Исторический тур по Европе',
      location: 'Прага, Вена, Будапешт',
      duration: '10 дней / 9 ночей',
      price: 89000,
      rating: 4.8,
      reviews: 94,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/fede18a7-4d62-4ed8-9c98-22a3a83c41f1.jpg',
      tags: ['Культура', 'Архитектура', 'Групповой'],
      gallery: [
        'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/fede18a7-4d62-4ed8-9c98-22a3a83c41f1.jpg',
      ],
      description: 'Путешествие по трем красивейшим столицам Центральной Европы с богатой историей и уникальной архитектурой.',
      included: [
        'Авиаперелет',
        'Проживание в отелях 4*',
        'Завтраки',
        'Трансферы между городами',
        'Обзорные экскурсии',
        'Входные билеты в музеи',
        'Русскоговорящий гид'
      ],
      notIncluded: [
        'Обеды и ужины',
        'Виза',
        'Страховка',
        'Личные расходы'
      ],
      program: [
        { day: 1, title: 'Прилет в Прагу', description: 'Встреча, трансфер, обзорная экскурсия по Праге' },
        { day: 2, title: 'Прага', description: 'Пражский Град, Карлов мост, Старый город' },
        { day: 3, title: 'Прага', description: 'Свободный день для самостоятельных прогулок' }
      ]
    },
    '3': {
      id: 3,
      title: 'Восхождение в Альпы',
      location: 'Швейцария',
      duration: '5 дней / 4 ночи',
      price: 65000,
      rating: 4.7,
      reviews: 67,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/8be0f182-aaab-426c-a285-bee2b4a0c00f.jpg',
      tags: ['Активный отдых', 'Горы', 'Для опытных'],
      gallery: [
        'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/8be0f182-aaab-426c-a285-bee2b4a0c00f.jpg',
      ],
      description: 'Приключенческий тур для любителей активного отдыха. Треккинг по живописным тропам Швейцарских Альп.',
      included: [
        'Проживание в горном шале',
        'Питание полный пансион',
        'Инструктор-гид',
        'Прокат снаряжения',
        'Трансферы'
      ],
      notIncluded: [
        'Авиаперелет',
        'Виза',
        'Страховка',
        'Личное снаряжение'
      ],
      program: [
        { day: 1, title: 'Прибытие', description: 'Трансфер, инструктаж, проверка снаряжения' },
        { day: 2, title: 'Треккинг', description: 'Первый день похода, высота 2000м' },
        { day: 3, title: 'Восхождение', description: 'Покорение вершины, высота 3200м' }
      ]
    }
  };

  const tour = tours[tourId];
  const totalPrice = tour.price * travelers;

  if (!tour) {
    return <div>Тур не найден</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              Назад
            </Button>
            <div className="flex items-center gap-2">
              <Icon name="Plane" className="text-primary" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TravelHub
              </span>
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative h-[400px] rounded-2xl overflow-hidden animate-fade-in">
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="animate-fade-in">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{tour.title}</h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="MapPin" size={18} />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={18} />
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                  <span className="text-xl font-semibold">{tour.rating}</span>
                  <span className="text-muted-foreground">({tour.reviews} отзывов)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {tour.tags.map((tag: string, idx: number) => (
                  <Badge key={idx} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>

            <Tabs defaultValue="description" className="animate-fade-in">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="program">Программа</TabsTrigger>
                <TabsTrigger value="included">Что входит</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>О туре</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="program" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Программа тура</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {tour.program.map((item: any, idx: number) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">{item.day}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          {idx < tour.program.length - 1 && <Separator className="mt-4" />}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="included" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="text-green-500" />
                        Включено в стоимость
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tour.included.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Icon name="Check" className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="XCircle" className="text-red-500" />
                        Не включено в стоимость
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tour.notIncluded.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Icon name="X" className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Отзывы туристов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">
                      Отзывы появятся в ближайшее время
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-scale-in">
              <CardHeader>
                <CardTitle>Бронирование</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-primary">
                      {totalPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tour.price.toLocaleString('ru-RU')} ₽ за человека
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">Дата заезда</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-left font-normal"
                        >
                          <Icon name="Calendar" className="mr-2" size={16} />
                          {selectedDate ? format(selectedDate, 'dd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="travelers" className="mb-2 block">
                      Количество туристов
                    </Label>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <Input
                        id="travelers"
                        type="number"
                        value={travelers}
                        onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))}
                        className="text-center"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setTravelers(travelers + 1)}
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                {!showBookingForm ? (
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-base h-12 font-semibold"
                    onClick={() => setShowBookingForm(true)}
                    disabled={!selectedDate}
                  >
                    Забронировать
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                ) : (
                  <div className="space-y-4 p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="flex items-center gap-2 text-green-700">
                      <Icon name="CheckCircle2" className="text-green-500" size={24} />
                      <span className="font-semibold">Заявка отправлена!</span>
                    </div>
                    <p className="text-sm text-green-700">
                      Наш менеджер свяжется с вами в ближайшее время для подтверждения бронирования.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate('/')}
                    >
                      Вернуться на главную
                    </Button>
                  </div>
                )}

                <div className="text-xs text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={14} />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="RefreshCw" size={14} />
                    <span>Бесплатная отмена за 7 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Headphones" size={14} />
                    <span>Поддержка 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;

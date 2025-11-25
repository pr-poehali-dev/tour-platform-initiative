import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const PartnerProfile = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const partnerId = searchParams.get('id') || '1';
  const [activeMenuCategory, setActiveMenuCategory] = useState('appetizers');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [deliverySuccess, setDeliverySuccess] = useState(false);

  const partners: any = {
    '1': {
      id: 1,
      name: 'Ресторан "Вкусная история"',
      type: 'restaurant',
      cuisine: 'Европейская',
      rating: 4.8,
      reviews: 342,
      priceLevel: '₽₽₽',
      phone: '+7 (495) 123-45-67',
      address: 'Москва, ул. Примерная, д. 10',
      workingHours: 'Пн-Вс: 12:00 - 23:00',
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/fede18a7-4d62-4ed8-9c98-22a3a83c41f1.jpg',
      tags: ['Живая музыка', 'Летняя веранда', 'Wi-Fi'],
      description: 'Уютный ресторан европейской кухни с авторскими блюдами от шеф-повара. Идеально подходит для романтических ужинов и деловых встреч.',
      features: [
        { icon: 'UtensilsCrossed', label: 'Европейская кухня' },
        { icon: 'Users', label: 'До 80 гостей' },
        { icon: 'Music', label: 'Живая музыка' },
        { icon: 'Wine', label: 'Винная карта' }
      ],
      menu: {
        appetizers: [
          { id: 1, name: 'Тартар из лосося', description: 'С авокадо и икрой тобико', price: 890, weight: '120г' },
          { id: 2, name: 'Карпаччо из говядины', description: 'С рукколой и пармезаном', price: 750, weight: '100г' },
          { id: 3, name: 'Буратта с томатами', description: 'С песто и бальзамиком', price: 680, weight: '150г' }
        ],
        mains: [
          { id: 1, name: 'Стейк Рибай', description: 'Из мраморной говядины с овощами гриль', price: 2890, weight: '300г' },
          { id: 2, name: 'Филе дорадо', description: 'С соусом из белого вина', price: 1590, weight: '250г' },
          { id: 3, name: 'Ризотто с грибами', description: 'С трюфельным маслом', price: 980, weight: '280г' }
        ],
        desserts: [
          { id: 1, name: 'Тирамису', description: 'Классический итальянский десерт', price: 450, weight: '120г' },
          { id: 2, name: 'Панна котта', description: 'С ягодным соусом', price: 420, weight: '100г' },
          { id: 3, name: 'Крем-брюле', description: 'С ванилью', price: 480, weight: '110г' }
        ]
      },
      upcomingEvents: [
        { id: 1, title: 'Джазовый вечер', date: 'Пятница, 20:00', type: 'Концерт' },
        { id: 2, title: 'Мастер-класс от шефа', date: 'Суббота, 15:00', type: 'Мастер-класс' }
      ]
    }
  };

  const partner = partners[partnerId];
  
  if (!partner) {
    return <div>Партнер не найден</div>;
  }

  const menuCategories = [
    { id: 'appetizers', label: 'Закуски', icon: 'Soup' },
    { id: 'mains', label: 'Основные блюда', icon: 'UtensilsCrossed' },
    { id: 'desserts', label: 'Десерты', icon: 'Cake' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate('/activities')}>
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
        <div className="relative h-[300px] rounded-2xl overflow-hidden mb-8 animate-fade-in">
          <img 
            src={partner.image} 
            alt={partner.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{partner.name}</h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                <span className="font-semibold">{partner.rating}</span>
                <span className="opacity-80">({partner.reviews} отзывов)</span>
              </div>
              <span className="opacity-80">{partner.cuisine}</span>
              <span className="font-semibold">{partner.priceLevel}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-wrap gap-2 animate-fade-in">
              {partner.tags.map((tag: string, idx: number) => (
                <Badge key={idx} variant="secondary" className="px-4 py-2">
                  {tag}
                </Badge>
              ))}
            </div>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={20} />
                  О заведении
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {partner.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {partner.features.map((feature: any, idx: number) => (
                    <div key={idx} className="flex flex-col items-center text-center p-3 rounded-lg bg-secondary/30">
                      <Icon name={feature.icon} className="text-primary mb-2" size={24} />
                      <span className="text-sm font-medium">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="UtensilsCrossed" size={20} />
                  Меню
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="sticky top-20 z-10 bg-white pb-4 mb-4 border-b">
                  <div className="flex gap-2 overflow-x-auto">
                    {menuCategories.map(category => (
                      <Button
                        key={category.id}
                        variant={activeMenuCategory === category.id ? 'default' : 'outline'}
                        onClick={() => setActiveMenuCategory(category.id)}
                        className="whitespace-nowrap"
                      >
                        <Icon name={category.icon} className="mr-2" size={16} />
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {partner.menu[activeMenuCategory]?.map((item: any) => (
                    <div key={item.id} className="flex justify-between items-start p-4 rounded-lg hover:bg-secondary/30 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <span className="text-xs text-muted-foreground">{item.weight}</span>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-xl font-bold text-primary">{item.price} ₽</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {partner.upcomingEvents && partner.upcomingEvents.length > 0 && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" size={20} />
                    Предстоящие мероприятия
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {partner.upcomingEvents.map((event: any) => (
                    <div key={event.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                      <div>
                        <h4 className="font-semibold mb-1">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <Badge>{event.type}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-scale-in">
              <CardHeader>
                <CardTitle>Контакты и действия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-sm font-medium">Адрес</p>
                      <p className="text-sm text-muted-foreground">{partner.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-sm font-medium">Режим работы</p>
                      <p className="text-sm text-muted-foreground">{partner.workingHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-sm font-medium">Телефон</p>
                      <a href={`tel:${partner.phone}`} className="text-sm text-primary hover:underline">
                        {partner.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <Separator />

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-accent hover:bg-accent/90 h-12 text-base font-semibold">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Забронировать столик
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Бронирование столика</DialogTitle>
                    </DialogHeader>
                    {bookingSuccess ? (
                      <div className="py-6 text-center space-y-4">
                        <div className="flex justify-center">
                          <div className="rounded-full bg-green-100 p-3">
                            <Icon name="CheckCircle2" className="text-green-600" size={48} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
                          <p className="text-muted-foreground">
                            Мы свяжемся с вами для подтверждения бронирования
                          </p>
                        </div>
                        <Button onClick={() => setBookingSuccess(false)} variant="outline">
                          Закрыть
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4 py-4">
                        <div>
                          <Label htmlFor="name">Ваше имя</Label>
                          <Input id="name" placeholder="Иван Иванов" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="date">Дата</Label>
                            <Input id="date" type="date" />
                          </div>
                          <div>
                            <Label htmlFor="time">Время</Label>
                            <Input id="time" type="time" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="guests">Количество гостей</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 гость</SelectItem>
                              <SelectItem value="2">2 гостя</SelectItem>
                              <SelectItem value="3">3 гостя</SelectItem>
                              <SelectItem value="4">4 гостя</SelectItem>
                              <SelectItem value="5">5+ гостей</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="comment">Комментарий</Label>
                          <Textarea id="comment" placeholder="Особые пожелания..." />
                        </div>
                        <Button 
                          className="w-full bg-accent hover:bg-accent/90" 
                          onClick={() => setBookingSuccess(true)}
                        >
                          Отправить заявку
                        </Button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full h-12 text-base font-semibold">
                      <Icon name="Truck" className="mr-2" size={20} />
                      Заказать доставку
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Заказ доставки</DialogTitle>
                    </DialogHeader>
                    {deliverySuccess ? (
                      <div className="py-6 text-center space-y-4">
                        <div className="flex justify-center">
                          <div className="rounded-full bg-green-100 p-3">
                            <Icon name="CheckCircle2" className="text-green-600" size={48} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Заказ принят!</h3>
                          <p className="text-muted-foreground">
                            Наш менеджер свяжется с вами для уточнения деталей
                          </p>
                        </div>
                        <Button onClick={() => setDeliverySuccess(false)} variant="outline">
                          Закрыть
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4 py-4">
                        <div>
                          <Label htmlFor="delivery-name">Ваше имя</Label>
                          <Input id="delivery-name" placeholder="Иван Иванов" />
                        </div>
                        <div>
                          <Label htmlFor="delivery-phone">Телефон</Label>
                          <Input id="delivery-phone" type="tel" placeholder="+7 (999) 123-45-67" />
                        </div>
                        <div>
                          <Label htmlFor="delivery-address">Адрес доставки</Label>
                          <Input id="delivery-address" placeholder="ул. Примерная, д. 10, кв. 5" />
                        </div>
                        <div>
                          <Label htmlFor="delivery-comment">Состав заказа</Label>
                          <Textarea 
                            id="delivery-comment" 
                            placeholder="Укажите желаемые блюда или оставьте комментарий..."
                            rows={4}
                          />
                        </div>
                        <Button 
                          className="w-full bg-accent hover:bg-accent/90" 
                          onClick={() => setDeliverySuccess(true)}
                        >
                          Оформить заказ
                        </Button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>

                <Button variant="ghost" className="w-full" asChild>
                  <a href={`tel:${partner.phone}`}>
                    <Icon name="Phone" className="mr-2" size={18} />
                    Позвонить
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;

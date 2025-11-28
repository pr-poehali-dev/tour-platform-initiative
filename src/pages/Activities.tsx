import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Activities = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('moscow');
  const [activeTab, setActiveTab] = useState('excursions');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string[]>([]);
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([]);
  const [selectedPlaceTypes, setSelectedPlaceTypes] = useState<string[]>([]);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);

  const cities = [
    { id: 'moscow', label: 'Москва' },
    { id: 'spb', label: 'Санкт-Петербург' },
    { id: 'kazan', label: 'Казань' },
    { id: 'sochi', label: 'Сочи' }
  ];

  const excursionCategories = [
    { id: 'kids', label: 'С детьми' },
    { id: 'art', label: 'Арт' },
    { id: 'gastro', label: 'Гастро' },
    { id: 'history', label: 'История' }
  ];

  const timeSlots = [
    { id: 'morning', label: 'Утро (9:00-12:00)' },
    { id: 'day', label: 'День (12:00-18:00)' },
    { id: 'evening', label: 'Вечер (18:00-23:00)' }
  ];

  const eventTypes = [
    { id: 'concert', label: 'Концерт' },
    { id: 'theater', label: 'Спектакль' },
    { id: 'masterclass', label: 'Мастер-класс' },
    { id: 'exhibition', label: 'Выставка' }
  ];

  const placeTypes = [
    { id: 'restaurant', label: 'Ресторан' },
    { id: 'cafe', label: 'Кафе' },
    { id: 'bar', label: 'Бар' },
    { id: 'park', label: 'Парк' },
    { id: 'club', label: 'Клуб' },
    { id: 'lounge', label: 'Лаунж' }
  ];

  const cuisines = [
    { id: 'european', label: 'Европейская' },
    { id: 'asian', label: 'Азиатская' },
    { id: 'italian', label: 'Итальянская' },
    { id: 'japanese', label: 'Японская' },
    { id: 'russian', label: 'Русская' },
    { id: 'fusion', label: 'Фьюжн' }
  ];

  const excursions = [
    {
      id: 1,
      title: 'Пешеходная экскурсия по центру Москвы',
      city: 'moscow',
      category: 'history',
      time: 'morning',
      duration: '3 часа',
      price: '1 500 ₽',
      rating: 4.9,
      reviews: 234,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/fede18a7-4d62-4ed8-9c98-22a3a83c41f1.jpg',
      tags: ['Групповая', 'На русском']
    },
    {
      id: 2,
      title: 'Гастрономический тур по рынкам',
      city: 'moscow',
      category: 'gastro',
      time: 'day',
      duration: '4 часа',
      price: '3 500 ₽',
      rating: 4.8,
      reviews: 156,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/f0f9bc31-c102-456f-9583-73a97aff3d83.jpg',
      tags: ['С дегустацией', 'Индивидуальная']
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Концерт классической музыки',
      city: 'moscow',
      type: 'concert',
      date: 'Сегодня, 19:00',
      venue: 'Консерватория',
      venueId: '1',
      price: '2 000 ₽',
      rating: 4.7,
      reviews: 89,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/8be0f182-aaab-426c-a285-bee2b4a0c00f.jpg',
      tags: ['18+', 'Классика']
    },
    {
      id: 2,
      title: 'Мастер-класс по живописи',
      city: 'moscow',
      type: 'masterclass',
      date: 'Завтра, 15:00',
      venue: 'Ресторан "Вкусная история"',
      venueId: '1',
      price: '2 500 ₽',
      rating: 4.9,
      reviews: 124,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/fede18a7-4d62-4ed8-9c98-22a3a83c41f1.jpg',
      tags: ['Для начинающих', 'Материалы включены']
    }
  ];

  const places = [
    {
      id: 1,
      title: 'Ресторан "Вкусная история"',
      city: 'moscow',
      placeType: 'restaurant',
      cuisine: 'european',
      address: 'ул. Примерная, д. 10',
      priceLevel: '₽₽₽',
      workingHours: '12:00 - 23:00',
      venueId: '1',
      rating: 4.8,
      reviews: 342,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/fede18a7-4d62-4ed8-9c98-22a3a83c41f1.jpg',
      tags: ['Терраса', 'Живая музыка']
    },
    {
      id: 2,
      title: 'Кофейня "Утро"',
      city: 'moscow',
      placeType: 'cafe',
      cuisine: 'european',
      address: 'Тверская ул., д. 15',
      priceLevel: '₽₽',
      workingHours: '08:00 - 22:00',
      venueId: '2',
      rating: 4.6,
      reviews: 156,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/f0f9bc31-c102-456f-9583-73a97aff3d83.jpg',
      tags: ['Wi-Fi', 'Веган меню']
    },
    {
      id: 3,
      title: 'Парк Горького',
      city: 'moscow',
      placeType: 'park',
      cuisine: '',
      address: 'Крымский Вал, 9',
      priceLevel: 'Бесплатно',
      workingHours: 'Круглосуточно',
      venueId: '3',
      rating: 4.9,
      reviews: 567,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/8be0f182-aaab-426c-a285-bee2b4a0c00f.jpg',
      tags: ['Прогулки', 'Аренда велосипедов']
    }
  ];

  const filteredExcursions = excursions.filter(exc => {
    if (exc.city !== selectedCity) return false;
    if (selectedCategories.length > 0 && !selectedCategories.includes(exc.category)) return false;
    if (selectedTime.length > 0 && !selectedTime.includes(exc.time)) return false;
    return true;
  });

  const filteredEvents = events.filter(evt => {
    if (evt.city !== selectedCity) return false;
    if (selectedEventTypes.length > 0 && !selectedEventTypes.includes(evt.type)) return false;
    return true;
  });

  const filteredPlaces = places.filter(place => {
    if (place.city !== selectedCity) return false;
    if (selectedPlaceTypes.length > 0 && !selectedPlaceTypes.includes(place.placeType)) return false;
    if (selectedCuisines.length > 0 && place.cuisine && !selectedCuisines.includes(place.cuisine)) return false;
    return true;
  });

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setSelectedCategories(checked 
      ? [...selectedCategories, categoryId]
      : selectedCategories.filter(c => c !== categoryId)
    );
  };

  const handleTimeChange = (timeId: string, checked: boolean) => {
    setSelectedTime(checked 
      ? [...selectedTime, timeId]
      : selectedTime.filter(t => t !== timeId)
    );
  };

  const handleEventTypeChange = (typeId: string, checked: boolean) => {
    setSelectedEventTypes(checked 
      ? [...selectedEventTypes, typeId]
      : selectedEventTypes.filter(t => t !== typeId)
    );
  };

  const handlePlaceTypeChange = (typeId: string, checked: boolean) => {
    setSelectedPlaceTypes(checked 
      ? [...selectedPlaceTypes, typeId]
      : selectedPlaceTypes.filter(t => t !== typeId)
    );
  };

  const handleCuisineChange = (cuisineId: string, checked: boolean) => {
    setSelectedCuisines(checked 
      ? [...selectedCuisines, cuisineId]
      : selectedCuisines.filter(c => c !== cuisineId)
    );
  };

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

      <section className="py-12 bg-gradient-to-br from-accent/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Сходить</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Экскурсии, мероприятия и активности в вашем городе
            </p>

            <div className="flex items-center justify-center gap-3">
              <Icon name="MapPin" className="text-primary" size={24} />
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-64 h-12 text-base">
                  <SelectValue placeholder="Выберите город" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map(city => (
                    <SelectItem key={city.id} value={city.id}>
                      {city.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="excursions">
                <Icon name="Map" className="mr-2" size={18} />
                Экскурсии
              </TabsTrigger>
              <TabsTrigger value="events">
                <Icon name="Calendar" className="mr-2" size={18} />
                Афиша
              </TabsTrigger>
              <TabsTrigger value="places">
                <Icon name="Coffee" className="mr-2" size={18} />
                Места
              </TabsTrigger>
            </TabsList>

            <TabsContent value="excursions">
              <div className="mb-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-semibold flex items-center gap-2">
                      <Icon name="Tag" size={16} />
                      Категория
                    </Label>
                    {selectedCategories.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedCategories([])}
                        className="h-7 text-xs"
                      >
                        Очистить
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {excursionCategories.map(cat => (
                      <Badge
                        key={cat.id}
                        variant={selectedCategories.includes(cat.id) ? 'default' : 'outline'}
                        className="cursor-pointer hover:shadow-md transition-all px-4 py-2"
                        onClick={() => handleCategoryChange(cat.id, !selectedCategories.includes(cat.id))}
                      >
                        {cat.label}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-semibold flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      Время начала
                    </Label>
                    {selectedTime.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedTime([])}
                        className="h-7 text-xs"
                      >
                        Очистить
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map(slot => (
                      <Badge
                        key={slot.id}
                        variant={selectedTime.includes(slot.id) ? 'default' : 'outline'}
                        className="cursor-pointer hover:shadow-md transition-all px-4 py-2"
                        onClick={() => handleTimeChange(slot.id, !selectedTime.includes(slot.id))}
                      >
                        {slot.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Найдено экскурсий: {filteredExcursions.length}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredExcursions.map(exc => (
                    <Card key={exc.id} className="group hover:shadow-xl transition-all animate-fade-in cursor-pointer">
                      <div className="relative overflow-hidden h-48">
                        <img src={exc.image} alt={exc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute top-3 right-3 flex gap-2">
                          {exc.tags.map((tag, idx) => (
                            <Badge key={idx} className="bg-white/90 text-primary">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{exc.title}</CardTitle>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            <span>{exc.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                            <span>{exc.rating}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{exc.price}</span>
                        <Button className="bg-accent hover:bg-accent/90">Забронировать</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="mb-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-semibold flex items-center gap-2">
                      <Icon name="Tag" size={16} />
                      Тип события
                    </Label>
                    {selectedEventTypes.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedEventTypes([])}
                        className="h-7 text-xs"
                      >
                        Очистить
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {eventTypes.map(type => (
                      <Badge
                        key={type.id}
                        variant={selectedEventTypes.includes(type.id) ? 'default' : 'outline'}
                        className="cursor-pointer hover:shadow-md transition-all px-4 py-2"
                        onClick={() => handleEventTypeChange(type.id, !selectedEventTypes.includes(type.id))}
                      >
                        {type.label}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-3 block flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    Быстрый выбор
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Calendar" className="mr-2" size={14} />
                      Сегодня
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="CalendarDays" className="mr-2" size={14} />
                      Завтра
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="CalendarRange" className="mr-2" size={14} />
                      Выходные
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Найдено мероприятий: {filteredEvents.length}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredEvents.map(evt => (
                    <Card key={evt.id} className="group hover:shadow-xl transition-all animate-fade-in cursor-pointer">
                      <div className="relative overflow-hidden h-48">
                        <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute top-3 right-3 flex gap-2">
                          {evt.tags.map((tag, idx) => (
                            <Badge key={idx} className="bg-white/90 text-primary">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{evt.title}</CardTitle>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            <span>{evt.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="MapPin" size={14} />
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/partner?id=${evt.venueId}`);
                              }}
                              className="hover:text-primary hover:underline transition-colors"
                            >
                              {evt.venue}
                            </button>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                            <span>{evt.rating} ({evt.reviews})</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">{evt.price}</span>
                        <Button className="bg-accent hover:bg-accent/90">Купить билет</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="places">
              <div className="mb-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-semibold flex items-center gap-2">
                      <Icon name="Store" size={16} />
                      Тип места
                    </Label>
                    {selectedPlaceTypes.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedPlaceTypes([])}
                        className="h-7 text-xs"
                      >
                        Очистить
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {placeTypes.map(type => (
                      <Badge
                        key={type.id}
                        variant={selectedPlaceTypes.includes(type.id) ? 'default' : 'outline'}
                        className="cursor-pointer hover:shadow-md transition-all px-4 py-2"
                        onClick={() => handlePlaceTypeChange(type.id, !selectedPlaceTypes.includes(type.id))}
                      >
                        {type.label}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-semibold flex items-center gap-2">
                      <Icon name="UtensilsCrossed" size={16} />
                      Кухня
                    </Label>
                    {selectedCuisines.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedCuisines([])}
                        className="h-7 text-xs"
                      >
                        Очистить
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cuisines.map(cuisine => (
                      <Badge
                        key={cuisine.id}
                        variant={selectedCuisines.includes(cuisine.id) ? 'default' : 'outline'}
                        className="cursor-pointer hover:shadow-md transition-all px-4 py-2"
                        onClick={() => handleCuisineChange(cuisine.id, !selectedCuisines.includes(cuisine.id))}
                      >
                        {cuisine.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Найдено мест: {filteredPlaces.length}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPlaces.map(place => (
                    <Card 
                      key={place.id} 
                      className="group hover:shadow-xl transition-all animate-fade-in cursor-pointer"
                      onClick={() => navigate(`/partner?id=${place.venueId}`)}
                    >
                      <div className="relative overflow-hidden h-48">
                        <img src={place.image} alt={place.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute top-3 right-3 flex gap-2">
                          {place.tags.map((tag, idx) => (
                            <Badge key={idx} className="bg-white/90 text-primary">{tag}</Badge>
                          ))}
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-white/90 text-primary font-semibold">
                            {place.priceLevel}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{place.title}</CardTitle>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          {place.cuisine && (
                            <div className="flex items-center gap-1">
                              <Icon name="UtensilsCrossed" size={14} />
                              <span>{cuisines.find(c => c.id === place.cuisine)?.label}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Icon name="MapPin" size={14} />
                            <span>{place.address}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            <span>{place.workingHours}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                            <span>{place.rating} ({place.reviews})</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter>
                        <Button className="w-full bg-accent hover:bg-accent/90">
                          Подробнее
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Activities;
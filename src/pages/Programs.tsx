import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Programs = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  
  const [showRegionsSection, setShowRegionsSection] = useState(true);
  const [showCountriesSection, setShowCountriesSection] = useState(false);
  const [showTypesSection, setShowTypesSection] = useState(true);
  const [showDetailsSection, setShowDetailsSection] = useState(false);
  const [showPriceSection, setShowPriceSection] = useState(false);

  const regions = [
    { id: 'europe', label: 'Европа' },
    { id: 'asia', label: 'Азия' },
    { id: 'caucasus', label: 'Кавказ' },
    { id: 'middleeast', label: 'Ближний Восток' },
    { id: 'africa', label: 'Африка' },
    { id: 'southamerica', label: 'Южная Америка' },
    { id: 'northamerica', label: 'Северная Америка' }
  ];

  const countries = [
    { id: 'russia', label: 'Россия' },
    { id: 'italy', label: 'Италия' },
    { id: 'spain', label: 'Испания' },
    { id: 'france', label: 'Франция' },
    { id: 'greece', label: 'Греция' },
    { id: 'turkey', label: 'Турция' },
    { id: 'thailand', label: 'Таиланд' },
    { id: 'vietnam', label: 'Вьетнам' },
    { id: 'japan', label: 'Япония' },
    { id: 'china', label: 'Китай' },
    { id: 'georgia', label: 'Грузия' },
    { id: 'armenia', label: 'Армения' },
    { id: 'egypt', label: 'Египет' },
    { id: 'uae', label: 'ОАЭ' }
  ];

  const programTypes = [
    { id: 'author', label: 'Авторский' },
    { id: 'gastro', label: 'Гастрономический' },
    { id: 'combined', label: 'Комбинированный' },
    { id: 'cultural', label: 'Культурный' },
    { id: 'adventure', label: 'Приключенческий' },
    { id: 'photo', label: 'Фото-тур' }
  ];

  const durations = [
    { id: 'short', label: '1-3 дня' },
    { id: 'medium', label: '4-7 дней' },
    { id: 'long', label: '8-14 дней' },
    { id: 'extralong', label: '15+ дней' }
  ];

  const difficulties = [
    { id: 'easy', label: 'Легкий' },
    { id: 'medium', label: 'Средний' },
    { id: 'hard', label: 'Сложный' }
  ];

  const programs = [
    {
      id: 1,
      title: 'Гастрономический тур по Италии',
      destination: 'europe',
      type: 'gastro',
      duration: 'medium',
      difficulty: 'easy',
      durationText: '7 дней',
      price: 95000,
      rating: 4.9,
      reviews: 156,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/fede18a7-4d62-4ed8-9c98-22a3a83c41f1.jpg',
      tags: ['Дегустации', 'Мастер-классы']
    },
    {
      id: 2,
      title: 'Авторский тур: Древние города Азии',
      destination: 'asia',
      type: 'author',
      duration: 'long',
      difficulty: 'medium',
      durationText: '12 дней',
      price: 145000,
      rating: 4.8,
      reviews: 98,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/8be0f182-aaab-426c-a285-bee2b4a0c00f.jpg',
      tags: ['С гидом', 'Группа до 10 чел']
    },
    {
      id: 3,
      title: 'Комбинированный тур: Кавказ',
      destination: 'caucasus',
      type: 'combined',
      duration: 'medium',
      difficulty: 'medium',
      durationText: '5 дней',
      price: 45000,
      rating: 4.7,
      reviews: 234,
      image: 'https://cdn.poehali.dev/projects/e8be52ed-259f-47b5-95b7-f713fabba9ea/files/f0f9bc31-c102-456f-9583-73a97aff3d83.jpg',
      tags: ['Горы', 'Природа', 'Культура']
    }
  ];

  const filteredPrograms = programs.filter(program => {
    if (program.price < priceRange[0] || program.price > priceRange[1]) return false;
    if (selectedDestinations.length > 0 && !selectedDestinations.includes(program.destination)) return false;
    if (selectedTypes.length > 0 && !selectedTypes.includes(program.type)) return false;
    if (selectedDurations.length > 0 && !selectedDurations.includes(program.duration)) return false;
    if (selectedDifficulties.length > 0 && !selectedDifficulties.includes(program.difficulty)) return false;
    return true;
  });

  const toggleDestination = (id: string) => {
    setSelectedDestinations(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  const toggleType = (id: string) => {
    setSelectedTypes(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const toggleDuration = (id: string) => {
    setSelectedDurations(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  const toggleDifficulty = (id: string) => {
    setSelectedDifficulties(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  const clearAllFilters = () => {
    setPriceRange([0, 200000]);
    setSelectedDate(undefined);
    setSelectedDestinations([]);
    setSelectedTypes([]);
    setSelectedDurations([]);
    setSelectedDifficulties([]);
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

      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Посмотреть</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Авторские программы и экскурсионные маршруты для незабываемых впечатлений
            </p>
          </div>

          <div className="mb-8 space-y-4 animate-fade-in">
            <Card>
              <CardHeader 
                className="cursor-pointer hover:bg-secondary/50 transition-colors"
                onClick={() => setShowRegionsSection(!showRegionsSection)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon name="Globe" size={20} className="text-primary" />
                    <CardTitle className="text-base">Регионы</CardTitle>
                    {selectedDestinations.filter(d => regions.some(r => r.id === d)).length > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedDestinations.filter(d => regions.some(r => r.id === d)).length}
                      </Badge>
                    )}
                  </div>
                  <Icon 
                    name={showRegionsSection ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground"
                  />
                </div>
              </CardHeader>
              {showRegionsSection && (
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {regions.map(region => (
                      <Badge
                        key={region.id}
                        variant={selectedDestinations.includes(region.id) ? 'default' : 'outline'}
                        className="cursor-pointer hover:shadow-md transition-all px-4 py-2"
                        onClick={() => toggleDestination(region.id)}
                      >
                        {region.label}
                      </Badge>
                    ))}
                  </div>
                  {selectedDestinations.filter(d => regions.some(r => r.id === d)).length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDestinations(prev => prev.filter(d => !regions.some(r => r.id === d)));
                      }}
                      className="mt-3 h-7 text-xs"
                    >
                      Очистить
                    </Button>
                  )}
                </CardContent>
              )}
            </Card>

            <Card>
              <CardHeader 
                className="cursor-pointer hover:bg-secondary/50 transition-colors"
                onClick={() => setShowCountriesSection(!showCountriesSection)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <CardTitle className="text-base">Страны</CardTitle>
                    {selectedDestinations.filter(d => countries.some(c => c.id === d)).length > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedDestinations.filter(d => countries.some(c => c.id === d)).length}
                      </Badge>
                    )}
                  </div>
                  <Icon 
                    name={showCountriesSection ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground"
                  />
                </div>
              </CardHeader>
              {showCountriesSection && (
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {countries.map(country => (
                      <Badge
                        key={country.id}
                        variant={selectedDestinations.includes(country.id) ? 'default' : 'outline'}
                        className="cursor-pointer hover:shadow-md transition-all px-3 py-1.5 text-xs"
                        onClick={() => toggleDestination(country.id)}
                      >
                        {country.label}
                      </Badge>
                    ))}
                  </div>
                  {selectedDestinations.filter(d => countries.some(c => c.id === d)).length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDestinations(prev => prev.filter(d => !countries.some(c => c.id === d)));
                      }}
                      className="mt-3 h-7 text-xs"
                    >
                      Очистить
                    </Button>
                  )}
                </CardContent>
              )}
            </Card>

            <Card>
              <CardHeader 
                className="cursor-pointer hover:bg-secondary/50 transition-colors"
                onClick={() => setShowTypesSection(!showTypesSection)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon name="Compass" size={20} className="text-primary" />
                    <CardTitle className="text-base">Тип программы</CardTitle>
                    {selectedTypes.length > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedTypes.length}
                      </Badge>
                    )}
                  </div>
                  <Icon 
                    name={showTypesSection ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground"
                  />
                </div>
              </CardHeader>
              {showTypesSection && (
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {programTypes.map(type => (
                      <Badge
                        key={type.id}
                        variant={selectedTypes.includes(type.id) ? 'default' : 'outline'}
                        className="cursor-pointer hover:shadow-md transition-all px-4 py-2"
                        onClick={() => toggleType(type.id)}
                      >
                        {type.label}
                      </Badge>
                    ))}
                  </div>
                  {selectedTypes.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTypes([]);
                      }}
                      className="mt-3 h-7 text-xs"
                    >
                      Очистить
                    </Button>
                  )}
                </CardContent>
              )}
            </Card>

            <Card>
              <CardHeader 
                className="cursor-pointer hover:bg-secondary/50 transition-colors"
                onClick={() => setShowDetailsSection(!showDetailsSection)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon name="Settings" size={20} className="text-primary" />
                    <CardTitle className="text-base">Параметры тура</CardTitle>
                    {(selectedDurations.length > 0 || selectedDifficulties.length > 0 || selectedDate) && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedDurations.length + selectedDifficulties.length + (selectedDate ? 1 : 0)}
                      </Badge>
                    )}
                  </div>
                  <Icon 
                    name={showDetailsSection ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground"
                  />
                </div>
              </CardHeader>
              {showDetailsSection && (
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-semibold mb-2 block flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      Длительность
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {durations.map(dur => (
                        <Badge
                          key={dur.id}
                          variant={selectedDurations.includes(dur.id) ? 'default' : 'outline'}
                          className="cursor-pointer hover:shadow-md transition-all px-3 py-1.5"
                          onClick={() => toggleDuration(dur.id)}
                        >
                          {dur.label}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold mb-2 block flex items-center gap-2">
                      <Icon name="TrendingUp" size={16} />
                      Сложность
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {difficulties.map(diff => (
                        <Badge
                          key={diff.id}
                          variant={selectedDifficulties.includes(diff.id) ? 'default' : 'outline'}
                          className="cursor-pointer hover:shadow-md transition-all px-3 py-1.5"
                          onClick={() => toggleDifficulty(diff.id)}
                        >
                          {diff.label}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold mb-2 block flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      Дата начала
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Calendar" className="mr-2" size={16} />
                          {selectedDate ? format(selectedDate, 'dd MMM yyyy', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
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

                  {(selectedDurations.length > 0 || selectedDifficulties.length > 0 || selectedDate) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDurations([]);
                        setSelectedDifficulties([]);
                        setSelectedDate(undefined);
                      }}
                      className="h-7 text-xs"
                    >
                      Очистить все
                    </Button>
                  )}
                </CardContent>
              )}
            </Card>

            <Card>
              <CardHeader 
                className="cursor-pointer hover:bg-secondary/50 transition-colors"
                onClick={() => setShowPriceSection(!showPriceSection)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon name="DollarSign" size={20} className="text-primary" />
                    <CardTitle className="text-base">Бюджет</CardTitle>
                    {(priceRange[0] !== 0 || priceRange[1] !== 200000) && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {priceRange[0].toLocaleString('ru-RU')} - {priceRange[1].toLocaleString('ru-RU')} ₽
                      </Badge>
                    )}
                  </div>
                  <Icon 
                    name={showPriceSection ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground"
                  />
                </div>
              </CardHeader>
              {showPriceSection && (
                <CardContent>
                  <Label className="text-sm mb-3 block">
                    {priceRange[0].toLocaleString('ru-RU')} - {priceRange[1].toLocaleString('ru-RU')} ₽
                  </Label>
                  <Slider
                    min={0}
                    max={200000}
                    step={5000}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="w-full"
                  />
                  {(priceRange[0] !== 0 || priceRange[1] !== 200000) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPriceRange([0, 200000]);
                      }}
                      className="mt-3 h-7 text-xs"
                    >
                      Сбросить
                    </Button>
                  )}
                </CardContent>
              )}
            </Card>

            <div className="flex items-center justify-between pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Найдено программ: <span className="font-semibold text-foreground">{filteredPrograms.length}</span>
              </p>
              <Button variant="outline" size="sm" onClick={clearAllFilters}>
                <Icon name="X" size={14} className="mr-1" />
                Сбросить все
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Программы не найдены</h3>
                <p className="text-muted-foreground mb-4">Попробуйте изменить параметры фильтра</p>
                <Button onClick={clearAllFilters}>Сбросить фильтры</Button>
              </div>
            ) : (
              filteredPrograms.map(program => (
                <Card
                  key={program.id}
                  className="group hover:shadow-xl transition-all animate-fade-in cursor-pointer"
                  onClick={() => navigate(`/tour?id=${program.id}`)}
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      {program.tags.map((tag, idx) => (
                        <Badge key={idx} className="bg-white/90 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {program.title}
                    </CardTitle>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        <span>{program.durationText}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                        <span>{program.rating}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardFooter className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">от</p>
                      <p className="text-2xl font-bold text-primary">
                        {program.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90">Подробнее</Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const Label = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <label className={className}>{children}</label>
);

export default Programs;
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface TourFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  priceRange: [number, number];
  dateFrom?: Date;
  dateTo?: Date;
  categories: string[];
  duration: string[];
}

const TourFilters = ({ onFilterChange }: TourFiltersProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'rest', label: 'Отдохнуть' },
    { id: 'see', label: 'Посмотреть' },
    { id: 'go', label: 'Сходить' }
  ];

  const durations = [
    { id: 'short', label: '1-3 дня' },
    { id: 'medium', label: '4-7 дней' },
    { id: 'long', label: '8+ дней' }
  ];

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newCategories = checked
      ? [...selectedCategories, categoryId]
      : selectedCategories.filter(c => c !== categoryId);
    setSelectedCategories(newCategories);
    applyFilters({ categories: newCategories });
  };

  const handleDurationChange = (durationId: string, checked: boolean) => {
    const newDuration = checked
      ? [...selectedDuration, durationId]
      : selectedDuration.filter(d => d !== durationId);
    setSelectedDuration(newDuration);
    applyFilters({ duration: newDuration });
  };

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setPriceRange(newRange);
    applyFilters({ priceRange: newRange });
  };

  const applyFilters = (updates: Partial<FilterState> = {}) => {
    onFilterChange({
      priceRange,
      dateFrom,
      dateTo,
      categories: selectedCategories,
      duration: selectedDuration,
      ...updates
    });
  };

  const resetFilters = () => {
    setPriceRange([0, 300000]);
    setDateFrom(undefined);
    setDateTo(undefined);
    setSelectedCategories([]);
    setSelectedDuration([]);
    onFilterChange({
      priceRange: [0, 300000],
      categories: [],
      duration: []
    });
  };

  return (
    <div className="space-y-4">
      <Button
        variant="outline"
        className="w-full md:hidden"
        onClick={() => setShowFilters(!showFilters)}
      >
        <Icon name="SlidersHorizontal" className="mr-2" size={20} />
        {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
      </Button>

      <div className={`space-y-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
        <Card className="animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Фильтры</CardTitle>
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                <Icon name="RotateCcw" size={16} className="mr-1" />
                Сбросить
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-base font-semibold mb-3 block">Цена</Label>
              <div className="px-2">
                <Slider
                  min={0}
                  max={300000}
                  step={5000}
                  value={priceRange}
                  onValueChange={handlePriceChange}
                  className="mb-4"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-primary">
                    {priceRange[0].toLocaleString('ru-RU')} ₽
                  </span>
                  <span className="text-muted-foreground">—</span>
                  <span className="font-medium text-primary">
                    {priceRange[1].toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold mb-3 block">Тип отдыха</Label>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={(checked) => 
                        handleCategoryChange(category.id, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={category.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold mb-3 block">Длительность</Label>
              <div className="space-y-3">
                {durations.map((duration) => (
                  <div key={duration.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={duration.id}
                      checked={selectedDuration.includes(duration.id)}
                      onCheckedChange={(checked) => 
                        handleDurationChange(duration.id, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={duration.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {duration.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold mb-3 block">Даты поездки</Label>
              <div className="space-y-3">
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">От</Label>
                  <Calendar
                    mode="single"
                    selected={dateFrom}
                    onSelect={(date) => {
                      setDateFrom(date);
                      applyFilters({ dateFrom: date });
                    }}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                  {dateFrom && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Выбрано: {format(dateFrom, 'dd MMMM yyyy', { locale: ru })}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TourFilters;

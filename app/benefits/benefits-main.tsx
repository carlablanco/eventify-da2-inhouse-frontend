'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Breadcrumbs } from '@/components/breadcrumbs';

const breadcrumbItems = [{ title: 'Beneficios', link: '/benefits' }];

const benefits = [
  {
    id: 1,
    title: 'Descuento en Zapatería',
    code: 'ZAPATO20',
    category: 'Ropa'
  },
  { id: 2, title: 'Cafetería Gratis', code: 'CAFE100', category: 'Comida' },
  { id: 3, title: '25% en Libros', code: 'LIBRO25', category: 'Ropa' },
  {
    id: 4,
    title: 'Descuento en Celulares',
    code: 'TECH15',
    category: 'Tecnologia'
  },
  {
    id: 5,
    title: 'Entrada de Cine 2x1',
    code: 'CINE50',
    category: 'Entretenimiento'
  },
  {
    id: 6,
    title: 'Festival de Música',
    code: 'MUSICA10',
    category: 'Festivales'
  }
];

const categories = [
  'Todos',
  'Ropa',
  'Comida',
  'Tecnologia',
  'Entretenimiento',
  'Festivales'
];

export default function BenefitCards() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBenefits = benefits.filter((benefit) => {
    const matchesCategory =
      selectedCategory === 'Todos' || benefit.category === selectedCategory;
    const matchesSearch = benefit.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4 p-8">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="space-y-4">
        <div className="flex justify-start gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              type={selectedCategory === category ? 'submit' : 'reset'}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={
                selectedCategory === category ? 'text-white' : 'text-gray-700'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <Input
          type="text"
          placeholder="Buscar beneficio por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredBenefits.map((benefit) => (
          <Card key={benefit.id} className="w-full shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-500">
                Código de descuento:
              </CardDescription>
              <p className="mb-2 text-lg font-semibold">{benefit.code}</p>
              <Button className="mt-2 w-full" type={'submit'}>
                Reclamar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBenefits.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No se encontraron beneficios.
        </p>
      )}
    </div>
  );
}

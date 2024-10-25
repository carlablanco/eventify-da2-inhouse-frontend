'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const benefits = [
  { id: 1, title: 'Descuento en Zapatería', code: 'ZAPATO20' },
  { id: 2, title: 'Cafetería Gratis', code: 'CAFE100' },
  { id: 3, title: '25% en Libros', code: 'LIBRO25' },
  { id: 4, title: 'Descuento en Tecnología', code: 'TECH15' },
  { id: 5, title: 'Entrada de Cine 2x1', code: 'CINE50' },
  { id: 6, title: 'Descuento en Ropa', code: 'ROPA30' },
  { id: 7, title: 'Descuento en Recital', code: 'MUSICA213' }
];

export default function BenefitsMain() {
  return (
    <div className="space-y-4 p-4">
      <h2 className="mb-8 pl-4 text-xl font-bold">Beneficios Especiales</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
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
    </div>
  );
}

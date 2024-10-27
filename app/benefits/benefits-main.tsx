'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Tag } from 'lucide-react';
import Image from 'next/image';

interface Coupon {
  id: string;
  name: string;
  discount: string;
  category: string;
  imageUrl?: string;
}

const categories = [
  { name: 'Todos', icon: <Tag className="h-4 w-4" /> },
  { name: 'Películas', icon: '🎬' },
  { name: 'Tecnología', icon: '💻' },
  { name: 'Belleza y cuidado personal', icon: '💄' },
  { name: 'Entretenimiento', icon: '🎭' }
];

const coupons: Coupon[] = [
  {
    id: '1',
    name: 'Netflix Premium',
    discount: '20% OFF',
    category: 'Entretenimiento',
    imageUrl:
      'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456'
  },
  {
    id: '2',
    name: 'Apple Store Gift Card',
    discount: '$50 OFF',
    category: 'Tecnología',
    imageUrl:
      'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg'
  },
  {
    id: '3',
    name: 'Sephora Beauty Box',
    discount: '30% OFF',
    category: 'Belleza y cuidado personal',
    imageUrl: 'https://www.fashionabc.org/wp-content/uploads/2021/02/S.jpg'
  },
  {
    id: '4',
    name: 'Cinemark',
    discount: '2x1',
    category: 'Películas',
    imageUrl:
      'https://static.wikia.nocookie.net/logopedia/images/3/3f/Cinemark_%281998_with_a_C_symbol_Android_App%29.svg/revision/latest/scale-to-width-down/250?cb=20220725021346&path-prefix=es'
  },
  {
    id: '5',
    name: 'Spotify Premium',
    discount: '3 meses gratis',
    category: 'Entretenimiento',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/75/Spotify_icon.png'
  },
  {
    id: '6',
    name: 'Best Buy Electronics',
    discount: '15% OFF',
    category: 'Tecnología',
    imageUrl:
      'https://logodownload.org/wp-content/uploads/2020/05/best-buy-logo-4.png'
  }
];

export default function BenefitsMain() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoupons = coupons.filter(
    (coupon) =>
      (selectedCategory === 'Todos' || coupon.category === selectedCategory) &&
      coupon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-0">
      {/*<h1 className="mb-6 text-3xl font-bold">Beneficios</h1>*/}
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category.name)}
            className="items-center"
          >
            <span>{category.icon}</span>
            {category.name}
          </Button>
        ))}
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <Input
          type="text"
          placeholder="Buscar cupones..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCoupons.map((coupon) => (
          <Card key={coupon.id} className="flex flex-col">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image
                    src={coupon.imageUrl as string}
                    alt={coupon.name}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <Badge variant="secondary" className="mb-2">
                    {coupon.category}
                  </Badge>
                  <h2 className="mb-2 text-xl font-semibold">{coupon.name}</h2>
                  <p className="text-2xl font-bold text-primary">
                    {coupon.discount}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto p-4 pt-0">
              <Button
                className="w-full"
                variant={'secondary'}
                type={'button'}
                onClick={() => alert(`Reclamado ${coupon.name}!`)}
              >
                Obtener
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {filteredCoupons.length === 0 && (
        <p className="mt-8 text-center text-gray-500">
          No hay cupones disponibles. 😢
        </p>
      )}
    </div>
  );
}

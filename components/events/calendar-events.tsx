'use client';

import { useState, useMemo } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { es } from 'date-fns/locale';

interface MusicEvent {
  id: string;
  artist: string;
  date: Date;
  time: string;
  venue: string;
  flyerUrl: string;
  ticketUrl?: string;
}

interface MusicEventCalendarProps {
  events: MusicEvent[];
}

const mockedEvents: MusicEvent[] = [
  {
    id: '1',
    artist: 'Rock Band',
    date: new Date(2024, 11, 15),
    time: '20:00',
    venue: 'City Arena',
    ticketUrl: '#',
    flyerUrl:
      'https://images.unsplash.com/photo-1496169514208-d9affacc58ba?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '2',
    artist: 'Pop Star',
    date: new Date(2024, 11, 15),
    time: '19:30',
    venue: 'Music Hall',
    ticketUrl: '#',
    flyerUrl:
      'https://images.unsplash.com/photo-1496169514208-d9affacc58ba?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    artist: 'Jazz Ensemble',
    date: new Date(2024, 11, 20),
    time: '21:00',
    venue: 'Jazz Club',
    ticketUrl: '#',
    flyerUrl:
      'https://images.unsplash.com/photo-1496169514208-d9affacc58ba?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '4',
    artist: 'Electronic DJ',
    date: new Date(2024, 11, 25),
    time: '22:00',
    venue: 'Nightclub',
    ticketUrl: '#',
    flyerUrl:
      'https://images.unsplash.com/photo-1496169514208-d9affacc58ba?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '5',
    artist: 'Classical Orchestra',
    date: new Date(2024, 11, 30),
    time: '19:00',
    venue: 'Concert Hall',
    ticketUrl: '#',
    flyerUrl:
      'https://images.unsplash.com/photo-1496169514208-d9affacc58ba?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export default function CalendarEvents({
  events = mockedEvents
}: MusicEventCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const filteredEvents = events.filter(
    (event) =>
      selectedDate && event.date.toDateString() === selectedDate.toDateString()
  );

  const eventDates = useMemo(() => {
    return events.reduce(
      (acc, event) => {
        const dateString = event.date.toDateString();
        acc[dateString] = true;
        return acc;
      },
      {} as Record<string, boolean>
    );
  }, [events]);

  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <div className={'flex flex-wrap gap-6'}>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="flex-none rounded-md"
          locale={es}
          modifiers={{
            event: (date) => eventDates[date.toDateString()]
          }}
          modifiersStyles={{
            event: {
              fontWeight: 'bold',
              border: '1px solid'
            }
          }}
        />
        <div className={'flex-grow pt-3'}>
          <h2 className="mb-8 text-2xl font-bold">
            Eventos el{' '}
            {selectedDate
              ? format(selectedDate, 'dd/MM/yyyy')
              : 'Fecha seleccionada'}
          </h2>
          <div>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="mb-6 flex flex-wrap justify-between gap-4 border-b pb-6 last:border-b-0"
                >
                  <div className={'flex gap-4'}>
                    <Image
                      src={event.flyerUrl}
                      alt={`${event.artist} flyer`}
                      width={100}
                      height={100}
                      className="aspect-video rounded-md object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{event.artist}</h3>
                      <p className="text-sm">
                        {format(event.date, 'MMMM d, yyyy', {
                          locale: es
                        })}{' '}
                        a las {event.time}
                      </p>
                      <p className="text-sm font-bold">{event.venue}</p>
                    </div>
                  </div>
                  <div className="flex w-min items-center sm:w-full">
                    <Button
                      asChild
                      className={'w-min sm:w-full'}
                      type={'button'}
                      variant={'secondary'}
                    >
                      <Link
                        href={event.ticketUrl as string}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver más
                      </Link>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-primary">
                No hay eventos para esta fecha.
              </p>
            )}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

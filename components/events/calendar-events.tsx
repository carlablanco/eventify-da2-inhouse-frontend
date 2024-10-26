'use client';

import { useState, useMemo } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

// Mocked data
const mockedEvents: MusicEvent[] = [
  {
    id: '1',
    artist: 'Rock Band',
    date: new Date(2024, 10, 15),
    time: '20:00',
    venue: 'City Arena',
    ticketUrl: '#',
    flyerUrl:
      'https://images.unsplash.com/photo-1496169514208-d9affacc58ba?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '2',
    artist: 'Pop Star',
    date: new Date(2024, 10, 15),
    time: '19:30',
    venue: 'Music Hall',
    ticketUrl: '#',
    flyerUrl:
      'https://images.unsplash.com/photo-1496169514208-d9affacc58ba?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    artist: 'Jazz Ensemble',
    date: new Date(2024, 10, 20),
    time: '21:00',
    venue: 'Jazz Club',
    ticketUrl: '#',
    flyerUrl:
      'https://images.unsplash.com/photo-1496169514208-d9affacc58ba?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '4',
    artist: 'Electronic DJ',
    date: new Date(2024, 10, 25),
    time: '22:00',
    venue: 'Nightclub',
    ticketUrl: '#',
    flyerUrl:
      'https://images.unsplash.com/photo-1496169514208-d9affacc58ba?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '5',
    artist: 'Classical Orchestra',
    date: new Date(2024, 10, 30),
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
    <div className="flex w-full flex-col flex-wrap gap-6 md:flex-row">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border shadow"
        modifiers={{
          event: (date) => eventDates[date.toDateString()]
        }}
        modifiersStyles={{
          event: {
            fontWeight: 'bold'
          }
        }}
      />
      <div className={'flex w-3/4 flex-col gap-4'}>
        <ScrollArea className="h-[calc(100vh-200px)] w-full rounded-md border p-4">
          <h2 className="mb-8 text-2xl font-bold">
            Eventos el{' '}
            {selectedDate
              ? format(selectedDate, 'dd/MM/yyyy')
              : 'Fecha seleccionada'}
          </h2>
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
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{event.artist}</h3>
                    <p className="text-sm text-gray-500">
                      {format(event.date, 'MMMM d, yyyy')} at {event.time}
                    </p>
                    <p className="text-sm">{event.venue}</p>
                  </div>
                </div>
                <div className="flex w-min items-center sm:w-full">
                  <Button asChild className={'w-min sm:w-full'}>
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
        </ScrollArea>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Article {
  title: string;
  author: string;
  date: string;
  content: string;
}

const articles: Record<string, Article> = {
  '1': {
    title: 'Eventify Launches Revolutionary Event Planning AI',
    author: 'Sarah Johnson',
    date: '2024-10-15',
    content: `
      <p>Eventify, the leading event management platform, has unveiled its groundbreaking AI-powered event planning assistant, set to revolutionize the industry. This innovative tool promises to streamline the event planning process, offering personalized recommendations and real-time problem-solving capabilities.</p>
      <p>The AI assistant, named "EventMind," utilizes advanced machine learning algorithms to analyze vast amounts of data from successful events, market trends, and client preferences. It can suggest optimal venues, create tailored guest lists, and even predict potential issues before they arise.</p>
      <p>"We're thrilled to introduce EventMind to our clients," said Eventify CEO, Mark Thompson. "This technology will not only save time and resources but also elevate the quality and uniqueness of each event we help create."</p>
      <p>Early beta testers have reported a 40% reduction in planning time and a significant increase in client satisfaction. The AI assistant is expected to be fully integrated into Eventify's platform by the end of the year, marking a new era in event management technology.</p>
    `
  },
  '2': {
    title: "Eventify's Sustainable Events Initiative Gains Global Recognition",
    author: 'Michael Lee',
    date: '2024-10-20',
    content: `
      <p>Eventify's commitment to sustainability in event management has earned the company international acclaim. The "Green Events" initiative, launched earlier this year, has successfully reduced the carbon footprint of over 500 events worldwide.</p>
      <p>The program focuses on implementing eco-friendly practices such as zero-waste policies, renewable energy usage, and partnerships with local, sustainable vendors. Eventify has also developed a proprietary carbon calculator that helps clients understand and offset their event's environmental impact.</p>
      <p>"We believe that great events don't have to come at the cost of our planet," said Eventify's Sustainability Director, Emma Green. "Our Green Events initiative is proof that with innovation and dedication, we can create unforgettable experiences while preserving our environment."</p>
      <p>The initiative has caught the attention of several multinational corporations and government agencies, leading to a surge in demand for Eventify's services. The company plans to expand its sustainability offerings and aims to make all events carbon-neutral by 2026.</p>
    `
  }
};

export default function ArticleViewer() {
  const { articleId = 1 } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    setArticle(articles[(articleId as string) || '1']);
  }, [articleId]);

  if (!article) return <div>Loading...</div>;

  return (
    <Card className={'space-y-4 border-0 shadow-none'}>
      <CardHeader className={'p-0'}>
        <h1 className="mb-6 text-2xl font-bold sm:text-3xl">{article.title}</h1>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              src={`https://i.pravatar.cc/150?u=${article.author}`}
              alt={article.author}
            />
            <AvatarFallback>
              {article.author
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{article.author}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(article.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className={'p-0'}>
        <div
          className="prose dark:prose-invert max-w-none space-y-4 text-justify"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </CardContent>
      <CardFooter className={'p-0'}>
        <i className="text-sm text-muted-foreground">
          Published by Eventify Internal Communications
        </i>
      </CardFooter>
    </Card>
  );
}

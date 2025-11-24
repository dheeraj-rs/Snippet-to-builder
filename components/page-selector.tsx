'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Users, Briefcase, Mail } from 'lucide-react';

interface PageSelectorProps {
  selectedPage: string;
  onPageSelect: (page: string) => void;
}

const pages = [
  {
    key: 'home',
    title: 'Home',
    description: 'Landing page with hero section and features',
    icon: Home,
  },
  {
    key: 'about',
    title: 'About',
    description: 'Company story and team showcase',
    icon: Users,
  },
  {
    key: 'services',
    title: 'Services',
    description: 'Service offerings and details',
    icon: Briefcase,
  },
  {
    key: 'contact',
    title: 'Contact',
    description: 'Contact form and information',
    icon: Mail,
  },
];

export function PageSelector({ selectedPage, onPageSelect }: PageSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select Page Type</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pages.map((page) => {
          const Icon = page.icon;
          const isSelected = selectedPage === page.key;

          return (
            <Card
              key={page.key}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                isSelected ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              onClick={() => onPageSelect(page.key)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{page.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{page.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

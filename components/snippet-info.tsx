'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

interface SnippetInfoProps {
  description: string;
  pageType: string;
}

export function SnippetInfo({ description, pageType }: SnippetInfoProps) {
  const integrationInfo = {
    home: 'This home page snippet includes a responsive navigation bar, hero section with call-to-action, feature cards with icons, and a footer. The JavaScript adds scroll animations and interactive elements.',
    about: 'The about page features a company story section, mission statement, and team member cards. Staggered animations create an engaging user experience as content scrolls into view.',
    services: 'This services page showcases multiple service offerings with detailed feature lists. Each service card includes hover effects and interactive buttons for user engagement.',
    contact: 'A comprehensive contact page with a working form, contact information cards, social media links, and a map placeholder. Form validation ensures data quality.',
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Info className="h-5 w-5" />
            Snippet Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Integration Details</h4>
            <p className="text-sm text-muted-foreground">
              {integrationInfo[pageType as keyof typeof integrationInfo]}
            </p>
          </div>

          <Alert>
            <AlertDescription className="text-sm">
              You can edit the code in the editor tabs above. Changes will be reflected in the preview instantly.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

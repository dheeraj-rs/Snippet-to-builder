'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface CodeEditorProps {
  html: string;
  css: string;
  js: string;
  onHtmlChange: (value: string) => void;
  onCssChange: (value: string) => void;
  onJsChange: (value: string) => void;
}

export function CodeEditor({
  html,
  css,
  js,
  onHtmlChange,
  onCssChange,
  onJsChange,
}: CodeEditorProps) {
  return (
    <div className="h-full flex flex-col">
      <Tabs defaultValue="html" className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="html">HTML</TabsTrigger>
          <TabsTrigger value="css">CSS</TabsTrigger>
          <TabsTrigger value="js">JavaScript</TabsTrigger>
        </TabsList>

        <TabsContent value="html" className="flex-1 mt-4">
          <div className="space-y-2 h-full flex flex-col">
            <Label htmlFor="html-editor">HTML Code</Label>
            <Textarea
              id="html-editor"
              value={html}
              onChange={(e) => onHtmlChange(e.target.value)}
              className="flex-1 font-mono text-sm resize-none"
              placeholder="Enter HTML code here..."
            />
          </div>
        </TabsContent>

        <TabsContent value="css" className="flex-1 mt-4">
          <div className="space-y-2 h-full flex flex-col">
            <Label htmlFor="css-editor">CSS Code</Label>
            <Textarea
              id="css-editor"
              value={css}
              onChange={(e) => onCssChange(e.target.value)}
              className="flex-1 font-mono text-sm resize-none"
              placeholder="Enter CSS code here..."
            />
          </div>
        </TabsContent>

        <TabsContent value="js" className="flex-1 mt-4">
          <div className="space-y-2 h-full flex flex-col">
            <Label htmlFor="js-editor">JavaScript Code</Label>
            <Textarea
              id="js-editor"
              value={js}
              onChange={(e) => onJsChange(e.target.value)}
              className="flex-1 font-mono text-sm resize-none"
              placeholder="Enter JavaScript code here..."
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

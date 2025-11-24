'use client';

import { useState, useEffect } from 'react';
import { snippets } from '@/lib/snippets';
import { PreviewFrame } from '@/components/preview-frame';
import { CodeEditor } from '@/components/code-editor';
import { PageSelector } from '@/components/page-selector';
import { SnippetInfo } from '@/components/snippet-info';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Eye,
  Code2,
  Download,
  RotateCcw,
  Smartphone,
  Monitor,
  Save
} from 'lucide-react';
import { toast } from 'sonner';

export default function BuilderPage() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    const snippet = snippets[selectedPage];
    if (snippet) {
      setHtml(snippet.html);
      setCss(snippet.css);
      setJs(snippet.js);
    }
  }, [selectedPage]);

  const handleReset = () => {
    const snippet = snippets[selectedPage];
    if (snippet) {
      setHtml(snippet.html);
      setCss(snippet.css);
      setJs(snippet.js);
      toast.success('Code reset to default');
    }
  };

  const handleExport = () => {
    const content = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${selectedPage.charAt(0).toUpperCase() + selectedPage.slice(1)} Page</title>
  <style>
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    ${js}
  </script>
</body>
</html>
    `;

    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedPage}-page.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Page exported successfully');
  };

  const handleSave = () => {
    const projectData = {
      page: selectedPage,
      html,
      css,
      js,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(`project-${selectedPage}`, JSON.stringify(projectData));
    toast.success('Project saved locally');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Website Builder</h1>
              <p className="text-sm text-gray-600">Create beautiful multi-page websites</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode('desktop')}
                className={viewMode === 'desktop' ? 'bg-primary text-primary-foreground' : ''}
              >
                <Monitor className="h-4 w-4 mr-2" />
                Desktop
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode('mobile')}
                className={viewMode === 'mobile' ? 'bg-primary text-primary-foreground' : ''}
              >
                <Smartphone className="h-4 w-4 mr-2" />
                Mobile
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button size="sm" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <PageSelector selectedPage={selectedPage} onPageSelect={setSelectedPage} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Code Editor
              </h2>
            </div>

            <div className="space-y-4">
              <div className="h-[500px]">
                <CodeEditor
                  html={html}
                  css={css}
                  js={js}
                  onHtmlChange={setHtml}
                  onCssChange={setCss}
                  onJsChange={setJs}
                />
              </div>

              <SnippetInfo
                description={snippets[selectedPage].description}
                pageType={selectedPage}
              />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Live Preview
              </h2>
            </div>

            <div
              className={`bg-white border rounded-lg overflow-hidden shadow-inner transition-all ${
                viewMode === 'mobile' ? 'max-w-[375px] mx-auto' : 'w-full'
              }`}
              style={{ height: '600px' }}
            >
              <PreviewFrame html={html} css={css} js={js} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

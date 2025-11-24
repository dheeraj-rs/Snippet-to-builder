'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Eye, Zap, Layers, Download, Palette } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Website Builder</span>
          </div>
          <Link href="/builder">
            <Button>Launch Builder</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Build Beautiful Websites
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create stunning multi-page websites with pre-designed snippets and real-time preview.
            No coding experience required.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/builder">
              <Button size="lg" className="text-lg px-8">
                <Zap className="mr-2 h-5 w-5" />
                Start Building
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Examples
            </Button>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-transform hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Pre-built Snippets</CardTitle>
                <CardDescription>
                  Choose from professionally designed code snippets for home, about, services, and contact pages.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-transform hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Real-time Preview</CardTitle>
                <CardDescription>
                  See your changes instantly with our live preview feature. Edit code and watch it update in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-transform hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Fully Customizable</CardTitle>
                <CardDescription>
                  Edit HTML, CSS, and JavaScript directly in the browser. Complete control over your design.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-transform hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Multi-page Support</CardTitle>
                <CardDescription>
                  Build complete websites with multiple pages. Each page type comes with optimized templates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-transform hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Export Ready</CardTitle>
                <CardDescription>
                  Download your complete website as HTML files. Ready to deploy anywhere instantly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-transform hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Responsive Design</CardTitle>
                <CardDescription>
                  All templates are mobile-friendly and look great on any device. Preview in desktop or mobile mode.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Available Page Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Home', desc: 'Hero section with features grid', color: 'from-blue-500 to-purple-600' },
              { name: 'About', desc: 'Company story and team showcase', color: 'from-green-500 to-teal-600' },
              { name: 'Services', desc: 'Service offerings with details', color: 'from-orange-500 to-red-600' },
              { name: 'Contact', desc: 'Contact form and information', color: 'from-pink-500 to-rose-600' },
            ].map((page) => (
              <Card key={page.name} className="overflow-hidden">
                <div className={`h-32 bg-gradient-to-br ${page.color}`} />
                <CardHeader>
                  <CardTitle>{page.name}</CardTitle>
                  <CardDescription>{page.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Create?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start building your website today with our intuitive builder
          </p>
          <Link href="/builder">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Now
            </Button>
          </Link>
        </section>
      </main>

      <footer className="border-t mt-20 py-8 text-center text-gray-600">
        <p>&copy; 2025 Website Builder. All rights reserved.</p>
      </footer>
    </div>
  );
}

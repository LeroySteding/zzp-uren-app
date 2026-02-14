'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Timer, FolderKanban, FileText, Download, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">UrenTracker</span>
            </div>
            <Link href="/dashboard">
              <Button>Start nu gratis</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Urenregistratie die je <span className="text-blue-600">écht</span> bijhoudt
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Voor ZZP'ers die geen uren meer willen missen. Simpel, snel en altijd inzicht in je omzet.
          </p>
          
          {/* Pain Point */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-orange-900">
              <span className="font-semibold">Herkenbaar?</span> Je vergeet uren bij te houden en aan het einde van de maand mis je €500+ aan omzet. 
              Geen factuur = geen betaling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8">
                Start gratis
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Meer informatie
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Alles wat je nodig hebt</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Timer className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Timer</CardTitle>
                <CardDescription>
                  Start/stop met één klik. Vergeet nooit meer uren.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <FolderKanban className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Project tracking</CardTitle>
                <CardDescription>
                  Overzicht per project en klant. Budget alerts included.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Urenstaten</CardTitle>
                <CardDescription>
                  Genereer overzichten per week of maand in een paar klikken.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Download className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle>Export</CardTitle>
                <CardDescription>
                  CSV export voor je boekhouding of factuur-app.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Transparante prijzen</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Gratis</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">€0</span>
                  <span className="text-gray-600">/maand</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Tot 2 projecten</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Onbeperkt uren registreren</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Basis urenstaten</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>CSV export</span>
                  </li>
                </ul>
                <Link href="/dashboard" className="block mt-6">
                  <Button className="w-full" variant="outline">
                    Start gratis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-blue-600 border-2 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                Populair
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">€5</span>
                  <span className="text-gray-600">/maand</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="font-semibold">Onbeperkt projecten</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Onbeperkt klanten</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Geavanceerde rapportages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Integratie met facturatie-apps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>Prioriteit support</span>
                  </li>
                </ul>
                <Link href="/dashboard" className="block mt-6">
                  <Button className="w-full">
                    Start Pro trial
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Blijf op de hoogte
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Meld je aan voor updates over nieuwe features en tips voor ZZP'ers
          </p>
          
          {submitted ? (
            <div className="bg-green-500 text-white py-4 px-6 rounded-lg inline-block">
              <Check className="h-6 w-6 inline mr-2" />
              Bedankt! We houden je op de hoogte.
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="je@email.nl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white"
              />
              <Button type="submit" variant="secondary" size="lg">
                Aanmelden
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Werkt het ook op mobiel?</CardTitle>
              </CardHeader>
              <CardContent>
                Ja! UrenTracker is volledig responsive en werkt perfect op je telefoon. Start de timer onderweg.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kan ik mijn data exporteren?</CardTitle>
              </CardHeader>
              <CardContent>
                Absoluut. Je kunt al je uren exporteren naar CSV voor je boekhouding of andere tools.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Is er een gratis versie?</CardTitle>
              </CardHeader>
              <CardContent>
                Ja, je kunt gratis starten met tot 2 projecten. Perfect om te proberen. Upgrade naar Pro wanneer je meer nodig hebt.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hoe zit het met BTW?</CardTitle>
              </CardHeader>
              <CardContent>
                De prijzen zijn exclusief BTW. Als ZZP'er kun je dit vaak terugvragen bij de Belastingdienst.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center text-white mb-4">
                <Clock className="h-6 w-6 mr-2" />
                <span className="font-bold text-lg">UrenTracker</span>
              </div>
              <p className="text-sm">
                Simpele urenregistratie voor slimme ZZP'ers.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Prijzen</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Demo</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3">Bedrijf</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Over ons</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white">Voorwaarden</Link></li>
                <li><Link href="#" className="hover:text-white">AVG</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            © 2026 UrenTracker. Made with ❤️ for ZZP'ers.
          </div>
        </div>
      </footer>
    </div>
  );
}

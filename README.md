# UrenTracker - ZZP Urenregistratie MVP

Een moderne, gebruiksvriendelijke urenregistratie applicatie speciaal gebouwd voor Nederlandse ZZP'ers (zelfstandigen zonder personeel). Track je uren, genereer urenstaten en vergeet nooit meer omzet.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

### 🎯 Kernfunctionaliteit
- **Timer & Tracking** - Start/stop timer met één klik + handmatige invoer
- **Dashboard** - Real-time overzicht van uren en omzet
- **Projecten** - Beheer projecten met budgets en uurtarieven
- **Urenstaten** - Genereer wekelijkse/maandelijkse overzichten
- **Export** - CSV export voor boekhouding en facturatie
- **Settings** - Configureer standaard tarieven en bedrijfsgegevens

### 📱 UX Features
- Volledig responsive (mobiel, tablet, desktop)
- Nederlandse interface
- Print-vriendelijke urenstaten
- Real-time statistieken en grafieken
- Kleurgecodeerde projecten
- Budget warnings

### 🎨 Design
- Moderne UI met shadcn/ui componenten
- Tailwind CSS voor styling
- Recharts voor data visualisatie
- Clean, professional look

## 🚀 Quick Start

### Vereisten
- Node.js 18+ 
- npm of yarn

### Installatie

```bash
# Clone de repository
git clone <repository-url>
cd zzp-uren-app

# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📁 Project Structuur

```
zzp-uren-app/
├── app/                      # Next.js App Router
│   ├── dashboard/           # Dashboard met stats en charts
│   ├── track/               # Timer en tijd registratie
│   ├── projects/            # Projectenbeheer
│   │   └── [id]/           # Project detail pagina
│   ├── timesheets/          # Urenstaten overzicht
│   ├── settings/            # Instellingen
│   └── page.tsx             # Landing page
├── components/
│   ├── navbar.tsx           # Hoofdnavigatie
│   └── ui/                  # shadcn/ui componenten
├── lib/
│   ├── mock-data.ts         # Demo data (5 projecten, 3 klanten, ~30 entries)
│   └── utils.ts             # Utility functies
└── public/                  # Statische assets
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Charts**: Recharts
- **Date handling**: date-fns
- **Icons**: Lucide React

## 📊 Mock Data

De app bevat realistische mock data voor demo doeleinden:
- **5 projecten** met verschillende klanten, tarieven en budgetten
- **3 klanten** (TechStart BV, Webwinkel Amsterdam, Marketing Bureau Zuid)
- **~30 tijdregistraties** over de afgelopen 2 weken
- **2 urenstaten** (vorige week goedgekeurd, deze week concept)

## 🔧 Configuratie

### Environment Variables
Maak een `.env.local` bestand aan voor productie:

```env
# Database (voor productie)
DATABASE_URL=your_database_url

# Authentication (voor productie)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here
```

*Let op: De MVP gebruikt mock data, geen database vereist voor development.*

## 📝 Features Overview

### Landing Page (/)
- Hero sectie met value proposition
- Pain point highlight voor ZZP'ers
- Feature showcase
- Pricing (Gratis vs Pro €5/maand)
- Waitlist email capture
- FAQ sectie
- Footer met links

### Dashboard (/dashboard)
- Week/maand statistieken (uren + omzet)
- Uren per project bar chart
- Uren per dag grafiek
- Recente registraties
- Quick start timer button

### Timer & Tracking (/track)
- Live timer met start/stop
- Project selectie met client info
- Beschrijving veld
- Handmatige tijd invoer (datum, start, eind)
- Vandaag's totaal overzicht
- Vandaag's registraties lijst

### Projecten (/projects)
- Project grid met status cards
- Budget progress bars
- Waarschuwingen (over budget, bijna vol)
- Statistieken per project
- Nieuw project dialog
- Project detail pagina met alle entries

### Urenstaten (/timesheets)
- Periode selectie (week/maand)
- Groeperen per project of klant
- Status (Concept, Goedgekeurd, Gefactureerd)
- CSV export functie
- Print-vriendelijke layout
- Totaal overzicht met bedragen

### Instellingen (/settings)
- Standaard uurtarief configuratie
- Werkuren per dag instelling
- Bedrijfsgegevens (KVK, BTW, adres)
- Account informatie
- Notificatie voorkeuren
- Wachtwoord wijzigen
- Data export

## 🎯 Roadmap / Volgende Stappen

Voor een productie-ready versie:

### Must Have
- [ ] Database integratie (Prisma + PostgreSQL)
- [ ] Authentication (NextAuth.js)
- [ ] API routes voor CRUD operaties
- [ ] Persistent timer state
- [ ] Echte email functionaliteit (waitlist)

### Nice to Have
- [ ] Multi-user support
- [ ] Invoice generatie integratie
- [ ] Automatische backups
- [ ] Mobile app (React Native)
- [ ] Time tracking reminders
- [ ] Browser extensie (tracking vanaf elke site)
- [ ] Calendar integratie
- [ ] Slack/Teams notificaties

### Integraties
- [ ] Factuur app koppeling
- [ ] Mollie payment voor Pro subscriptions
- [ ] Boekhoud software (Exact, Moneybird)
- [ ] Google Calendar sync

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Installeer Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Andere platforms
De app is een standaard Next.js applicatie en kan op elk platform draaien dat Node.js ondersteunt (Netlify, Railway, DigitalOcean, etc.)

## 🤝 Development

### Nuttige Commands
```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

### Code Style
- TypeScript strict mode
- ESLint + Prettier
- Component-first architectuur
- Tailwind utility classes
- shadcn/ui patterns

## 📄 License

MIT License - vrij te gebruiken voor commerciële projecten.

## 💡 Tips voor ZZP'ers

1. **Zet de timer direct aan** - Vergeet niet te starten zodra je begint
2. **Voeg beschrijvingen toe** - Helpt later bij facturatie
3. **Check je dashboard wekelijks** - Blijf op de hoogte van je omzet
4. **Stel budget alerts in** - Voorkom dat je over je projectbudget gaat
5. **Export regelmatig** - Backup je data voor je boekhouding

## 🐛 Bug Reports & Feature Requests

Vind je een bug of heb je een feature idee? Open een issue!

## 👨‍💻 Ontwikkeld voor

Nederlandse ZZP'ers die geen uren meer willen missen en hun administratie simpel willen houden.

---

**Veel succes met je urenregistratie! 🎉**

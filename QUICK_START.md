# 🚀 Quick Start Guide

## Start Development Server

```bash
cd /Users/leroysteding-mini/.openclaw/agents/orchestrator/workspace/zzp-uren-app
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Page Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with pricing & waitlist |
| `/dashboard` | Overview with charts and stats |
| `/track` | Start timer or manual entry |
| `/projects` | Manage projects and budgets |
| `/projects/[id]` | Project detail with time entries |
| `/timesheets` | Generate & export timesheets |
| `/settings` | Configure rates & company info |

---

## Test the App

1. **Landing Page** - Check out the hero, pricing, and FAQ
2. **Dashboard** - See mock data with charts (recharts)
3. **Timer** - Start/stop timer, select project
4. **Projects** - View 5 demo projects with budget tracking
5. **Timesheets** - Export CSV, group by project/client
6. **Settings** - Update rates and company details

---

## Mock Data Included

- ✅ 5 Projects (Website, E-commerce, SEO, API, Content)
- ✅ 3 Clients (TechStart, Webwinkel, Marketing Bureau)
- ✅ ~30 Time Entries (last 2 weeks)
- ✅ 2 Timesheets (approved & concept)

**All data in**: `lib/mock-data.ts`

---

## Key Features to Demo

### Timer & Tracking
```typescript
1. Go to /track
2. Click "Start" - see live timer
3. Select a project
4. Add description
5. Click "Stop" - time saved
```

### Dashboard Charts
```typescript
1. Go to /dashboard
2. See "This Week" hours
3. View bar chart (hours per project)
4. Check daily hours chart
5. Recent entries list
```

### Export Timesheet
```typescript
1. Go to /timesheets
2. Select period (this week/month)
3. Click "CSV" button
4. File downloads automatically
```

### Project Budget Warning
```typescript
1. Go to /projects
2. Look for red "Over budget" badge
3. Click project card
4. See progress bar and remaining hours
```

---

## Build for Production

```bash
npm run build
npm start
```

**Build output**: `.next/` folder
**Verified**: ✅ All routes build successfully

---

## Customization

### Change Colors
Edit `tailwind.config.ts` and `app/globals.css`

### Add Real Data
Replace `lib/mock-data.ts` with API calls or database queries

### Add Auth
Install NextAuth.js: `npm install next-auth`

---

## Tech Stack Recap

- **Next.js 14** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Components
- **Recharts** - Charts
- **date-fns** - Dates

---

## Need Help?

Read: `README.md` for detailed docs
Check: `PROJECT_SUMMARY.md` for overview
Browse: `lib/mock-data.ts` to understand data structure

---

**Happy coding! 🎉**

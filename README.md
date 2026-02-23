# Community Events App

Een Pokemon GO-achtige app voor jongeren om samen naar evenementen te gaan en een community te vormen. Jongeren kunnen op een kaart zien waar activiteiten plaatsvinden (zoals voetbal, basketbal, skaten) en zich aanmelden om mee te doen.

## Features

- 🗺️ Interactieve kaart met event locaties
- 📍 Custom markers met pulserende animaties per event type
- 📋 Overzicht van alle aankomende events
- 👤 Persoonlijk profiel met achievements en statistieken
- 🎯 Gamification elementen (levels, punten, achievements)
- 📱 Responsive design voor mobiel en desktop

## Tech Stack

### Frontend
- React 18
- Vite
- React Router v6
- Leaflet + React-Leaflet (voor kaarten)
- Axios (API calls)
- TanStack Query (data fetching & caching)

### Backend
- C# (.NET) - door teamgenoot

## Project Structuur

```
frontend/
├── src/
│   ├── components/      # Herbruikbare componenten
│   │   ├── Map/
│   │   ├── EventCard/
│   │   ├── LocationMarker/
│   │   └── Navigation/
│   ├── pages/          # Pagina componenten
│   │   ├── MapView.jsx
│   │   ├── EventsList.jsx
│   │   └── Profile.jsx
│   ├── services/       # API calls en backend communicatie
│   │   └── api.js
│   ├── hooks/          # Custom React hooks
│   ├── context/        # React context providers
│   ├── utils/          # Utility functies
│   └── assets/         # Afbeeldingen, icons, etc.
└── ...
```

## Installation

### Frontend Setup

1. Navigate naar de frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` naar `.env` en pas de backend URL aan:
```bash
cp .env.example .env
```

4. Start de development server:
```bash
npm run dev
```

De app draait nu op `http://localhost:5173`

## Environment Variables

Maak een `.env` bestand in de `frontend` folder met:

```
VITE_API_URL=http://localhost:5000/api
VITE_DEFAULT_LAT=51.8917
VITE_DEFAULT_LNG=4.4892
VITE_DEFAULT_ZOOM=13
```

**Locatie**: Standaard ingesteld op Rotterdam Zuid voor demo doeleinden.

## API Endpoints

De frontend verwacht de volgende endpoints van de backend:

### Events
- `GET /api/events` - Alle events ophalen
- `GET /api/events/:id` - Specifiek event ophalen
- `POST /api/events` - Nieuw event aanmaken
- `POST /api/events/:id/join` - Aanmelden voor event
- `POST /api/events/:id/leave` - Afmelden voor event

### Locations
- `GET /api/locations` - Alle locaties ophalen
- `GET /api/locations/:id` - Specifieke locatie ophalen
- `GET /api/locations/nearby?lat=X&lng=Y&radius=Z` - Locaties in de buurt

### User
- `GET /api/user/profile` - Gebruikersprofiel ophalen
- `PUT /api/user/profile` - Profiel updaten
- `GET /api/user/achievements` - Achievements ophalen
- `GET /api/user/stats` - Statistieken ophalen

### Auth
- `POST /api/auth/login` - Inloggen
- `POST /api/auth/register` - Registreren
- `POST /api/auth/logout` - Uitloggen

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm run preview` - Preview productie build
- `npm run lint` - Run ESLint

## Roadmap

- [ ] Authentication implementeren
- [ ] Real-time updates voor events
- [ ] Push notificaties
- [ ] Foto's uploaden bij events
- [ ] Chat functionaliteit
- [ ] Vrienden systeem
- [ ] Leaderboards
- [ ] Custom event types toevoegen

## Team

- Frontend: Damian
- Backend: [Teamgenoot naam]
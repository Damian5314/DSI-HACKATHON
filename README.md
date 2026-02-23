# DSI HACKATHON - Community Events App

Een Pokemon GO-achtige app voor jongeren om lokale evenementen te vinden en aan deel te nemen. De app gebruikt een interactieve kaart om "gyms" (event locaties) te tonen in Rotterdam Zuid waar gebruikers zich kunnen aanmelden voor activiteiten zoals voetbal, basketbal en skaten.

## Tech Stack

### Frontend
- React 18 met Vite
- React Router v6 voor navigatie
- Leaflet + React-Leaflet voor interactieve kaarten
- Axios voor API communicatie
- TanStack Query voor data fetching
- Custom CSS voor styling

### Backend
- C# .NET (door teamgenoot ontwikkeld)

## Features

- **Interactieve Kaart**: Leaflet kaart met custom markers voor verschillende event types
- **Event Overzicht**: Grid layout van alle beschikbare events
- **Gebruikersprofiel**: Gamification met levels, punten en achievements
- **Rotterdam Zuid Focus**: Locaties in Afrikaanderplein, Zuiderpark, Feyenoord, Charlois
- **Pulserende Markers**: CSS animaties voor visueel aantrekkelijke event markers

## Project Structuur

```
frontend/
├── src/
│   ├── components/
│   │   ├── EventCard/        # Herbruikbare event card component
│   │   └── Navigation/        # Top navigatie bar
│   ├── pages/
│   │   ├── MapView.jsx        # Hoofdpagina met Leaflet kaart
│   │   ├── EventsList.jsx     # Lijst van alle events
│   │   └── Profile.jsx        # Gebruikersprofiel met stats
│   ├── services/
│   │   └── api.js             # Axios API client configuratie
│   ├── hooks/
│   │   └── useGeolocation.js  # Custom hook voor locatie
│   ├── utils/
│   │   ├── constants.js       # Event types, achievements, levels
│   │   └── distance.js        # Haversine formule voor afstand
│   ├── App.jsx                # Main app met routing
│   └── main.jsx               # Entry point
└── package.json
```

## Installatie

### Frontend

```bash
cd frontend
npm install
npm run dev
```

De app draait op [http://localhost:5173](http://localhost:5173)

### Environment Variables

Maak een `.env` bestand aan in de frontend folder:

```env
VITE_API_URL=http://localhost:5000/api
VITE_DEFAULT_LAT=51.8917
VITE_DEFAULT_LNG=4.4892
VITE_DEFAULT_ZOOM=13
```

## API Endpoints

De frontend verwacht de volgende endpoints van de backend:

### Events
- `GET /api/events` - Haal alle events op
- `GET /api/events/:id` - Haal specifiek event op
- `POST /api/events` - Maak nieuw event
- `POST /api/events/:id/join` - Meld aan voor event
- `POST /api/events/:id/leave` - Meld af voor event

### Locations
- `GET /api/locations` - Haal alle locaties op
- `GET /api/locations/nearby?lat=X&lng=Y&radius=Z` - Locaties binnen radius

### User
- `GET /api/user/profile` - Gebruikersprofiel
- `PUT /api/user/profile` - Update profiel
- `GET /api/user/achievements` - Gebruikers achievements
- `GET /api/user/stats` - Gebruikersstatistieken

### Auth
- `POST /api/auth/login` - Inloggen
- `POST /api/auth/register` - Registreren
- `POST /api/auth/logout` - Uitloggen

## Event Types

De app ondersteunt verschillende event types met unieke kleuren en emoji's:

- **Voetbal** (⚽) - Groen (#4CAF50)
- **Basketbal** (🏀) - Oranje (#FF9800)
- **Skaten** (🛹) - Paars (#9C27B0)

## Gamification Systeem

### Levels
Gebruikers kunnen levels verdienen door punten te verzamelen:
- Level 1: 0 punten
- Level 2: 300 punten
- Level 3: 600 punten
- Level 4: 1000 punten
- Level 5: 1500 punten
- En verder...

### Achievements
- **Eerste Event** (🏆) - 100 punten
- **Voetbal Fan** (⚽) - 250 punten - 5 voetbal events
- **Social Butterfly** (🎯) - 300 punten - 10 nieuwe mensen ontmoet
- **Event Master** (🌟) - 500 punten - 20 events bijgewoond

## Rotterdam Zuid Locaties

De app focust op de volgende wijken in Rotterdam Zuid:
- Afrikaanderplein (51.8917, 4.4892)
- Zuiderpark (51.8850, 4.4980)
- Feyenoord (51.8950, 4.5050)
- Charlois (51.8800, 4.4750)

## Development Notes

- Gebruikt Leaflet (geen MapLibre) voor kaart functionaliteit
- Custom divIcon markers met HTML/CSS voor visuele flexibiliteit
- CSS keyframe animaties voor pulserende marker rings
- Mock data voor demonstratie doeleinden
- Alle tekst kleuren zijn #333 voor leesbaarheid op lichte achtergronden
- Token-based authenticatie met localStorage

## Licentie

Dit project is ontwikkeld voor de DSI Hackathon.

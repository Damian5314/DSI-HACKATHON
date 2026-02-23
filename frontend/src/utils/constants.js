// Event types met emoji icons
export const EVENT_TYPES = {
  VOETBAL: { name: 'Voetbal', icon: '⚽', color: '#4CAF50' },
  BASKETBAL: { name: 'Basketbal', icon: '🏀', color: '#FF9800' },
  SKATEN: { name: 'Skaten', icon: '🛹', color: '#9C27B0' },
  HARDLOPEN: { name: 'Hardlopen', icon: '🏃', color: '#2196F3' },
  FITNESS: { name: 'Fitness', icon: '💪', color: '#F44336' },
  TENNIS: { name: 'Tennis', icon: '🎾', color: '#FFEB3B' },
  GAMING: { name: 'Gaming', icon: '🎮', color: '#E91E63' },
  OVERIG: { name: 'Overig', icon: '🎯', color: '#607D8B' },
};

// Achievement types
export const ACHIEVEMENTS = {
  FIRST_EVENT: {
    id: 'first_event',
    name: 'Eerste Event',
    description: 'Woonde je eerste event bij',
    icon: '🏆',
    points: 100,
  },
  TEAM_PLAYER: {
    id: 'team_player',
    name: 'Team Player',
    description: 'Woonde 5 voetbal events bij',
    icon: '⚽',
    points: 250,
  },
  SOCIAL_BUTTERFLY: {
    id: 'social_butterfly',
    name: 'Social Butterfly',
    description: 'Maakte contact met 10+ mensen',
    icon: '🦋',
    points: 300,
  },
  DEDICATED: {
    id: 'dedicated',
    name: 'Dedicated',
    description: 'Woonde 20 events bij',
    icon: '🎯',
    points: 500,
  },
  ORGANIZER: {
    id: 'organizer',
    name: 'Organisator',
    description: 'Organiseerde je eerste event',
    icon: '📋',
    points: 200,
  },
};

// Level thresholds
export const LEVEL_THRESHOLDS = [
  { level: 1, minPoints: 0 },
  { level: 2, minPoints: 100 },
  { level: 3, minPoints: 250 },
  { level: 4, minPoints: 500 },
  { level: 5, minPoints: 850 },
  { level: 6, minPoints: 1300 },
  { level: 7, minPoints: 2000 },
  { level: 8, minPoints: 3000 },
  { level: 9, minPoints: 4500 },
  { level: 10, minPoints: 6500 },
];

// Helper function om level te bepalen op basis van punten
export function getLevelFromPoints(points) {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (points >= LEVEL_THRESHOLDS[i].minPoints) {
      return LEVEL_THRESHOLDS[i].level;
    }
  }
  return 1;
}

// Helper function om punten tot volgende level te krijgen
export function getPointsToNextLevel(currentPoints) {
  const currentLevel = getLevelFromPoints(currentPoints);
  const nextLevel = LEVEL_THRESHOLDS.find((l) => l.level === currentLevel + 1);

  if (!nextLevel) {
    return 0; // Max level bereikt
  }

  return nextLevel.minPoints - currentPoints;
}

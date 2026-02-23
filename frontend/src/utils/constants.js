export const EVENT_TYPES = {
  VOETBAL: {
    name: 'Voetbal',
    color: '#4CAF50',
    emoji: '⚽',
  },
  BASKETBAL: {
    name: 'Basketbal',
    color: '#FF9800',
    emoji: '🏀',
  },
  SKATEN: {
    name: 'Skaten',
    color: '#9C27B0',
    emoji: '🛹',
  },
};

export const ACHIEVEMENTS = [
  {
    id: 'first_event',
    name: 'Eerste Event',
    description: 'Bijgewoond aan je eerste event',
    icon: '🏆',
    points: 100,
  },
  {
    id: 'football_fan',
    name: 'Voetbal Fan',
    description: '5 voetbal events bijgewoond',
    icon: '⚽',
    points: 250,
  },
  {
    id: 'social_butterfly',
    name: 'Social Butterfly',
    description: '10 nieuwe mensen ontmoet',
    icon: '🎯',
    points: 300,
  },
  {
    id: 'event_master',
    name: 'Event Master',
    description: '20 events bijgewoond',
    icon: '🌟',
    points: 500,
  },
];

export const LEVEL_THRESHOLDS = [
  0,    // Level 1
  300,  // Level 2
  600,  // Level 3
  1000, // Level 4
  1500, // Level 5
  2100, // Level 6
  2800, // Level 7
  3600, // Level 8
  4500, // Level 9
  5500, // Level 10
];

export const calculateLevel = (points) => {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (points >= LEVEL_THRESHOLDS[i]) {
      return i + 1;
    }
  }
  return 1;
};

export const getPointsForNextLevel = (currentLevel) => {
  if (currentLevel >= LEVEL_THRESHOLDS.length) {
    return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  }
  return LEVEL_THRESHOLDS[currentLevel];
};

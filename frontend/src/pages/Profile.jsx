import './Profile.css';

const mockUser = {
  id: 1,
  name: 'Damian',
  level: 5,
  points: 1250,
  achievements: [
    { id: 1, name: 'Eerste Event', icon: '🏆', description: 'Bijgewoond aan je eerste event' },
    { id: 2, name: 'Voetbal Fan', icon: '⚽', description: '5 voetbal events bijgewoond' },
    { id: 3, name: 'Social Butterfly', icon: '🎯', description: '10 nieuwe mensen ontmoet' },
  ],
};

function Profile() {
  const getProgressToNextLevel = () => {
    const pointsForNextLevel = mockUser.level * 300;
    const currentLevelPoints = mockUser.points % 300;
    return (currentLevelPoints / 300) * 100;
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            {mockUser.name.charAt(0).toUpperCase()}
          </div>
          <h2 style={{ margin: '0 0 8px 0', color: '#333' }}>{mockUser.name}</h2>
          <div className="level-badge">Level {mockUser.level}</div>
          <p className="points" style={{ color: '#333' }}>{mockUser.points} punten</p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${getProgressToNextLevel()}%` }}
            />
          </div>
        </div>

        <div className="profile-section">
          <h1 style={{ color: '#333' }}>Mijn Profiel</h1>
          <h3 style={{ color: '#333' }}>Achievements</h3>
          <div className="achievements-grid">
            {mockUser.achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h4 style={{ color: '#333' }}>{achievement.name}</h4>
                <p style={{ color: '#666' }}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3 style={{ color: '#333' }}>Statistieken</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#333' }}>12</div>
              <div className="stat-label" style={{ color: '#666' }}>Events Bijgewoond</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#333' }}>6</div>
              <div className="stat-label" style={{ color: '#666' }}>Voetbal Events</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#333' }}>25</div>
              <div className="stat-label" style={{ color: '#666' }}>Mensen Ontmoet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

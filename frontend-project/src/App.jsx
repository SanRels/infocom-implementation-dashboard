import './App.css'

const teamMembers = [
  { name: 'Умар Тоев', role: 'Team Lead / DevOps', emoji: '👨‍💻' },
  { name: 'Юсуп Магомадов', role: 'Backend Developer', emoji: '👩‍💻' },
  { name: 'Дмитрий Козлов', role: 'Frontend Developer', emoji: '⚙️' },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">
          <span className="logo">⚡</span>
          Team Project 2026
        </h1>
        <p className="subtitle">Современный веб-проект команды разработчиков</p>
      </header>

      <main className="main">
        <section className="section">
          <h2 className="section-title">👥 Участники команды</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="card" key={index}>
                <div className="avatar">{member.emoji}</div>
                <h3 className="name">{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Team Project · React + Vite + Docker + Nginx</p>
      </footer>
    </div>
  )
}

export default App

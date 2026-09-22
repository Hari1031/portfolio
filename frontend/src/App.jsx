import { useEffect, useState } from 'react';

const defaultProfile = {
  name: 'HARIPRASATH G',
  title: 'Junior Java Developer',
  summary:
    'I am a passionate Java developer with strong skills in backend and frontend technologies, focused on building efficient, secure, and user-friendly web applications.',
  email: 'hariprasathh808@gmail.com',
  phone: '902583100',
  location: 'India',
  availability: 'Open to junior Java developer roles',
  education: 'Bachelor of Computer Application',
  githubUrl: 'https://github.com/Hari1031',
  resumeUrl: '/hariprasath-resume.pdf',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Spring', 'MySQL', 'MongoDB'],
  projects: [
    {
      name: 'Online Book Store',
      description: 'Developed a book store application using Java, JDBC, and MySQL for managing products, users, and order processing.',
      stack: ['Java', 'JDBC', 'MySQL'],
    },
    {
      name: 'Bank Management System',
      description: 'Designed a banking system using Java, HTML, CSS, JavaScript, and MySQL for account operations and customer management.',
      stack: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
  ],
  experience: [
    {
      role: 'Java Developer',
      company: 'Self-Learning / Project Work',
      period: '2024 - Present',
      details: 'Built full-stack Java projects with backend logic, database integration, and responsive web interfaces.',
    },
  ],
  photoUrl:
    'https://1drv.ms/i/c/455c9abbd44d862a/IQAk3gYR0U4eQ7t3OcNSCfULAeIhEXTtaY1M6KPpPPPbT4k?e=OhPpfu',
};

function App() {
  const [profile, setProfile] = useState(defaultProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/profile');
        if (!response.ok) {
          throw new Error('Profile API unavailable');
        }

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        setProfile(defaultProfile);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">AK</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Hello, I am</p>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p className="summary">{profile.summary}</p>
            <div className="actions">
              <a className="primary-btn" href="#projects">View Projects</a>
              <a className="secondary-btn" href={`mailto:${profile.email}`}>Hire Me</a>
              <a className="secondary-btn" href={profile.githubUrl || 'https://github.com/Hari1031'} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <ul className="mini-details">
              <li>{profile.location}</li>
              <li>{profile.availability}</li>
            </ul>
          </div>

          <div className="hero-card">
            <div className="avatar-ring">
              <div className="avatar">AK</div>
            </div>
            <div className="stat-grid">
              <div>
                <strong>2+</strong>
                <span>Years learning</span>
              </div>
              <div>
                <strong>6</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Core skills</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Driven</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h3>Developer with a passion for solving real-world problems</h3>
          </div>
          <p className="section-text">
            I am a junior Java developer focused on building clean, scalable, and maintainable applications.
            My strengths include backend development with Java and Spring Boot, database design, API integration,
            and creating responsive front-end experiences in React.
          </p>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h3>Tools I work with</h3>
          </div>
          <div className="skill-grid">
            {profile.skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h3>Recent work I am proud of</h3>
          </div>
          <div className="project-grid">
            {profile.projects.map((project) => (
              <article key={project.name} className="project-card">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="stack-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h3>My journey so far</h3>
          </div>
          <div className="timeline">
            {profile.experience.map((job) => (
              <div key={`${job.role}-${job.company}`} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4>{job.role}</h4>
                  <p className="company-name">{job.company}</p>
                  <span>{job.period}</span>
                  <p>{job.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <h3>Let’s build something meaningful.</h3>
        <div className="contact-list">
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.githubUrl || 'https://github.com/Hari1031'} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p>{profile.location}</p>
      </footer>

      {loading && <div className="loading-banner">Loading profile...</div>}
    </div>
  );
}

export default App;

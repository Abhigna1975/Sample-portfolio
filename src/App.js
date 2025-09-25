import React, { useState, useEffect } from 'react';
import { Download, User, Trophy, Target, CheckCircle, ArrowRight, BookOpen, Linkedin, Mail, Phone, MapPin, Calendar, TrendingUp, Users, Award, Globe, Code, Database, Server, Terminal, Github, ExternalLink, X, Menu } from 'lucide-react';

const SoftwareEngineerPortfolio = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: '1.6',
      color: '#1a1a1a'
    },
    nav: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      background: scrollY > 100 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrollY > 100 ? 'blur(20px)' : 'none',
      borderBottom: scrollY > 100 ? '1px solid #e5e5e5' : 'none',
      padding: '20px 0',
      zIndex: '1000',
      transition: 'all 0.3s ease'
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1a1a1a'
    },
    navLinks: {
      display: 'flex',
      gap: '40px',
      listStyle: 'none',
      margin: '0',
      padding: '0'
    },
    navLink: {
      color: '#666',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    mobileMenuButton: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: '#1a1a1a'
    },
    heroSection: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: '80px',
      alignItems: 'center'
    },
    heroText: {
      color: '#1a1a1a'
    },
    eyebrow: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#3b82f6',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginBottom: '20px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      lineHeight: '1.1',
      marginBottom: '30px',
      color: '#1a1a1a'
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      color: '#64748b',
      marginBottom: '40px',
      maxWidth: '500px'
    },
    heroStats: {
      display: 'flex',
      gap: '40px',
      marginBottom: '40px'
    },
    stat: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#3b82f6',
      display: 'block'
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#64748b',
      fontWeight: '500'
    },
    heroButtons: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    },
    primaryButton: {
      background: '#3b82f6',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
      textDecoration: 'none'
    },
    secondaryButton: {
      background: 'transparent',
      color: '#374151',
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '1rem',
      border: '2px solid #e5e7eb',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    heroImage: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    },
    profileImageContainer: {
      width: '350px',
      height: '450px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
    },
    floatingCard: {
      position: 'absolute',
      background: 'white',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f1f5f9'
    },
    floatingCard1: {
      top: '20px',
      right: '-20px',
      width: '160px'
    },
    floatingCard2: {
      bottom: '40px',
      left: '-20px',
      width: '140px'
    },
    cardIcon: {
      width: '40px',
      height: '40px',
      background: '#3b82f6',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '12px'
    },
    cardTitle: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '4px'
    },
    cardValue: {
      fontSize: '0.75rem',
      color: '#64748b'
    },
    section: {
      padding: '120px 0'
    },
    sectionContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '80px'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '20px'
    },
    sectionDescription: {
      fontSize: '1.2rem',
      color: '#64748b',
      maxWidth: '600px',
      margin: '0 auto'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px'
    },
    skillCategory: {
      background: 'white',
      borderRadius: '20px',
      padding: '30px',
      border: '1px solid #f1f5f9',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
    },
    skillCategoryTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    skillList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px'
    },
    skillTag: {
      background: '#f1f5f9',
      color: '#3b82f6',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px'
    },
    projectCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '30px',
      border: '1px solid #f1f5f9',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    projectTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '8px'
    },
    projectDescription: {
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '20px'
    },
    projectTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '20px'
    },
    techTag: {
      background: '#3b82f6',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    projectLinks: {
      display: 'flex',
      gap: '12px'
    },
    projectLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: '#3b82f6',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    aboutSection: {
      background: '#f8fafc'
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'center'
    },
    aboutText: {
      fontSize: '1.1rem',
      color: '#374151',
      marginBottom: '30px',
      lineHeight: '1.7'
    },
    experienceCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '30px',
      border: '1px solid #e5e7eb',
      marginBottom: '20px'
    },
    experienceHeader: {
      marginBottom: '16px'
    },
    experienceTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#1a1a1a'
    },
    experienceCompany: {
      fontSize: '1rem',
      color: '#3b82f6',
      fontWeight: '500'
    },
    experienceDate: {
      fontSize: '0.9rem',
      color: '#64748b'
    },
    experienceDescription: {
      color: '#374151',
      lineHeight: '1.6'
    },
    aboutVisualization: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      border: '1px solid #f1f5f9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px'
    },
    achievementGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px'
    },
    achievementCard: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: 'white',
      padding: '30px',
      borderRadius: '16px',
      textAlign: 'center'
    },
    achievementIcon: {
      width: '50px',
      height: '50px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px'
    },
    achievementTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '8px'
    },
    achievementDesc: {
      fontSize: '0.9rem',
      opacity: '0.9'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '20px'
    },
    ctaDescription: {
      fontSize: '1.2rem',
      color: '#cbd5e1',
      maxWidth: '600px',
      margin: '0 auto 40px'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      marginTop: '60px'
    },
    contactCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '30px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    contactIcon: {
      width: '50px',
      height: '50px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px'
    },
    contactTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '8px'
    },
    contactValue: {
      color: '#cbd5e1',
      fontSize: '0.95rem'
    },
    footer: {
      background: '#1a1a1a',
      color: 'white',
      padding: '60px 0 30px',
      textAlign: 'center'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px'
    },
    footerText: {
      color: '#9ca3af',
      fontSize: '0.9rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginBottom: '30px'
    },
    socialLink: {
      width: '50px',
      height: '50px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      zIndex: '2000'
    },
    modal: {
      background: 'white',
      borderRadius: '24px',
      padding: '50px',
      maxWidth: '500px',
      width: '100%',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      position: 'relative'
    },
    modalHeader: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    modalTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '10px'
    },
    modalDescription: {
      fontSize: '1rem',
      color: '#64748b'
    },
    modalButtons: {
      display: 'flex',
      gap: '15px',
      marginTop: '30px'
    },
    modalButton: {
      flex: '1',
      padding: '16px 24px',
      borderRadius: '12px',
      border: 'none',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    modalButtonSecondary: {
      background: '#f1f5f9',
      color: '#374151'
    },
    modalButtonPrimary: {
      background: '#3b82f6',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: '#64748b',
      padding: '8px'
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Alex Johnson</div>
          <ul style={styles.navLinks}>
            <li><a onClick={() => scrollToSection('hero')} style={styles.navLink}>Home</a></li>
            <li><a onClick={() => scrollToSection('skills')} style={styles.navLink}>Skills</a></li>
            <li><a onClick={() => scrollToSection('projects')} style={styles.navLink}>Projects</a></li>
            <li><a onClick={() => scrollToSection('experience')} style={styles.navLink}>Experience</a></li>
            <li><a onClick={() => scrollToSection('contact')} style={styles.navLink}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <div style={styles.eyebrow}>Entry-Level Software Engineer</div>
            <h1 style={styles.heroTitle}>
              Building Tomorrow's
              <br />
              <span style={{color: '#3b82f6'}}>Digital Solutions</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Passionate software engineer with strong foundation in full-stack development and expertise in modern technologies. Ready to contribute to innovative projects and grow with your team.
            </p>
            
            <div style={styles.heroStats}>
              <div style={styles.stat}>
                <span style={styles.statNumber}>5+</span>
                <span style={styles.statLabel}>Projects</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>8</span>
                <span style={styles.statLabel}>Technologies</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>2+</span>
                <span style={styles.statLabel}>Years Learning</span>
              </div>
            </div>

            <div style={styles.heroButtons}>
  <button 
    style={styles.primaryButton}
    onClick={() => setShowContactModal(true)}
    onMouseEnter={(e) => {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)';
    }}
  >
    <Mail size={20} />
    Get In Touch
  </button>
  <a 
    href="/resume.pdf"
    download="Abhigna_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.secondaryButton}
    onMouseEnter={(e) => {
      e.target.style.borderColor = '#3b82f6';
      e.target.style.color = '#3b82f6';
    }}
    onMouseLeave={(e) => {
      e.target.style.borderColor = '#e5e7eb';
      e.target.style.color = '#374151';
    }}
  >
    <Download size={20} />
    Download Resume
  </a>
</div>
</div>

          <div style={styles.heroImage}>
          <div style={styles.profileImageContainer}>
          <img 
            src={`${process.env.PUBLIC_URL}/profile.png`}
            alt="Alex Johnson - Software Engineer"
            style={{
             width: '100%',
             height: '100%',
             objectFit: 'cover',
             borderRadius: '24px'
            }}
            />
            </div>

            
           
            
            <div style={{...styles.floatingCard, ...styles.floatingCard2}}>
              <div style={styles.cardIcon}>
                <Github size={20} color="white" />
              </div>
              <div style={styles.cardTitle}>GitHub</div>
              <div style={styles.cardValue}>Active Contributor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <div style={styles.sectionContent}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Technical Skills</h2>
            <p style={styles.sectionDescription}>
              Comprehensive technology stack with focus on modern development practices
            </p>
          </div>

          <div style={styles.skillsGrid}>
            <div style={styles.skillCategory}>
              <h3 style={styles.skillCategoryTitle}>
                <Code size={24} color="#3b82f6" />
                Programming Languages
              </h3>
              <div style={styles.skillList}>
                <span style={styles.skillTag}>JavaScript</span>
                <span style={styles.skillTag}>Python</span>
                <span style={styles.skillTag}>Java</span>
                <span style={styles.skillTag}>C++</span>
                <span style={styles.skillTag}>TypeScript</span>
                <span style={styles.skillTag}>SQL</span>
              </div>
            </div>

            <div style={styles.skillCategory}>
              <h3 style={styles.skillCategoryTitle}>
                <Globe size={24} color="#3b82f6" />
                Frontend & Frameworks
              </h3>
              <div style={styles.skillList}>
                <span style={styles.skillTag}>React</span>
                <span style={styles.skillTag}>Vue.js</span>
                <span style={styles.skillTag}>Angular</span>
                <span style={styles.skillTag}>HTML/CSS</span>
                <span style={styles.skillTag}>Bootstrap</span>
                <span style={styles.skillTag}>Tailwind CSS</span>
              </div>
            </div>

            <div style={styles.skillCategory}>
              <h3 style={styles.skillCategoryTitle}>
                <Server size={24} color="#3b82f6" />
                Backend & Database
              </h3>
              <div style={styles.skillList}>
                <span style={styles.skillTag}>Node.js</span>
                <span style={styles.skillTag}>Express.js</span>
                <span style={styles.skillTag}>Django</span>
                <span style={styles.skillTag}>PostgreSQL</span>
                <span style={styles.skillTag}>MongoDB</span>
                <span style={styles.skillTag}>REST APIs</span>
              </div>
            </div>

            <div style={styles.skillCategory}>
              <h3 style={styles.skillCategoryTitle}>
                <Terminal size={24} color="#3b82f6" />
                Tools & Technologies
              </h3>
              <div style={styles.skillList}>
                <span style={styles.skillTag}>Git</span>
                <span style={styles.skillTag}>Docker</span>
                <span style={styles.skillTag}>AWS</span>
                <span style={styles.skillTag}>Linux/Unix</span>
                <span style={styles.skillTag}>VS Code</span>
                <span style={styles.skillTag}>Agile/Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{...styles.section, background: '#f8fafc'}}>
        <div style={styles.sectionContent}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Featured Projects</h2>
            <p style={styles.sectionDescription}>
              A showcase of my technical abilities and problem-solving skills
            </p>
          </div>

          <div style={styles.projectsGrid}>
            <div 
              style={styles.projectCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.projectHeader}>
                <h3 style={styles.projectTitle}>Personal Finance Tracker</h3>
              </div>
              <p style={styles.projectDescription}>
                Full-stack personal finance management app with expense tracking, budget planning, data visualization, and financial insights. Features secure user authentication and data encryption.
              </p>
              <div style={styles.projectTech}>
                <span style={styles.techTag}>React</span>
                <span style={styles.techTag}>Firebase</span>
                <span style={styles.techTag}>Chart.js</span>
                <span style={styles.techTag}>Material-UI</span>
              </div>
              <div style={styles.projectLinks}>
                <a href="#" style={styles.projectLink}>
                  <Github size={16} />
                  Code
                </a>
                <a href="#" style={styles.projectLink}>
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>

            <div 
              style={styles.projectCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.projectHeader}>
                <h3 style={styles.projectTitle}>Social Media Clone</h3>
              </div>
              <p style={styles.projectDescription}>
                Instagram-inspired social media platform with image posting, real-time messaging, user profiles, follow system, and responsive design. Implements modern web development best practices.
              </p>
              <div style={styles.projectTech}>
                <span style={styles.techTag}>Angular</span>
                <span style={styles.techTag}>Spring Boot</span>
                <span style={styles.techTag}>MySQL</span>
                <span style={styles.techTag}>AWS S3</span>
              </div>
              <div style={styles.projectLinks}>
                <a href="#" style={styles.projectLink}>
                  <Github size={16} />
                  Code
                </a>
                <a href="#" style={styles.projectLink}>
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>

            <div 
              style={styles.projectCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.projectHeader}>
                <h3 style={styles.projectTitle}>Recipe Finder App</h3>
              </div>
              <p style={styles.projectDescription}>
                Mobile-responsive recipe discovery app with ingredient-based search, meal planning, nutritional information, and personal recipe collection. Integrates with multiple food APIs.
              </p>
              <div style={styles.projectTech}>
                <span style={styles.techTag}>Vue.js</span>
                <span style={styles.techTag}>Nuxt.js</span>
                <span style={styles.techTag}>Spoonacular API</span>
                <span style={styles.techTag}>Vuetify</span>
              </div>
              <div style={styles.projectLinks}>
                <a href="#" style={styles.projectLink}>
                  <Github size={16} />
                  Code
                </a>
                <a href="#" style={styles.projectLink}>
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>

            <div 
              style={styles.projectCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.projectHeader}>
                <h3 style={styles.projectTitle}>Task Management App</h3>
              </div>
              <p style={styles.projectDescription}>
                Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and responsive design for all devices.
              </p>
              <div style={styles.projectTech}>
                <span style={styles.techTag}>Vue.js</span>
                <span style={styles.techTag}>Express.js</span>
                <span style={styles.techTag}>Socket.io</span>
                <span style={styles.techTag}>PostgreSQL</span>
              </div>
              <div style={styles.projectLinks}>
                <a href="#" style={styles.projectLink}>
                  <Github size={16} />
                  Code
                </a>
                <a href="#" style={styles.projectLink}>
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <div style={styles.sectionContent}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Professional Experience</h2>
            <p style={styles.sectionDescription}>
              Building experience through internships, projects, and continuous learning
            </p>
          </div>

          <div style={styles.aboutGrid}>
            <div>
              <div style={styles.experienceCard}>
                <div style={styles.experienceHeader}>
                  <div style={styles.experienceTitle}>Software Engineering Intern</div>
                  <div style={styles.experienceCompany}>Tech Solutions Inc.</div>
                  <div style={styles.experienceDate}>June 2024 - August 2024</div>
                </div>
                <div style={styles.experienceDescription}>
                  • Developed and maintained web applications using React and Node.js<br/>
                  • Collaborated with senior developers on API integrations and database optimization<br/>
                  • Participated in agile development process and code reviews<br/>
                  • Improved application performance by 25% through code optimization<br/>
                  • Contributed to 3 major feature releases used by 10,000+ users
                </div>
              </div>

              <div style={styles.experienceCard}>
                <div style={styles.experienceHeader}>
                  <div style={styles.experienceTitle}>Freelance Web Developer</div>
                  <div style={styles.experienceCompany}>Various Clients</div>
                  <div style={styles.experienceDate}>January 2024 - Present</div>
                </div>
                <div style={styles.experienceDescription}>
                  • Built responsive websites for small businesses and startups<br/>
                  • Implemented modern design principles and SEO best practices<br/>
                  • Managed client relationships and project timelines<br/>
                  • Delivered 10+ successful projects with 100% client satisfaction<br/>
                  • Technologies used: React, WordPress, Shopify, HTML/CSS/JS
                </div>
              </div>

              <div style={styles.experienceCard}>
                <div style={styles.experienceHeader}>
                  <div style={styles.experienceTitle}>Teaching Assistant</div>
                  <div style={styles.experienceCompany}>University Computer Science Dept</div>
                  <div style={styles.experienceDate}>September 2023 - May 2024</div>
                </div>
                <div style={styles.experienceDescription}>
                  • Assisted in teaching programming fundamentals to 150+ students<br/>
                  • Conducted code review sessions and debugging workshops<br/>
                  • Developed supplementary learning materials and coding exercises<br/>
                  • Mentored students in data structures and algorithms<br/>
                  • Improved student pass rate by 15% through additional support sessions
                </div>
              </div>
            </div>
            
            <div>
              <div style={styles.aboutVisualization}>
                <div style={styles.achievementGrid}>
                  <div style={styles.achievementCard}>
                    <div style={styles.achievementIcon}>
                      <Trophy size={24} />
                    </div>
                    <div style={styles.achievementTitle}>Dean's List</div>
                    <div style={styles.achievementDesc}>3 Consecutive Semesters</div>
                  </div>
                  
                  <div style={styles.achievementCard}>
                    <div style={styles.achievementIcon}>
                      <Code size={24} />
                    </div>
                    <div style={styles.achievementTitle}>Hackathon Winner</div>
                    <div style={styles.achievementDesc}>Best Technical Innovation</div>
                  </div>
                  
                  <div style={styles.achievementCard}>
                    <div style={styles.achievementIcon}>
                      <Users size={24} />
                    </div>
                    <div style={styles.achievementTitle}>Open Source</div>
                    <div style={styles.achievementDesc}>4+ Contributions</div>
                  </div>
                  
                  <div style={styles.achievementCard}>
                    <div style={styles.achievementIcon}>
                      <BookOpen size={24} />
                    </div>
                    <div style={styles.achievementTitle}>CS Degree</div>
                    <div style={styles.achievementDesc}>GPA: 3.8/4.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.sectionContent}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>About Me</h2>
            <p style={styles.sectionDescription}>
              Passionate about creating efficient, scalable, and user-friendly solutions
            </p>
          </div>

          <div style={styles.aboutGrid}>
            <div>
              <p style={styles.aboutText}>
                I'm a passionate software engineer with a Computer Science degree and hands-on experience in full-stack development. My journey began with curiosity about how technology shapes our world, and has evolved into a deep commitment to creating meaningful digital solutions.
              </p>
              <p style={styles.aboutText}>
                During my studies and internships, I've gained expertise in modern web technologies, database design, and software engineering best practices. I thrive in collaborative environments and am always eager to learn new technologies and methodologies.
              </p>
              <p style={styles.aboutText}>
                When I'm not coding, you'll find me contributing to open-source projects, participating in hackathons, or exploring the latest developments in AI and machine learning. I believe in writing clean, maintainable code and creating user experiences that make a difference.
              </p>
              
              <div style={{marginTop: '30px'}}>
                <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', color: '#1a1a1a'}}>
                  Education
                </h3>
                <div style={styles.experienceCard}>
                  <div style={styles.experienceHeader}>
                    <div style={styles.experienceTitle}>Bachelor of Science in Computer Science</div>
                    <div style={styles.experienceCompany}>State University</div>
                    <div style={styles.experienceDate}>2021 - 2024</div>
                  </div>
                  <div style={styles.experienceDescription}>
                    • GPA: 3.8/4.0, Dean's List (3 semesters)<br/>
                    • Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development<br/>
                    • Senior Project: E-commerce platform with microservices architecture<br/>
                    • Activities: Computer Science Club, Hackathon Team Lead
                  </div>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid #f1f5f9',
                marginBottom: '30px'
              }}>
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px', color: '#1a1a1a'}}>
                  Quick Facts
                </h3>
                <div style={{display: 'grid', gap: '20px'}}>
                  <div style={{textAlign: 'left'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px'}}>
                      <MapPin size={20} color="#3b82f6" />
                      <span style={{fontWeight: '600'}}>Location:</span>
                    </div>
                    <span style={{color: '#64748b', marginLeft: '32px'}}>San Francisco, CA</span>
                  </div>
                  
                  <div style={{textAlign: 'left'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px'}}>
                      <Calendar size={20} color="#3b82f6" />
                      <span style={{fontWeight: '600'}}>Availability:</span>
                    </div>
                    <span style={{color: '#64748b', marginLeft: '32px'}}>Immediate</span>
                  </div>
                  
                  <div style={{textAlign: 'left'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px'}}>
                      <TrendingUp size={20} color="#3b82f6" />
                      <span style={{fontWeight: '600'}}>Experience:</span>
                    </div>
                    <span style={{color: '#64748b', marginLeft: '32px'}}>2+ Years</span>
                  </div>
                  
                  <div style={{textAlign: 'left'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px'}}>
                      <Target size={20} color="#3b82f6" />
                      <span style={{fontWeight: '600'}}>Focus:</span>
                    </div>
                    <span style={{color: '#64748b', marginLeft: '32px'}}>Full-Stack Development</span>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center'
              }}>
                <Award size={40} style={{margin: '0 auto 16px'}} />
                <h4 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px'}}>Ready to Contribute</h4>
                <p style={{fontSize: '0.9rem', opacity: '0.9'}}>Eager to bring fresh perspectives and modern technical skills to your team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.ctaSection}>
        <div style={styles.sectionContent}>
          <h2 style={styles.ctaTitle}>Let's Build Something Amazing Together</h2>
          <p style={styles.ctaDescription}>
            Ready to contribute to innovative projects and grow with a dynamic team. 
            Let's discuss how I can add value to your organization.
          </p>
          
          <div style={styles.heroButtons}>
  <button 
    style={{...styles.primaryButton, background: 'white', color: '#1e293b'}}
    onClick={() => setShowContactModal(true)}
    onMouseEnter={(e) => {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 8px 30px rgba(255, 255, 255, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.2)';
    }}
  >
    <Mail size={20} />
    Get In Touch
  </button>
  <a 
  href="https://abhigna1975.github.io/Sample-portfolio/resume.pdf"
  download="Abhigna_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{...styles.secondaryButton, borderColor: 'rgba(255, 255, 255, 0.3)', color: 'white'}}
  onMouseEnter={(e) => {
    e.target.style.borderColor = 'white';
    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
  }}
  onMouseLeave={(e) => {
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    e.target.style.background = 'transparent';
  }}
>
  <Download size={20} />
  Download Resume
</a>
</div>

          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <div style={styles.contactIcon}>
                <Mail size={24} />
              </div>
              <div style={styles.contactTitle}>Email</div>
              <div style={styles.contactValue}>alex.johnson@email.com</div>
            </div>
            
            <div style={styles.contactCard}>
              <div style={styles.contactIcon}>
                <Phone size={24} />
              </div>
              <div style={styles.contactTitle}>Phone</div>
              <div style={styles.contactValue}>+1 (555) 123-4567</div>
            </div>
            
            <div style={styles.contactCard}>
              <div style={styles.contactIcon}>
                <Linkedin size={24} />
              </div>
              <div style={styles.contactTitle}>LinkedIn</div>
              <div style={styles.contactValue}>linkedin.com/in/alexjohnson</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialLink}>
              <Github size={20} />
            </a>
            <a href="#" style={styles.socialLink}>
              <Linkedin size={20} />
            </a>
            <a href="#" style={styles.socialLink}>
              <Mail size={20} />
            </a>
            <a href="#" style={styles.socialLink}>
              <Globe size={20} />
            </a>
          </div>
          <p style={styles.footerText}>
            © 2024 Alex Johnson. Designed & Built with React. Open to opportunities.
          </p>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div style={styles.modalOverlay} onClick={() => setShowContactModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button 
              style={styles.closeButton}
              onClick={() => setShowContactModal(false)}
            >
              <X size={20} />
            </button>
            
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Let's Connect!</h3>
              <p style={styles.modalDescription}>
                I'm always excited to discuss new opportunities and collaborate on interesting projects.
              </p>
            </div>

            <div style={{marginBottom: '30px'}}>
              <div style={{marginBottom: '20px', padding: '20px', background: '#f8fafc', borderRadius: '12px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
                  <Mail size={20} color="#3b82f6" />
                  <strong>Email:</strong>
                </div>
                <p style={{margin: '0', marginLeft: '32px', color: '#64748b'}}>alex.johnson@email.com</p>
              </div>
              
              <div style={{marginBottom: '20px', padding: '20px', background: '#f8fafc', borderRadius: '12px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
                  <Phone size={20} color="#3b82f6" />
                  <strong>Phone:</strong>
                </div>
                <p style={{margin: '0', marginLeft: '32px', color: '#64748b'}}>+1 (555) 123-4567</p>
              </div>
              
              <div style={{padding: '20px', background: '#f8fafc', borderRadius: '12px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
                  <Linkedin size={20} color="#3b82f6" />
                  <strong>LinkedIn:</strong>
                </div>
                <p style={{margin: '0', marginLeft: '32px', color: '#64748b'}}>linkedin.com/in/alexjohnson</p>
              </div>
            </div>
            
            <div style={styles.modalButtons}>
              <button 
                style={{...styles.modalButton, ...styles.modalButtonSecondary}}
                onClick={() => setShowContactModal(false)}
              >
                Close
              </button>
              <a
                href="mailto:alex.johnson@email.com"
                style={{...styles.modalButton, ...styles.modalButtonPrimary, textDecoration: 'none'}}
              >
                <Mail size={18} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoftwareEngineerPortfolio;
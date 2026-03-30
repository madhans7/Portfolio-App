import './index.css'

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>

            <p className="about-description">
                I am a passionate Full Stack Developer with experience in building dynamic and responsive web applications. I specialize in creating seamless user experiences and efficient backend systems. I enjoy solving real-world problems and continuously improving my technical skills.
            </p>

            <div className="about-card">
                <h2>Skills</h2>
                <ul>
                    <li>Frontend: React, HTML, CSS, JavaScript</li>
                    <li>Backend: Node.js, Express.js</li>
                    <li>Database: SQL, MongoDB</li>
                    <li>Tools & Cloud: Git, AWS (Basics)</li>
                </ul>
            </div>

            <div className="about-card">
                <h2>Studies</h2>
                <ul>
                    <li>BSc in Cloud Computing and Big Data – Reva University</li>
                    <li>Full Stack Development – Nxtwave</li>
                </ul>
            </div>

            <div className="about-card">
                <h2>Marks</h2>
                <ul>
                    <li>CGPA: 7.23</li>
                    <li>Intermediate: 69%</li>
                    <li>SSLC: 67%</li>
                </ul>
            </div>
        </div>
    )
}

export default About
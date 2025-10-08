import React from 'react';

const Skills = () => (
  <section id="skills" className="skills container">
    <h3>Skills</h3>

    {/* Programming Languages */}
    <div className="skill-group programming">
      <h5>Programming Languages</h5>
      <div>
        <span className="skill-item">C</span>
        <span className="skill-item">C++</span>
        <span className="skill-item">C#</span>
        <span className="skill-item">Python</span>
        <span className="skill-item">Java</span>
        <span className="skill-item">R</span>
        <span className="skill-item">JavaScript</span>
        <span className="skill-item">PHP</span>
        <span className="skill-item">Go</span>
        <span className="skill-item">Rust</span>
        <span className="skill-item">Kotlin</span>
        <span className="skill-item">Swift</span>
      </div>
    </div>

    {/* Scripting & Markup */}
    <div className="skill-group scripting">
      <h5>Scripting & Markup</h5>
      <div>
        <span className="skill-item">HTML</span>
        <span className="skill-item">CSS</span>
        <span className="skill-item">SQL</span>
        <span className="skill-item">Bash</span>
        <span className="skill-item">TypeScript</span>
      </div>
    </div>

    {/* Frontend Frameworks */}
    <div className="skill-group frontend">
      <h5>Frontend Frameworks & Libraries</h5>
      <div>
        <span className="skill-item">React</span>
        <span className="skill-item">Next.js</span>
        <span className="skill-item">Vue.js</span>
        <span className="skill-item">Angular</span>
        <span className="skill-item">Tailwind CSS</span>
        <span className="skill-item">Bootstrap</span>
      </div>
    </div>

    {/* Backend & Databases */}
    <div className="skill-group backend">
      <h5>Backend & Databases</h5>
      <div>
        <span className="skill-item">Node.js</span>
        <span className="skill-item">Express</span>
        <span className="skill-item">Django</span>
        <span className="skill-item">Flask</span>
        <span className="skill-item">MongoDB</span>
        <span className="skill-item">MySQL</span>
        <span className="skill-item">PostgreSQL</span>
        <span className="skill-item">Firebase</span>
        <span className="skill-item">Redis</span>
      </div>
    </div>

    {/* AI / ML / Data Science */}
    <div className="skill-group ai">
      <h5>Data Science, AI & ML</h5>
      <div>
        <span className="skill-item">Machine Learning</span>
        <span className="skill-item">Deep Learning</span>
        <span className="skill-item">Artificial Intelligence</span>
        <span className="skill-item">Computer Graphics</span>
        <span className="skill-item">DSA</span>
        <span className="skill-item">NumPy</span>
        <span className="skill-item">Pandas</span>
        <span className="skill-item">Matplotlib</span>
        <span className="skill-item">Scikit-Learn</span>
        <span className="skill-item">TensorFlow</span>
        <span className="skill-item">PyTorch</span>
      </div>
    </div>

    {/* Mobile & App Development */}
    <div className="skill-group mobile">
      <h5>Mobile & App Development</h5>
      <div>
        <span className="skill-item">Android Studio</span>
        <span className="skill-item">Kotlin</span>
        <span className="skill-item">Flutter</span>
        <span className="skill-item">React Native</span>
        <span className="skill-item">Swift</span>
      </div>
    </div>

    {/* Tools & DevOps */}
    <div className="skill-group tools">
      <h5>Tools & DevOps</h5>
      <div>
        <span className="skill-item">Git / GitHub</span>
        <span className="skill-item">Docker</span>
        <span className="skill-item">Kubernetes</span>
        <span className="skill-item">REST APIs</span>
        <span className="skill-item">GraphQL</span>
        <span className="skill-item">Postman</span>
        <span className="skill-item">VS Code</span>
      </div>
    </div>
  </section>
);

export default Skills;

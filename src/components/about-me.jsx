import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDatabase, FaDocker, FaCloud } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiDjango, SiNumpy, SiFlask, SiPytorch, SiExpress, SiMongodb, SiPostgresql, SiFirebase } from "react-icons/si";
export default function AboutMe() {
  const languages = [
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
  ];

  const frameworks = [
    { name: "Django", icon: <SiDjango className="text-green-700" /> },
    { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-700" /> },
    { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-black" /> },
  ];

  const tools = [
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "AWS", icon: <FaCloud className="text-orange-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  ];

  return (
    <section id="about-me" className="max-w-2xl mx-auto mt-4 px-4">
      <h2 className="text-accent2 text-3xl font-bold mb-4 text-center">About me</h2>
      <p className="text-text text-lg text-center mb-8">
        Hi everyone 👋 I am Mikael.<br />
        I used to coach and play professional Overwatch but am now pursuing an education and professional career in Computer Science.<br />
        I am a Junior Computer Science student at UC Berkeley 🐻
      </p>
  <div className="space-y-0">
        <div>
          <h3 className="text-accent text-xl font-semibold mb-4 text-center">Languages</h3>
          <ul className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center gap-2 mb-2">
                <span className="text-xl">{lang.icon}</span>
                <span className="text-text text-base">{lang.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-accent text-xl font-semibold mb-4 text-center">Frameworks / Libraries</h3>
          <ul className="flex flex-wrap justify-center gap-3">
            {frameworks.map((fw) => (
              <li key={fw.name} className="flex items-center gap-2 mb-2">
                <span className="text-xl" style={fw.name === "Express.js" ? { WebkitTextStroke: "1px white" } : {}}>{fw.icon}</span>
                <span className="text-text text-base">{fw.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-accent text-xl font-semibold mb-4 text-center">Tools &amp; Databases</h3>
          <ul className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <li key={tool.name} className="flex items-center gap-2 mb-2">
                <span className="text-xl">{tool.icon}</span>
                <span className="text-text text-base">{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
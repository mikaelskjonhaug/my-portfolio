import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDatabase, FaDocker, FaCloud } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiDjango, SiNumpy, SiFlask, SiPytorch, SiExpress, SiMongodb, SiPostgresql, SiFirebase } from "react-icons/si";

export default function Skills() {
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
    <section className="max-w-3xl mx-auto mt-4 px-4 text-center md:text-left">
      <div className="space-y-0">
        <div>
          <h3 className="text-accent text-xl font-semibold mb-0 text-center md:text-left scale-[0.75] md:scale-100">Languages</h3>
          <ul className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-3">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center gap-0.5 mb-0 justify-center md:justify-start scale-[0.75] md:scale-100">
                <span className="text-base">{lang.icon}</span>
                <span className="text-text text-base">{lang.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-accent text-xl font-semibold mb-0 text-center md:text-left scale-[0.75] md:scale-100">Frameworks / Libraries</h3>
          <ul className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-3">
            {frameworks.map((fw) => (
              <li key={fw.name} className="flex items-center gap-0.5 mb-0 justify-center md:justify-start scale-[0.75] md:scale-100">
                <span className="text-base" style={fw.name === "Express.js" ? { WebkitTextStroke: "1px white" } : {}}>{fw.icon}</span>
                <span className="text-text text-base">{fw.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-accent text-xl font-semibold mb-0 text-center md:text-left scale-[0.75] md:scale-100">Tools &amp; Databases</h3>
          <ul className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-3">
            {tools.map((tool) => (
              <li key={tool.name} className="flex items-center gap-0.5 mb-0 justify-center md:justify-start scale-[0.75] md:scale-100">
                <span className="text-base">{tool.icon}</span>
                <span className="text-text text-base">{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDatabase, FaDocker, FaCloud } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiDjango, SiNumpy, SiFlask, SiPytorch, SiExpress, SiMongodb, SiPostgresql, SiFirebase } from "react-icons/si";
export default function AboutMe() {

  return (
    <section id="about-me" className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-accent2 text-xl md:text-3xl font-bold text-center">About me</h2>
      <p className="text-text text-lg text-center">
        Hi there, I am Mikael Skjonhaug.<br />
        Software Engineer @ Hortus AI<br />
        Computer Science @ UC Berkeley 🐻
      </p>
    </section>
  );
}
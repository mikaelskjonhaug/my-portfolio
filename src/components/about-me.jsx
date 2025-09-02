import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDatabase, FaDocker, FaCloud } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiDjango, SiNumpy, SiFlask, SiPytorch, SiExpress, SiMongodb, SiPostgresql, SiFirebase } from "react-icons/si";
export default function AboutMe() {

  return (
    <section id="about-me" className="max-w-3xl mx-auto mt-4 px-4 text-center md:text-left">
      <h2 className="text-accent2 text-3xl font-bold mb-4 text-center md:text-left">About me</h2>
      <p className="text-text text-lg mb-8 text-center md:text-left">
        Hi everyone 👋 I am Mikael.<br />
        I used to coach and play professional Overwatch but am now pursuing an education and professional career in Computer Science.<br />
        I am a Junior Computer Science student at UC Berkeley 🐻
      </p>
    </section>
  );
}
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { FaRProject } from "react-icons/fa";

const About = () => {
    return (
        <section className="max-w-8xl mx-auto bg-base flex flex-col items-center justify-center gap-10 lg:gap-20 px-8 py-8 lg:py-20 bg-gunmetal">
             <h1 className="text-white font-extrabold text-7xl items-center ">
                    About
             </h1>
            <div className="items-center bg-afblue p-20 rounded-3xl">
               
                <h2 className="text-white font-extrabold text-5xl tracking-tight pb-3">
                    Education
                </h2>
                <p className="text-white font-bold text-xl leading-relaxed">
                    <div>-Bachelor of Arts in Economics</div>
                    <div>-IBM Full Stack Developer Certificates</div>
                    
                    

                </p>
                <h3 className="text-white font-extrabold text-5xl tracking-tight pt-5">
                    Techstack and Skills

                </h3>
                <p className="text-white font-weight-500 text-xl leading-relaxed grid grid-rows-4 grid-flow-col pt-3">
                    <div className="flex ">-<SiTypescript className=" bottom-0 mx-1 mt-0.5 text-2xl" /> TypeScript</div> 
                    <div className="flex "> -<SiTailwindcss className=" bottom-0 mx-1 mt-0.5 text-2xl"  />Tailwind</div>
                    <div className="flex ">- <FaNodeJs className=" bottom-0 mx-1 mt-0.5 text-2xl" />NodeJS</div>
                    <div className="flex ">-<SiReact className=" bottom-0 mx-1 mt-0.5 text-2xl"  />React</div>
                    <div className="flex ">-<FaPython className=" bottom-0 mx-1 mt-0.5 text-2xl" />Python</div>
                    <div className="flex ">-<FaJava className=" bottom-0 mx-1 mt-0.5 text-2xl"  />Java</div>
                    <div className="flex ">-<RiSupabaseFill className=" bottom-0 mx-1 mt-0.5 text-2xl"  />Supabase</div>
                    <div className="flex ">-<FaRProject className=" bottom-0 mx-1 mt-0.5 text-2xl"  />R/RStudio</div>
                     

                    


                </p>

            </div>
        </section>




        
    );


};



export default About;
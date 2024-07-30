import SvgTs from "@/public/typesvg";
import SvgTail from "@/public/svgtail";
import SvgNode from "@/public/nodesvg";
import SvgReact from "@/public/reactsvg";
import SvgPython from "@/public/svgpython";
import HamburgerIcon from "@/components/hamburger";
import Svgnext from "@/public/nextsvg";
import SvgSupa from "@/public/supasvg";


const About = () => {
    return (
        <section className="max-w-8xl mx-auto bg-base flex flex-col items-center justify-center gap-10 lg:gap-20 px-8 py-8 lg:py-20 bg-gunmetal ">
            <h1 className="text-white font-extrabold text-7xl delay-[300ms] duration-[600ms] taos:translate-y-[-200px] taos:opacity-0" data-taos-offset="500">
                About
                <HamburgerIcon />

            </h1>
            <div className="items-center  bg-gradient-to-t from-gunmetal2 to-charcoal p-20 rounded-3xl animate-fadeDown">

                <h2 className="text-white font-extrabold text-5xl tracking-wide pb-3">
                    Education

                </h2>
                <p className=" text-white font-weight-500 text-xl leading-relaxed">
                    <span className="block">-Bachelor of Arts in Economics</span>
                    -IBM Full Stack Developer Certificates



                </p>
                <h3 className="text-white font-extrabold text-5xl pt-5">
                    Techstack and Skills


                </h3>
                <p className="text-white font-weight-500 text-xl leading-relaxed grid grid-rows-4 grid-flow-col pt-3">
                    <div className="flex ">- <SvgTs className="ml-3 mr-1" /> TypeScript</div>
                    <div className="flex ">- <SvgTail className="ml-3  mr-1" /> Tailwind</div>
                    <div className="flex ">- <SvgNode className="ml-3 mr-1" /> NodeJS</div>
                    <div className="flex ">- <SvgReact className="ml-3 mr-1" /> React</div>
                    <div className="flex ">- <SvgPython className="ml-3 mr-1" /> Python</div>
                    <div className="flex ">- <SvgSupa className="ml-3 mr-1" /> Supabase</div>
                    <div className="flex ">- <Svgnext className="ml-3 mr-1" /> NextJS</div>






                </p>

            </div>
        </section>




        
    );


};



export default About;
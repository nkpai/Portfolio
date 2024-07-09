import SvgTs from "@/public/typesvg";
import SvgTail from "@/public/svgtail";

const About = () => {
    return (
        <section className="max-w-8xl mx-auto bg-base flex flex-col items-center justify-center gap-10 lg:gap-20 px-8 py-8 lg:py-20 bg-gunmetal">
             <h1 className="text-white font-extrabold text-7xl items-center ">
                    About
             </h1>
            <div className="items-center bg-afblue p-20 rounded-3xl">
               
                <h2 className="text-white font-extrabold text-5xl tracking-wide pb-3">
                    Education
                </h2>
                <p className="text-white font-weight-500 text-xl leading-relaxed">
                    <div>-Bachelor of Arts in Economics</div>
                    <div>-IBM Full Stack Developer Certificates</div>
                    
                    

                </p>
                <h3 className="text-white font-extrabold text-5xl tracking-wide pt-5">
                    Techstack and Skills

                </h3>
                <p className="text-white font-weight-500 text-xl leading-relaxed grid grid-rows-4 grid-flow-col pt-3">
                    <div className="flex ">- <SvgTs /> TypeScript</div> 
                    <div className="flex "> - <SvgTail /> Tailwind</div>
                    <div className="flex ">- NodeJS</div>
                    <div className="flex ">-React</div>
                    <div className="flex ">-Python</div>
                    <div className="flex ">-Java</div>
                    <div className="flex ">-Supabase</div>
                    <div className="flex ">-R/RStudio</div>
                     

                    


                </p>

            </div>
        </section>




        
    );


};



export default About;
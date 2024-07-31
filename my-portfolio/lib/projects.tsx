import HamburgerIcon from "@/components/hamburger";
import SvgNode from "@/public/nodesvg";
import SvgSupa from "@/public/supasvg";
import SvgTail from "@/public/svgtail";
import SvgTs from "@/public/typesvg";


const Project = () => {
  return (
    <section className="max-w-8xl mx-auto bg-base flex flex-col relative justify-center items-center overflow-hidden gap-10 lg:gap-20  lg:py-20 bg-gunmetal">
         <h1 className="text-white font-extrabold text-7xl text-center ">
                    Projects
                    <div className="pt-3"><HamburgerIcon/></div>
        
        </h1>

        <div className=" relative bg-gradient-to-t from-gunmetal2 to-charcoal rounded-3xl h-[300px] lg:w-[1000px] justify-center items-center md:w-[430px]">
            <h2 className=" text-white font-extrabold text-5xl tracking-wide pb-5 p-10 opacity-90">
                Project 1
            </h2>
            <p className="flex flex-wrap text-left text-white font-medium line-clamp-4 pl-10 text-balance gap-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. 
                    <div className="flex p-1 items-center rounded-xl text-xs bg-gunmetal"> <SvgTs className="-mt-1 scale-75 "/> TypeScript</div> 
                    <div className="flex p-1 items-center rounded-xl text-xs bg-gunmetal "> <SvgTail className="-mt-0.5 scale-75"/> Tailwind</div>
                    <div className="flex p-1 items-center rounded-xl text-xs bg-gunmetal "> <SvgSupa className="-mt-1 scale-75" /> Supabase</div>
            </p>
        </div>

        <div className=" relative bg-gradient-to-t from-gunmetal2 to-charcoal rounded-3xl h-[300px] justify-center lg:w-[1000px] items-center  md:w-[430px]">
            <h2 className=" text-white font-extrabold text-5xl tracking-wide pt-10 pl-10 pb-5 opacity-90">
                Project 1
            </h2>
            <p className="flex flex-wrap text-left text-white font-medium line-clamp-4 pl-10 text-balance gap-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. 
                    <div className="flex p-1 items-center rounded-xl text-xs bg-gunmetal"> <SvgTs className="-mt-1 scale-75 "/> TypeScript</div> 
                    <div className="flex p-1 items-center rounded-xl text-xs bg-gunmetal "> <SvgTail className="-mt-0.5 scale-75"/> Tailwind</div>
                    <div className="flex p-1 items-center rounded-xl text-xs bg-gunmetal "> <SvgSupa className="-mt-1 scale-75" /> Supabase</div>
            </p>
          
        </div>

        <div className=" relative  bg-gradient-to-t from-gunmetal2 to-charcoal rounded-3xl h-[300px] justify-center lg:w-[1000px] items-center  md:w-[430px]">
            <h2 className=" text-white font-extrabold text-5xl tracking-wide pb-5 p-10 opacity-90">
                Project 1
            </h2>
            <p className="flex flex-wrap text-left text-white font-medium line-clamp-4 pl-10 text-balance gap-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. 
                    <div className="flex p-1 items-center rounded-xl text-xs bg-gunmetal"> <SvgTs className="-mt-1 scale-75 "/> TypeScript</div> 
                    <div className="flex p-1 items-center rounded-xl text-xs bg-gunmetal "> <SvgTail className="-mt-0.5 scale-75"/> Tailwind</div>
                    <div className="flex p-1 items-center rounded-xl text-xs bg-gunmetal "> <SvgSupa className="-mt-1 scale-75" /> Supabase</div>
            </p>
        </div>

    </section>
  )
};

export default Project;
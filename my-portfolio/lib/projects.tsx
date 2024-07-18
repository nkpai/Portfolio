import HamburgerIcon from "@/components/hamburger";


const Project = () => {
  return (
    <section className="max-w-8xl mx-auto bg-base flex flex-col  gap-10 lg:gap-20 px-8 py-8 lg:py-20 bg-gunmetal">
         <h1 className="text-white font-extrabold text-7xl ">
                    Projects
                    <div className="pt-3"><HamburgerIcon/></div>
        
        </h1>

        <div className="flex bg-charcoal rounded-3xl w-40">
            <h2 className="flex text-white font-extrabold text-5xl tracking-wide text-left items-start ">
                Project 1
            </h2>


        </div>

        <div className="">

        </div>

        <div className="">


        </div>

    </section>
  )
};

export default Project;
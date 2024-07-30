const Hero = () => {
    return (
      <section className="max-w-8xl min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20 bg-main bg-no-repeat bg-cover md:bg-right">
        <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start pb-80">
         
          <h1 className="font-extrabold text-4xl lg:text-7xl tracking-tight md:-mb-4 text-white -mt-80 opacity-0  animation-delay-700 transition-opacity animate-fadeIn  ">
            Nathan Levine-Kpai.
          </h1>
          <h2 className="font-extrabold text-2xl lg:text-4xl tracking-tight md:-mb-4 text-white -mt-5 opacity-0 transition-opacity animation-delay-1000 animate-appearFromRight" >
            Full Stack Developer.
          </h2>
    
          <button className="font-bold text-black ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-grey-300 duration-300 rounded-full px-5 py-2.5 me-2 mb-2  opacity-0 transition-opacity animation-delay-1000 animate-fadeIn">
            Resume
          </button>
  
         
        </div>
      </section>
    );
  };
  
  export default Hero;
  
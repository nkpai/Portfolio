const Hero = () => {
    return (
      <section className="max-w-8xl min-h-screen mx-auto bg-base flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20 bg-black">
        <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start pb-80">
         
          <h1 className="font-extrabold text-4xl lg:text-7xl tracking-tight md:-mb-4 text-white -mt-80  ">
            Nathan Levine-Kpai
          </h1>
    
          <button className="font-bold text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  rounded-full px-5 py-2.5 me-2 mb-2">
            Projects
          </button>
  
         
        </div>
      </section>
    );
  };
  
  export default Hero;
  
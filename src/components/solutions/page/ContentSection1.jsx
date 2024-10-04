import image from "../../../assets/images/eye.png";

const ContentSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
      <div className="w-full lg:w-[70%] text-center lg:text-left">
        <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
          Change only happens <br /> when everyone <br /> is paying attention.
        </h2>
        <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
          Our interventions can be funny, scary, strange ⁠-⁠ whatever it takes
          to grab peoples attention and make them stop and think. Rouser does
          this to wake as many people as possible to the burning need for action
          on climate change and eco⁠-⁠collapse.
        </p>
      </div>
      <div className="w-full lg:w-[50%] flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={image}
          alt="Rousers activism makes people think."
          className="w-[80%] sm:w-[70%] lg:w-full h-auto mb-5"
        />
      </div>
    </section>
  );
};

export default ContentSection;

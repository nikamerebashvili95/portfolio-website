/* eslint-disable */
function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Nika Merebashvili, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I'm a Front-end developer. I've been learning programming for
              about a year and always looking for new challenges, I love to
              solve problems and never give up. I’ve made projects with Html,
              Css, Javascript, React.Js, and Tailwindcss which you can see in my
              works. I am very motivated and give all my time programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

/* eslint-disable */
import Works from "./works/Works";
import Works2 from "./works/Works2";
function Work() {
  return (
    <div name="work" className="w-full   text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        <Works />
        <Works2 />
      </div>
    </div>
  );
}

export default Work;

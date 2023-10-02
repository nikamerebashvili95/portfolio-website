import { data } from "../../data/dataFirst.js";

function Works1() {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div className="mt-20">
      <h3 className="text-3xl  flex justify-center text-center items-center py-6">
        Main Projects
      </h3>
      {/* container for projects */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Gird Item */}
        {project.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                {item.name}
              </span>
              <div className="pt-8 text-center ">
                {/* eslint-disable-next-line */}
                <a href={item.github} target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href={item.live} target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works1;

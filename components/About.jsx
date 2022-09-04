import React from "react";

const About = () => {
  return (
    <div id='about' className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1040px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus voluptate fugiat aut aspernatur facilis labore. Unde nesciunt qui quasi,
            aperiam laboriosam dolor explicabo veniam, quia voluptates, id ex fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
            voluptate fugiat aut aspernatur facilis labore. Unde nesciunt qui quasi, aperiam laboriosam dolor explicabo veniam, quia voluptates, id ex
            fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus voluptate fugiat aut aspernatur facilis labore. Unde nesciunt qui
            quasi, aperiam laboriosam dolor explicabo veniam, quia voluptates, id ex fugit.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus qui blanditiis accusamus exercitationem aliquid consectetur sed et provident
            deleniti rem. Eveniet perspiciatis vero error quae deserunt, in consequatur cum iure.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-100 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

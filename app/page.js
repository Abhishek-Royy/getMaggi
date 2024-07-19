import React from "react";

function page() {
  return (
    <>
      <div className="main w-full h-auto">
        {/* Main container with padding on medium screens */}
        <div className="md:px-36 w-full h-[50vh] flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-bold">Get a Maggi for me</h2>
          <p className="text-lg mt-5">
            A set of value-added services provided by venture capital firms to
            their portfolio companies, which helps them to grow and succeed.
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Taste Now
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Fund Now
            </button>
          </div>
        </div>
        {/* Separator line */}
        <div className="w-full h-1 opacity-10 bg-white"></div>
      </div>
    </>
  );
}

export default page;

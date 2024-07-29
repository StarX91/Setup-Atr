import React, { useState } from "react";
import { FaVectorSquare, FaUpload } from "react-icons/fa";

import { PiCursorThin } from "react-icons/pi";
import { MdMyLocation } from "react-icons/md";
import { CiImport } from "react-icons/ci";
import { GoUpload } from "react-icons/go";
import { LiaVectorSquareSolid } from "react-icons/lia";

const AnnotationTask = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1 className="text-center h-auto text-zinc-200 bg-black text-2xl mt-4 font-bold mb-4">
        Annotation Report Task
      </h1>
      <div className="flex justify-center py-2 flex-wrap">
        <button className="bg-zinc-800 text-zinc-300 px-5 py-2 m-2 font-semibold rounded-2xl">
          Create Task
        </button>
        <button className="bg-zinc-800 text-zinc-300 px-9 py-2 m-2 font-semibold rounded-2xl">
          Images
        </button>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-zinc-700 text-zinc-300 px-8 py-2 m-2 font-semibold rounded-2xl"
        >
          Setup
        </button>
        <button className="bg-zinc-800 text-zinc-300 px-8 py-2 m-2 font-semibold rounded-2xl">
          Report
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start mt-6 p-4 ">
        <div className="w-full bg-neutral-900 p-4 rounded-lg shadow-lg flex flex-col ">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-300 font-semibold px-2">
              DJii0880.jpg
            </span>
            <div>
              <span className="text-zinc-400  bg-zinc-800 px-4 py-1 rounded-sm">
                Annotated: 0
              </span>

              <span className="text-neutral-900 font-semibold bg-neutral-600 px-2 py-1 rounded-sm">
                Non-annotated: 0
              </span>
            </div>
            <div>
              <button className="bg-black font-semibold text-zinc-300 px-8 py-1 rounded-md border-2 border-zinc-400 mr-4">
                Clear
              </button>
              <button className="bg-zinc-200 text-neutral-900 font-semibold border-2 border-zinc- px-8 py-1 rounded-lg">
                Done
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-1 ">
            {/* Sidebar */}
            <div className="w-12 bg-zinc-900 flex flex-col items-center py-4">
              <PiCursorThin
                className="text-zinc-300 my-4 cursor-pointer"
                size={24}
              />
              <LiaVectorSquareSolid
                className="text-zinc-200  my-4 cursor-pointer"
                size={24}
              />
              <MdMyLocation
                className="text-zinc-100 my-4 cursor-pointer"
                size={24}
              />
              <CiImport
                className="text-zinc-300 my-4 cursor-pointer"
                size={24}
              />
              <GoUpload
                className="text-zinc-300 my-4 cursor-pointer"
                size={24}
              />
            </div>

            <div className="flex-1 flex flex-col md:flex-row">
              <div className="bg-neutral-800 h-64 md:h-96 rounded-lg mb-4 flex-1">
                {/* Placeholder for the image */}
                <div className="bg-stone-700 h-56 md:h-80 my-8 mx-8 rounded-lg mb-4 flex-1">
                  {/* Placeholder for the image */}
                </div>
              </div>
              <div className="w-full md:w-1/4 lg:w-1/5 bg-zinc-900 p-4 rounded-lg shadow-lg mt-4 md:mt-0 md:ml-4">
                <button className="bg-neutral-700 text-zinc-400 w-full py-2 mb-4 rounded-lg font-semibold">
                  Add new class objects
                </button>
                <div className=" flex justify-center">
                  <button className="bg-neutral-600 text-neutral-900 font-semibold w-full w-1/3  py-2 mb-4 rounded-lg">
                    Add
                  </button>
                </div>
                <div className="text-zinc-300 text-[18px] mb-2">Classes</div>
                <div className="text-green-500 ">Trees - 0</div>
                <div className="text-blue-500">Rooftops - 0</div>
                <div className="text-red-500">Roads - 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnotationTask;

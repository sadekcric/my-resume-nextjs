import React from "react";
import "../style/headers.css";

import { IoMdCheckmarkCircle } from "react-icons/io";
import Link from "next/link";
import SectionTitle from "./commonRoute/SectionTitle";

const Project = () => {
  return (
    <section>
      {/* Title */}
      <SectionTitle video={"/header4.mp4"} title={"Latest Project"} />

      {/* Background */}
      <div className="overflow-hidden w-full lg:h-screen object-cover   lg:relative">
        <video autoPlay muted loop className="h-full hidden lg:block w-full object-cover">
          <source src="/header1.mp4" type="video/mp4" />
        </video>

        <div className="bg-[#071952] lg:absolute top-0 left-0 w-full bg-opacity-75 lg:h-screen z-10">
          <div className="flex flex-row h-full items-center justify-center">
            <div className="lg:w-4/5 mx-auto p-3 lg:px-10 lg:py-16 flex flex-col lg:flex-row gap-5 lg:border-2 lg:border-primary profile-shadow rounded-md">
              <div className="flex-1 border">
                <video autoPlay muted loop className="h-full w-[800px] object-cover">
                  <source src="/project.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="flex-1 space-y-3">
                <h2 className="text-2xl lg:text-3xl uppercase text-primary font-semibold"> Picopay</h2>

                {/* key features */}
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Key Features</h4>
                  <div>
                    {/* worker */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Workers:</h4>
                      <p className="text-white flex lg:items-center gap-3">
                        <span className="text-[#3EF1C6] text-xl">
                          <IoMdCheckmarkCircle />
                        </span>{" "}
                        View all available tasks with detailed descriptions and requirements.
                      </p>
                      <p className="text-white flex lg:items-center gap-3">
                        <span className="text-[#3EF1C6] text-xl">
                          <IoMdCheckmarkCircle />
                        </span>{" "}
                        Submit completed tasks for review and earn coins upon approval.
                      </p>
                      <p className="text-white flex lg:items-center gap-3">
                        <span className="text-[#3EF1C6] text-xl">
                          <IoMdCheckmarkCircle />
                        </span>{" "}
                        Withdraw earned coins.
                      </p>
                    </div>

                    {/* Task Creator */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Task Creator:</h4>
                      <p className="text-white flex lg:items-center gap-3">
                        <span className="text-[#3EF1C6] text-xl">
                          <IoMdCheckmarkCircle />
                        </span>{" "}
                        Create tasks with specific instructions, deadlines, and reward amounts.
                      </p>
                      <p className="text-white flex lg:items-center gap-3">
                        <span className="text-[#3EF1C6] text-xl">
                          <IoMdCheckmarkCircle />
                        </span>{" "}
                        Review task submissions from Workers and approve or reject them.
                      </p>
                      <p className="text-white flex lg:items-center gap-3">
                        <span className="text-[#3EF1C6] text-xl">
                          <IoMdCheckmarkCircle />
                        </span>{" "}
                        Pay Workers automatically using platform coins.
                      </p>
                    </div>

                    {/* Admin */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary">Admin:</h4>
                      <p className="text-white flex lg:items-center gap-3">
                        <span className="text-[#3EF1C6] text-xl">
                          <IoMdCheckmarkCircle />
                        </span>{" "}
                        Modify user roles as necessary, including granting Task-Creator status.
                      </p>
                      <p className="text-white flex lg:items-center gap-3">
                        <span className="text-[#3EF1C6] text-xl">
                          <IoMdCheckmarkCircle />
                        </span>{" "}
                        Provide feedback on Task-Creator reports and take appropriate actions.
                      </p>
                      <p className="text-white flex  gap-3">
                        <span className="text-[#3EF1C6] text-xl">
                          <IoMdCheckmarkCircle />
                        </span>{" "}
                        Manage platform integrity by deleting tasks, users, or any other system elements as needed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Website Live Link */}
                <h3 className="text-[#3EF1C6] font-semibold">
                  <span className="text-primary">Live Link:</span>{" "}
                  <Link className="hover:underline" href={"https://picopai.web.app/"} target="blank">
                    https://picopai.web.app
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

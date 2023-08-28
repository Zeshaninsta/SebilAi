import React from "react";
import betty from "./Developers/betty.png";
import fita from "./Developers/fita.jpg";
import tuji from "./Developers/tuji.jpg";
import brook from "./Developers/brook.jpg";
import beki from "./Developers/beki.png";
import emran from "./Developers/emran.png";
import mahalet from './Developers/mahalet.png'
import logo from '../images/logo_dev.png'

const TeamMembers = () => {
  const members = [
    {
      name: "Fita Wegene",
      image: fita,
      description: "Team Leader, UI designer",
      contact: "AAU"
    },
    {
      name: "Tuji Sultan",
      image: tuji,
      description: "Front-end Developer",
      contact: "MWU"
    },
    {
      name: "Betelhem Zekarias",
      image: betty,
      description: "Frontend Developer",
      contact: "AAU"
    },
    {
      name: "Bereket Alebachew",
      image: beki,
      description: "Backend Developer",
      contact: "AAU"
    },
    {
      name: "Bruk Tafese",
      image: brook,
      description: "Backend Developer",
      contact: "AAU"
    },
    {
      name: "Emran Mohammed",
      image: emran,
      description: "Backend Developer",
      contact: "MWU"
    },
    {
      name: "Mahlet Samuel",
      image: mahalet,
      description: "Frontend Developer",
      contact: "AASTU"
    },
    // {
    //   name:"SebilAi",
    //   image: logo,
    //   description: "Project",
    //   contact:"sebilAi@developers.com"
    // }
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold animate-pulse text-[#396E8D] mb-8">
        Sebil Team Members
      </h1>
      <div className="bg-gray-100 min-h-screen p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
        {members.map((member, index) => (
         <div
         key={index}
         className="bg-white p-4 rounded-lg  m-auto shadow-lg transform transition-transform hover:scale-105"
       >
         <div className="h-[calc(100% - 2rem)] overflow-hidden rounded-lg"> {/* Adjust height minus padding */}
           <img
             src={member.image}
             alt={member.name}
             className=" object-cover"
           />
         </div>
            <div className="mt-2 text-[#396E8D]">
              <p className="font-semibold text-lg">{member.name}</p>
              <p className="text-sm">{member.description}</p>
              <p className="text-sm">{member.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;

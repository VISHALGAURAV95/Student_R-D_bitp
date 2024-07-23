import React from "react";
import { FaLinkedin } from "react-icons/fa";

// Import your image assets
import khusipic from "../assets/khusipic.jpg";
import diveshpic from "../assets/diveshpic.jpg";
import soumyapic from "../assets/saumyapic2.jpg";
import vaibhavpic from "../assets/vaibhavpic.jpg";
import vishalpic from "../assets/vishalpic.jpg";
import vaishnavipic from "../assets/vaishnavipic.jpg";
import karanpic from "../assets/karanpic.jpg";
import gauripic from "../assets/gauripic.jpg";
import amanpic from "../assets/amanpic2.jpg";
import madhupic from "../assets/madhu.jpg";
import harshpic from "../assets/Harsh_2.jpg";
import scpandeypic from "../assets/scpandeypic.jpg";
import akashpic from "../assets/akashpic.jpg";
import vidishapic from "../assets/vidisha.jpeg";

const teamMembers = [
  {
    name: "S.C. Pandey",
    branch: "CSE",
    position: "Professor Incharge R & D cell",
    photo: scpandeypic,
    LinkedIn: "",
    priority: 1,
  },
  {
    name: "Vaibhav Raj",
    branch: "CSE",
    position: "Founder || Design Lead",
    photo: vaibhavpic,
    LinkedIn: "https://www.linkedin.com/in/vaibhav-raj-1b8442214",
    priority: 2,
  },
  {
    name: "Vishal Gaurav",
    branch: "CSE",
    position: "Web Developer || Founder",
    photo: vishalpic,
    LinkedIn: "https://www.linkedin.com/in/vishal-gaurav-57a421241/",
    priority: 2,
  },
  {
    name: "Gauri Sinha",
    branch: "ECE",
    position: "Founder || Design Lead",
    photo: gauripic,
    LinkedIn: "https://www.linkedin.com/in/gauri-sinha-8ba1b0299/",
    priority: 2,
  },
  {
    name: "Vidisha Jahanvi",
    branch: "CSE",
    position: "Technical Lead",
    photo: vidishapic,
    LinkedIn: "https://www.linkedin.com/in/vidishajahanvi/",
    priority: 2,
  },
  {
    name: "Karan Kumar",
    branch: "IT",
    position: "Event Head",
    photo: karanpic,
    LinkedIn: "https://www.linkedin.com/in/karan-kumar-598124233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    priority: 4,
  },
  {
    name: "Khushi Pathak",
    branch: "IT",
    position: "Event Head",
    photo: khusipic,
    LinkedIn: "https://www.linkedin.com/in/khushi-kumari-a9768a227",
    priority: 4,
  },
  {
    name: "Aman Kumar",
    branch: "BBA",
    position: "Event Head",
    photo: amanpic,
    LinkedIn: "",
    priority: 4,
  },
  {
    name: "Madhuri Madhu",
    branch: "CIVIL",
    position: "CONTENT HEAD & Design Lead",
    photo: madhupic,
    LinkedIn: "http://linkedin.com/in/madhuri-raj-732905271",
    priority: 5,
  },
  {
    name: "HARSH Raj",
    branch: "CSE",
    position: "CONTENT HEAD",
    photo: harshpic,
    LinkedIn: "",
    priority: 5,
  },
  {
    name: "Divyesh Kumar",
    branch: "CSE",
    position: "CONTENT HEAD",
    photo: diveshpic,
    LinkedIn: "",
    priority: 5,
  },
  {
    name: "Saumya Shalini",
    branch: "EEE",
    position: "Technical Lead & PR OUTREACH",
    photo: soumyapic,
    LinkedIn: "",
    priority: 6,
  },
  {
    name: "AKASH Raj",
    branch: "CSE",
    position: "PR & OUTREACH",
    photo: akashpic,
    LinkedIn: "",
    priority: 6,
  },
  {
    name: "Vaishnavi Raj",
    branch: "IT",
    position: "PR & OUTREACH",
    photo: vaishnavipic,
    LinkedIn: "https://www.linkedin.com/in/vaishnaviraj721",
    priority: 6,
  },
];

function TeamMember({ name, branch, position, photo, LinkedIn }) {
  return (
    <div className="group relative flex flex-col items-center justify-center bg-inherit rounded-full p-6 transition-all duration-500 transform hover:rounded-lg hover:scale-105 ">
      <div className="w-32 h-32 mb-4 overflow-hidden rounded-full shadow-md">
        <img src={photo} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className=" items-center justify-center p-4 bg-white bg-opacity-0 group-hover:bg-opacity-0 transition-opacity duration-500 rounded-lg">
        <h3 className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {name}
        </h3>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {branch}
        </p>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {position}
        </p>
        <div className="flex justify-center mt-3 space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {LinkedIn && (
            <a
              href={LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function AboutDetail() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Meet The Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers
            .sort((a, b) => a.priority - b.priority) // Sort by priority
            .map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                branch={member.branch}
                position={member.position}
                photo={member.photo}
                LinkedIn={member.LinkedIn} 
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;

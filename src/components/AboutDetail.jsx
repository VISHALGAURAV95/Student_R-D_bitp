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
import scpandeypic from "../assets/scpandeypic.jpg"
function TeamMember({ name, branch, position, photo, children }) {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white rounded-lg shadow-md p-2">
      {/* Display the team member's photo */}
      <div className="bg-gray-200 rounded-full h-16 w-16 md:h-24 md:w-24 flex items-center justify-center mb-2">
        {/* Placeholder for the team member's photo */}
        {photo ? (
          <img src={photo} alt={name} className="rounded-full w-full h-full object-cover" />
        ) : (
          <span className="text-lg font-bold">{name} pic</span>
        )}
      </div>
      <div className="text-center">
        {/* Display the team member's name */}
        <h2 className="text-base font-semibold md:text-lg">{name}</h2>
        {/* Display the team member's branch */}
        <h2 className="text-base font-semibold md:text-lg">{branch}</h2>
        {/* Display the team member's position */}
        <p className="text-sm text-gray-400">{position}</p>
      </div>
      <div className="mt-2 flex justify-evenly space-x-2 w-full">
        {/* If the team member has children (nested team members), render them */}
        {children}
      </div>
    </div>
  );
}

function AboutDetail() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white min-h-screen">
      {/* Root component starts from the center of the page */}
      <div className="container mx-auto py-8 justify-center">
        {/* Title of the team section */}
        <h1 className="text-2xl font-semibold text-center mb-4">Meet The Team</h1>
        {/* Grid layout to display team members */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-4">
          {/* Root TeamMember */}
          <TeamMember name="S.C. Pandey" branch="CSE" position="Professor" photo={scpandeypic}>
            {/* First child column */}
            <div className="flex justify-between">
              <div>
                <TeamMember name="Vaibhav Raj" position="Founder || Design Lead" branch="CSE" photo={vaibhavpic}>
                  {/* <TeamMember name="Divesh Kumar" position="PR and Outreach" photo={diveshpic} /> */}
                  <TeamMember name="Karan Kumar" position="Event Head" branch="IT" photo={karanpic}>
                  <TeamMember name="Madhuri Madhu" position="CONTENT HEAD" branch="CIVIL" photo={madhupic} >
                  <TeamMember name="Saumya Shalini" position="PR & OUTREACH" branch="CIVIL" photo={soumyapic} />
                  </TeamMember>
                  </TeamMember>
                </TeamMember>
              </div>
            </div>
            {/* Second child column */}
            <div className="flex justify-center">
              <div>
                <TeamMember name="Vishal Gaurav" position="Web Developer || Founder" branch="CSE" photo={vishalpic}>
                  <TeamMember name="Khushi Pathak" position="Event Head" branch="IT" photo={khusipic}>
                    <TeamMember name="HARSH Raj" position="CONTENT HEAD" branch="CSE" photo={harshpic} />
                  </TeamMember>
                </TeamMember>
              </div>
            </div>
            {/* Third child column */}
            <div className="flex justify-center">
              <div>
                <TeamMember name="Gauri Sinha" position="Founder || Design Lead" branch="ECE" photo={gauripic}>
                  <TeamMember name="Aman Kumar" position="Event Head" branch="BBA" photo={amanpic} >  
                  <TeamMember name="Divyesh Kumar" position="CONTENT HEAD" branch="CSE" photo={diveshpic} > 
                  <TeamMember name="Vaishnavi Raj" position="PR & OUTREACH" branch="IT" photo={vaishnavipic} />
                    </TeamMember> 
                  </TeamMember>
                </TeamMember>
              </div>
            </div>
          </TeamMember>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;

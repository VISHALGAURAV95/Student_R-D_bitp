import React from 'react';

function AboutDetail() {
  return (
    <div className="max-w-xs mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-center">
          <img className="w-32 h-32 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTql7QO1cKJ2vGPissyg8P5dvN0F0fmajfgtEoaIywuRg&s" alt="Avatar" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">VISHAL GAURAV</div>
          <p className="text-gray-700 text-base">
            BRANCH:-C.S.E
            <br></br>
            ROLE:-WEB DEVELOPER , FOUNDER
            <br></br>
            YEAR:-3RD 
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="text-sm text-gray-600">Last updated 3 mins ago</span>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;

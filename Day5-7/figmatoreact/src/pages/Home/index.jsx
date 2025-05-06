import React from 'react';


const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#ede9fe]">
      {/* Decorative elements */}
      <img src="/images/img_deco1.png" alt="Decorative element" className="absolute top-0 left-0 w-[407px] h-[174px] z-0" />
      <img src="/images/img_deco2.svg" alt="Decorative element" className="absolute top-[203px] left-[500px] w-[166px] h-[150px] z-0" />
      
      {/* Main content */}
      <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto">
        {/* Hero section */}
        <div className="ml-[75px] mt-[113px]">
          <h1 className="text-[72px] font-extrabold text-[#0f172a] leading-[85px]">WebbyPages</h1>
          <p className="text-[32px] font-light text-[#0f172a] leading-[51px] mt-[92px] max-w-[447px]">
            Get inspired and build faster with our landing pages kit
          </p>
        </div>
        
        {/* Features list */}
        <div className="ml-[83px] mt-[340px] space-y-[41px]">
          <div className="flex items-start">
            <img src="/images/img_icon_jamicons_outline_logos_check.svg" alt="Check" className="w-6 h-6 mt-2" />
            <p className="ml-[32px] text-[18px] text-[#0f172a] leading-[22px]">13 Landing Pages for Desktop and Mobile</p>
          </div>
          
          <div className="flex items-start">
            <img src="/images/img_icon_jamicons_outline_logos_check.svg" alt="Check" className="w-6 h-6 mt-2" />
            <p className="ml-[32px] text-[18px] text-[#0f172a] leading-[22px]">10+ Extra Sections</p>
          </div>
          
          <div className="flex items-start">
            <img src="/images/img_icon_jamicons_outline_logos_check.svg" alt="Check" className="w-6 h-6 mt-2" />
            <p className="ml-[32px] text-[18px] text-[#0f172a] leading-[22px]">100+ components and variants</p>
          </div>
          
          <div className="flex items-start">
            <img src="/images/img_icon_jamicons_outline_logos_check.svg" alt="Check" className="w-6 h-6 mt-2" />
            <p className="ml-[32px] text-[18px] text-[#0f172a] leading-[22px]">250+ global design styles</p>
          </div>
        </div>
        
        {/* Showcase images */}
        <div className="relative">
          <img 
            src="/images/img_image_1.png" alt="Teaching platform showcase" className="absolute top-[418px] left-[454px] w-[1240px] h-[750px] object-contain z-10"
          />
          <img 
            src="/images/img_image_2.png" alt="App builder showcase" className="absolute top-[61px] left-[850px] w-[899px] h-[750px] object-contain z-20"
          />
          <img 
            src="/images/img_image_3.png" alt="Project management showcase" className="absolute top-[615px] left-[75px] w-[722px] h-[750px] object-contain z-30"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
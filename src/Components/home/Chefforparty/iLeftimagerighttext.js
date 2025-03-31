// import React from 'react';

// const ILeftImageRightText = () => {
//     return (
//         <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto flex flex-wrap">
//           <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3  sm:pr-10">
//           <h1 className="title-font font-medium text-4xl mb-2 text-gray-900">Our affordable prices <br/> are based on <span className='font-bold text-4xl text-orange-500'>4 Factors </span></h1>
//           <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
//             {/* <div className="w-full sm:p-4 px-4 mb-6">
            
//             </div> */}
            
//           </div>
//           <div className=" flex flex-wrap lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
//             {/* <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats"/> */}
//             <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
//               <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
//               <p className="leading-relaxed">Users</p>
//             </div>
//             <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
//               <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
//               <p className="leading-relaxed">Subscribes</p>
//             </div>
//             <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
//               <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
//               <p className="leading-relaxed">Downloads</p>
//             </div>
//             <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
//               <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
//               <p className="leading-relaxed">Products</p>
//             </div>
           
//           </div>
//         </div>
//       </section>
//     );
// };

// export default ILeftImageRightText;
import React from 'react';

const ILeftImageRightText = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container py-12 mx-auto flex flex-wrap ">
                <div className="flex flex-wrap  lg:w-1/2 sm:w-2/3 sm:pr-10 ">
                    <div className="w-full px-28  sm:text-left">
                        <h1 className="title-font font-bold text-3xl mb-4 text-black">
                            Our affordable prices <br/> are based on 
                            <span className='font-bold text-4xl text-orange-500'> 4 Factors </span>
                        </h1>
                        <p className="leading-relaxed text-lg text-black">
                        Minimum prices guaranteed*
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden  sm:mt-0">
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                       <img src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FBatch_Assign_54bbf77213.png&w=1920&q=75"></img>
                        <p className="leading-normal">No. of People</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                       <img src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FNoodles_77d70fadf1.png&w=1920&q=75"></img>
                        <p className="leading-normal">No. of Dishes</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                       <img src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FVegan_Food_b23033b652.png&w=1920&q=75"></img>
                        <p className="leading-normal">Cuisine Preference</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                       <img src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FPlace_Marker_e599ac1ded.png&w=1920&q=75"></img>
                        <p className="leading-normal">Location</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ILeftImageRightText;
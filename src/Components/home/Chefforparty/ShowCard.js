// import React from 'react';

// // Sample data array
// const cardData = [
//   {
//     id: 1,
   
//     title: "Multi-Cuisine Professionals",
//     description:"Professional party chefs to ensure a diverse & exquisite dining experience.",
//     image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/healthy_hygienic_a9878d9090.svg",
//   },
//   {
//     id: 2,
//     title: "Prompt Service",
//     description:"Swift service to ensure that your party kicks off as planned",
//     image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/timely_service_3a6f9d9ebe.svg",
//   },
//   {
//     id: 3,
//     title: "Customisable menu",
//     description:"Food from around the world to make your event the talk of the town.",
//     image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/easy_booking_92fea7ca01.svg",
//   },
//   {
//     id: 4,
//     title: "Bartenders, Waiters, etc.",
//     description:"Expert bartenders & waiters to leave your guests in awe",
//     image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/bartenders_48bb601645.svg",
//   },
// ];

// const ShowCard1 = () => {
//   return (
//     <div className="flex justify-center py-10 ">
//       <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-7xl mt-0  " >
//         <section className="text-gray-600 body-font container mx-auto px-5 ">
//           {/* Responsive grid layout */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
//             {cardData.map((card) => (
//               <div
//                 key={card.id}
//                 className=" border-2 rounded-lg border-gray-200 border-opacity-50 p-6 flex flex-col sm:flex-row items-center bg-white"
//               >
                
//                 <div className="w-24 h-24 inline-flex items-center justify-center rounded-2xl bg-[#FFF2F2] flex-shrink-0">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     width="80"
//                     height="80"
//                   />
//                 </div>
//                 <div className="flex-grow ml-4">
//                   <h2 className="text-gray-900 text-xl font-bold mb-2">
//                     {card.title}
//                   </h2>
//                   <p className="leading-relaxed text-lg sm:text-base">
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ShowCard1;
import React from 'react';

// Sample data array
const cardData = [
  {
    id: 1,
    title: "Multi-Cuisine Professionals",
    description: "Professional party chefs to ensure a diverse & exquisite dining experience.",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/healthy_hygienic_a9878d9090.svg",
  },
  {
    id: 2,
    title: "Prompt Service",
    description: "Swift service to ensure that your party kicks off as planned",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/timely_service_3a6f9d9ebe.svg",
  },
  {
    id: 3,
    title: "Customisable menu",
    description: "Food from around the world to make your event the talk of the town.",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/easy_booking_92fea7ca01.svg",
  },
  {
    id: 4,
    title: "Bartenders, Waiters, etc.",
    description: "Expert bartenders & waiters to leave your guests in awe",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/bartenders_48bb601645.svg",
  },
];

const ShowCard1 = () => {
  return (
    <div className="flex justify-center py-10 px-4 md:px-8 lg:px-16">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-7xl">
        <section className="text-gray-600 body-font container mx-auto">
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="border-2 rounded-lg border-gray-200 border-opacity-50 p-6 flex flex-col sm:flex-row items-center bg-white"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 inline-flex items-center justify-center rounded-2xl bg-[#FFF2F2] flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <div className="flex-grow ml-4">
                  <h2 className="text-gray-900 text-lg md:text-xl font-bold mb-2">
                    {card.title}
                  </h2>
                  <p className="leading-relaxed text-sm md:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShowCard1;
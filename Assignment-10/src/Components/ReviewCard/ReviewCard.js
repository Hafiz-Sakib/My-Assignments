import React from "react";

const ReviewCard = (props) => {
  const { name, email, rating, picture, about } = props.review;
  return (
    <div class="mb-24 ml-auto mr-auto gap-4 justify-between items-center max-w-sm  rounded-lg border border-white shadow-md bg-green-400 dark:border-gray-700">
      <div class="flex justify-end px-4 pt-4"></div>
      <div class="flex flex-col items-center pb-10">
        <img
          class="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={picture}
          alt="customer img"
        />
        <h5 class="mb-1 text-xl font-medium text-red-600 ">{name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{email}</span>
        <p className="text-justify p-4">{about}</p>
        <div class="flex mt-4 space-x-3 lg:mt-6">
          <p>Rating:{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

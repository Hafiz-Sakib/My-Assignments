import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../Hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";

const HomePage = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <div className="md:flex justify-center align-center mt-14">
        <div className="md:ml-16 w-1/2 mt-24">
          <h1 className="md:text-6xl font-semibold text-green-400 mb-4">
            Best Laptop
          </h1>
          <h1 className="md:text-6xl font-semibold text-black mb-8 ">
            Best Deal
          </h1>
          <p className="text-justify">
            We provide a fast, secure, and convenient online shopping experience
            with a broad product offering in categories ranging from desktop PC,
            laptop to office equipment, camera, and smart devices. We Are always
            endeavoring to offer its customers the best possible facility –
            including multiple payment options, EMI Facility, best price, cash
            on delivery, delivery in 64 districts, free home delivery inside
            Dhaka and Chattogram city, 24/7 online support, and extensive
            customer service and warranty commitments.
          </p>
          <Link to={"/blogs"}>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
            >
              Read Blogs
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 mb-16 bg-white">
          <img
            src={
              "https://img.freepik.com/free-photo/young-blackhaired-man-demonstrating-something-bright-laptop_231208-2322.jpg?w=996&t=st=1649055273~exp=1649055873~hmac=966ad07e61beb3c855deca1352779b0f74630dbe9fb7e6749bb9f80138c88c86"
            }
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-4xl text-center text-green-400 mb-24">
            Customer's Reviews
          </h1>
        </div>
        <div className="md:grid grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review}></ReviewCard>
          ))}
        </div>
        <div className="text-center">
          <Link to={"/reviews"}>
            <button
              type="button"
              class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            >
              See All Reviews
              <svg
                class="w-5 h-5 ml-8 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

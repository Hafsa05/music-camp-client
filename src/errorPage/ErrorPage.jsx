import React from "react";
import { Link } from "react-router-dom";
import CommonButton from "../Components/CommonButton/CommonButton";
import errorImg from '../assets/images/Error.png'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={errorImg} alt="" />
      <h2 className="text-2xl font-semibold text-gray-700 m-5">Something went wrong!!...</h2>
      <Link to='/'>
        <CommonButton text={'Please Go Back'}></CommonButton>
      </Link>
    </div>
  );
};

export default ErrorPage;

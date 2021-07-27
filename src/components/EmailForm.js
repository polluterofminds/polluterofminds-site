import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { keys } from "../utils";

const EmailForm = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://arborescens.eomail5.com/form/c45b9618-ee12-11eb-96e5-06b4694bee2a.js";
    script.async = true;
    script.setAttribute("data-form", "c45b9618-ee12-11eb-96e5-06b4694bee2a")
    const emailForm = document.getElementById("email-form");
    emailForm.appendChild(script);
  }, []);

  return (
    <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
      {showConfirmation ? (
        <div>
          <p>Did we just become best friends? I think we did!</p>
        </div>
      ) : (
        <div id="email-form" />
        // <form onSubmit={collectEmail} className="sm:flex">
        //   <label htmlFor="email-address" className="sr-only">
        //     Email address
        //   </label>
        //   <input
        //     id="email-address"
        //     name="email-address"
        //     type="email"
        //     autoComplete="email"
        //     required
        //     value={email}
        //     onChange={(e) => setEmail(e.target.value)}
        //     className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
        //     placeholder="Enter your email"
        //   />
        //   <button
        //     type="submit"
        //     className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-black bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
        //   >
        //     Join the club
        //   </button>
        // </form>       
      )}
    </div>
  );
};

export default EmailForm;

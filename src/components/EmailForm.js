import axios from "axios";
import React, { useState } from "react";

const EmailForm = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [email, setEmail] = useState("");
  const collectEmail = async (e) => {
    e.preventDefault();
    try {
      const body = {
        api_key: "32c5ba7c-0967-4fba-8041-299e6b3243b6",
        email_address: email,
        status: "SUBSCRIBED",
      };
      await axios.post(
        "https://polluterofminds/netlify/functions/simple-webhook",
        JSON.stringify(body)
      );

      setShowConfirmation(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
      {showConfirmation ? (
        <div>
          <p>Did we just become best friends? I think we did!</p>
        </div>
      ) : (
        <form onSubmit={collectEmail} className="sm:flex">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email-address"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-black bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
          >
            Join the club
          </button>
        </form>
      )}
    </div>
  );
};

export default EmailForm;

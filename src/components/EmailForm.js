import React, { useState, useEffect } from "react";

const EmailForm = () => {
  const [showConfirmation] = useState(false);
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
      )}
    </div>
  );
};

export default EmailForm;

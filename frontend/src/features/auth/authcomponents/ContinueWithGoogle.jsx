import React from "react";

const ContinueWithGoogle = () => {
  return (
    <div className="google-btn">
      <a href="/api/auth/google" className="google-btn-inner">
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
          className="google-icon"
        />
        <span>Continue with Google</span>
      </a>
    </div>
  );
};

export default ContinueWithGoogle;

import React from "react";

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <div className="User">
        <div className="name">Jack Oliver</div>
        <div className="image">
          <img
            src="data:image/png;base64,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"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
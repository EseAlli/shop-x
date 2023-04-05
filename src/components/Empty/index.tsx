import React from "react";
import { Facebook as Placeholder } from "react-content-loader";

const index = () => {
  return (
    <div className="h-[60%] flex items-center">
      <div className="flex">
        <Placeholder />
        <div>
          <p>Your wishlist is empty</p>
          <p>
            Click on the heart to add an item to your wishlist or log into your
            account.
          </p>
          <button>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default index;

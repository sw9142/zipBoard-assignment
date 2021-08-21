import React, { useState } from "react";

export const Feeds = ({ id, text, user }) => {
  return (
    <>
      <li>
        {user.email} {text}
      </li>
      <button>edit</button>
      <button>delete</button>
    </>
  );
};

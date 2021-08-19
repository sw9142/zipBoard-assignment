import React, { useState } from "react";

export const Feeds = ({ key, text, user }) => {
  return (
    <li>
      {user.emails[0].address} {text}
    </li>
  );
};

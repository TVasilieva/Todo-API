import { FC } from "react";
import { ComponentProps } from "./types";

const Greeting: FC<ComponentProps> = ({ username }) => {
  return (
    <>
      {username && (
        <h2 className="user-page__greeting">Welcome, {username}!</h2>
      )}
    </>
  );
};

export default Greeting;

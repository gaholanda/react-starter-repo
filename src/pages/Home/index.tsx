import { NavLink } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home!</h1>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

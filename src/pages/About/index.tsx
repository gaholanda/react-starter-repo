import { NavLink } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <div>
      <h1>About!</h1>
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

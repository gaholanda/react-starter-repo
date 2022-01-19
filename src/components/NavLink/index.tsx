import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

type NavLinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>;

export const NavLink: React.FC<NavLinkProps> = ({ children, ...rest }) => {
  return <Link {...rest}>{children}</Link>;
};

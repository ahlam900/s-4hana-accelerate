import { forwardRef } from "react";
import { Link, LinkProps, NavLink, NavLinkProps } from "react-router-dom";
import { useLang } from "./useLang";

/** <Link> that auto-prefixes the current language. Pass canonical FR path. */
export const LLink = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...rest }, ref) => {
  const { localize } = useLang();
  const target = typeof to === "string" ? localize(to) : to;
  return <Link ref={ref} to={target} {...rest} />;
});
LLink.displayName = "LLink";

/** <NavLink> equivalent. */
export const LNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ to, ...rest }, ref) => {
  const { localize } = useLang();
  const target = typeof to === "string" ? localize(to) : to;
  return <NavLink ref={ref} to={target} {...rest} />;
});
LNavLink.displayName = "LNavLink";

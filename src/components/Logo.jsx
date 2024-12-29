import logo from "@assets/logo.png";
import { Link } from "react-router-dom";
export function Logo() {
  const handleLogoClick = () => {
    window.location.reload(); // This forces a reload of the page
  };
  return (
    <Link
      to="/"
      className="flex items-center gap-10 text-xl font-semibold text-link font-inter "
      onClick={handleLogoClick}
    >
      <img src={logo} alt="logo" />
      Blog
    </Link>
  );
}

// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import { Logo } from "./Logo";
// import { SearchInput } from "./SearchInput";
// export function Header(props) {
//   const { onSearchChange } = props;
//   return (
//     <header className="sticky top-0 z-50 mb-6 shadow md:mb-12 bg-white">
//       <div className="container mx-auto px-5 md:px-0">
//         <nav className="flex h-20 items-center justify-between">
//           <Logo />
//           <Link to="/home"  className="text-[#3B3C4A] text-lg">
//             Home
//           </Link>
//           <SearchInput onSearchChange={onSearchChange} />
//         </nav>
//       </div>
//     </header>
//   );
// }

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SearchInput } from "./SearchInput";

export function Header(props) {
  const { onSearchChange } = props;

  const handleHomeClick = () => {
    window.location.reload(); // This forces a reload of the page
  };

  return (
    <header className="sticky top-0 z-50 mb-6 shadow md:mb-12 bg-white">
      <div className="container mx-auto px-5 md:px-0">
        <nav className="flex h-20 items-center justify-between">
          <Logo />
          <Link
            to="/home"
            className="text-[#3B3C4A] text-lg"
            onClick={handleHomeClick} // Add onClick handler to trigger the reload
          >
            Home
          </Link>
          <SearchInput onSearchChange={onSearchChange} />
        </nav>
      </div>
    </header>
  );
}

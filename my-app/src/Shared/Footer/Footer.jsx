import {Link} from "react-router-dom";

export default function Footer() {
  return(
      <footer className="bg-dark text-center text-lg-start">
        <div className="text-center text-white p-4">

          © {new Date().getFullYear()} Copyright:{" "}
          <Link to="/" className="text-decoration-none text-white">
          <b> StellarHunt.com </b></Link>
        </div>
      </footer>
  );
}
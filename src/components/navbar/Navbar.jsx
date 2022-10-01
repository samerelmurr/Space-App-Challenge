import {Assets} from "../../constants/assets/index";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="home">
      <header className="primary-header flex">
        <div>
          <img src={Assets.Logo} alt="space tourism logo" className="logo" />
        </div>
        <button className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span></button>
        <nav>
            <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">
                <li className="active">
                  <Link to="/" className="ff-sans-cond uppercase text-white letter-spacing-2" >
                    <span aria-hidden="true">00</span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/destination" className="ff-sans-cond uppercase text-white letter-spacing-2">
                    <span aria-hidden="true">01</span>
                    Destination
                  </Link>
                </li>
                <li>
                  <Link to="/crew" className="ff-sans-cond uppercase text-white letter-spacing-2">
                    <span aria-hidden="true">02</span>
                    Crew
                  </Link>
                </li>
                <li>
                  <Link to="/technology" className="ff-sans-cond uppercase text-white letter-spacing-2">
                    <span aria-hidden="true">03</span>
                    Technology
                  </Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;
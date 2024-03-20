import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    // <NavLink> tag use korai selected button a active namer class add hobe. taker k style korbo:
  
    return (
        <div>
            <nav>
                {/* anchor tag use korle every a tag a click a page reload hoi. so jsx a anchor tag er alternative <Link to="link"></Link> ai tag use korbo. Kono link add korar jonno to="" to er moddhe string akare set korte hoi. Kinto css a style korar somoi a tag dia dhorte hoi.*/}
                {/* <a href="/">Navbar</a> */}
                {/* <Link to="/">Home</Link> */}
                <NavLink to="/">Home</NavLink>  
                {/* <Link> tag use korle a tager moto reload hoina. Kino kon button a click kore asi ta bugha jaina. So <NavLink> tag use korle jei button a click koresi oi button a active naner akta class automaticly add hoi. oi active class k bisinno style kora jai. */}

                {/* <a href="/about">About</a> */}
                {/* <Link to="/about">About</Link> */}
                <NavLink to="/about">About</NavLink>

                {/* <a href="/contact">Contact Us</a> */}
                {/* <Link to="contact">Contact US</Link> */}
                <NavLink to="contact">Contact US</NavLink>

                {/* <Link to="users">Users</Link> */}
                <NavLink to="users">Users</NavLink>

                {/* <Link to="posts">Posts</Link> */}
                <NavLink to="posts">Postst</NavLink>

                
            </nav>
        </div>
    );
};

export default Header;
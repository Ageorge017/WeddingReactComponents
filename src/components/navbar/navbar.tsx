import { FC } from "react";
import "./navbar.css"
import { NavbarProps } from "../../types";
import { Container } from "react-bootstrap";

const Navbar: FC<NavbarProps> = (props) => {
  
  const groomName = props.groomFullname.replace(/ .*/,'');
  const brideName = props.brideFullname.replace(/ .*/,'');
  const date = props.weddingDate.toString().split(" ");
  const month = date[1];
  const day = date[2];
  const year = date[3];
  

  return (
    <Container>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-name">
            {groomName} & {brideName}
          </div>
          <div className="logo-date">
            {month} {day}, {year}
          </div>
        </div>
        <ul className="navbarContent">
          {props.navbarSections.map((navItem)=>{return(<li className="navbarItem"><a href={navItem}>{navItem}</a></li>)})}
        </ul>
      </nav>
      
    </Container>
    
  );
};

export default Navbar;

import { FC } from "react";
import Navbar from "./navbar/navbar";

const WeddingSite: FC = () => {
  const navbarContent = [
    `Our Story`,
    `Wedding Info`,
    `Bridal Party`,
    `Album`,
    `RSVP`,
  ];
  const brideName = "Aiswaria George";
  const groomName = "Jeshwin James";
  const date = new Date(`05/29/2021`);
  
  return (
    <Navbar
      navbarSections={navbarContent}
      brideFullname={brideName}
      groomFullname={groomName}
      weddingDate={date}
    ></Navbar>
  );
};

export default WeddingSite;

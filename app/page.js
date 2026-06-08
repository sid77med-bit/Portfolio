import Profile from "./components/profile";
import NavBar from "./components/navbar";
import Outils from "./components/outils";
import Formations from "./components/formations";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <Profile />
      <Outils/>
      <Formations/>
      <Contact/>
    </>
  );
}

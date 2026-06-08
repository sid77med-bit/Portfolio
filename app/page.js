import Profile from "./components/profile";
import NavBar from "./components/navbar";
import Outils from "./components/outils";
import Formations from "./components/formations";

export default function Home() {
  return (
    <>
      <NavBar />
      <Profile />
      <Outils/>
      <Formations/>
    </>
  );
}

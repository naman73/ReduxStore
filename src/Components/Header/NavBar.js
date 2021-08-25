import CartButton from "./CartButton";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navContainer">
      <h1>ReduxCart</h1>
      <div>
        <CartButton />
      </div>
    </header>
  );
};

export default NavBar;

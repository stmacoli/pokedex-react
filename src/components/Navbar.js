import react from "react";

const Navbar = () => {
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <div>
      <nav>
        <div>
            <img src={logoImg}
            alt="PokeApi Logo" className="navbar-img" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

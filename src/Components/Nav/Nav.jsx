import "./Nav.scss"
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();

      if (data?.data) {
        setUsers([...data.data]);
      }
    })();
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <img
            className="nav__hamburger"
            src="https://via.placeholder.com/20x17"
            alt="Hamburget icon"
            width="20"
            height="17"
          />

          <Link className="nav__logo-link" to="/">
            <img
              className="nav__logo"
              src="https://via.placeholder.com/116x25"
              alt="YouTube`s Logo"
              width="116"
              height="25"
            />
          </Link>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <img
                className="nav__icon"
                src="https://via.placeholder.com/20x20"
                alt="Home icon"
                width="20"
                height="20"
              />

              <h2 className="nav__title">Home</h2>
            </Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link" to="/Trending">
              <img
                className="nav__icon"
                src="https://via.placeholder.com/20x20"
                alt="Trending icon"
                width="20"
                height="20"
              />

              <h2 className="nav__title">Trending</h2>
            </Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link" to="/Subscription">
              <img
                className="nav__icon"
                src="https://via.placeholder.com/20x20"
                alt="Subscription icon"
                width="20"
                height="20"
              />

              <h2 className="nav__title">Subscription</h2>
            </Link>
          </li>
        </ul>

        <ul className="menu__list">
          <li className="menu__item">
            <Link className="menu__link" to="/LIbrary">
              <img
                className="menu__icon"
                src="https://via.placeholder.com/20x20"
                alt="LIbrary icon"
                width="20"
                height="20"
              />

              <h2 className="menu__title">Library</h2>
            </Link>
          </li>

          <li className="menu__item">
            <Link className="menu__link" to="/History">
              <img
                className="menu__icon"
                src="https://via.placeholder.com/20x20"
                alt="History icon"
                width="20"
                height="20"
              />

              <h2 className="menu__title">History</h2>
            </Link>
          </li>

          <li className="menu__item">
            <Link className="menu__link" to="/Watch">
              <img
                className="menu__icon"
                src="https://via.placeholder.com/20x20"
                alt="Watch later icon"
                width="20"
                height="20"
              />

              <h2 className="menu__title">Watch later</h2>
            </Link>
          </li>

          <li className="menu__item">
            <Link className="menu__link" to="/Favourites">
              <img
                className="menu__icon"
                src="https://via.placeholder.com/20x20"
                alt="Favourites icon"
                width="20"
                height="20"
              />

              <h2 className="menu__title">Favourites</h2>
            </Link>
          </li>

          <li className="menu__item">
            <Link className="menu__link" to="/Liked">
              <img
                className="menu__icon"
                src="https://via.placeholder.com/20x20"
                alt="Liked videos icon"
                width="20"
                height="20"
              />

              <h2 className="menu__title">Liked videos</h2>
            </Link>
          </li>

          <li className="menu__item">
            <Link className="menu__link" to="/Music">
              <img
                className="menu__icon"
                src="https://via.placeholder.com/20x20"
                alt="Music icon"
                width="20"
                height="20"
              />

              <h2 className="menu__title">Music</h2>
            </Link>
          </li>

          <li className="menu__item">
            <Link className="menu__link" to="/Games">
              <img
                className="menu__icon"
                src="https://via.placeholder.com/20x20"
                alt="Games icon"
                width="20"
                height="20"
              />

              <h2 className="menu__title">Games</h2>
            </Link>
          </li>

          <li className="menu__item">
            <Link className="menu__link" to="/Show">
              <img
                className="menu__icon"
                src="https://via.placeholder.com/20x20"
                alt="Show more icon"
                width="20"
                height="20"
              />

              <h2 className="menu__title">Show more</h2>
            </Link>
          </li>
        </ul>

        <h2 className="subscription__heading">Subscriptions</h2>

        <ul className="subscription__list">
          {users.length > 0 &&
            users.map((user) => (
              <li className="subscription__item" key={user.id}>
                <Link className="subscription__link" to={"/channel/" + user.id}>
                  <img
                    className="subscription__avatar"
                    src={user.avatar}
                    alt={user.first_name + "`s avatar"}
                    width={26}
                    height={26}
                  />

                  <h3 className="subscription__title">
                    {user.first_name + " " + user.last_name}
                  </h3>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;

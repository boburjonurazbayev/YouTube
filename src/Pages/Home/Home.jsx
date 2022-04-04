import "./Home.scss"
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Home() {
  const [firstUser, setFirstUser] = React.useState([]);
  const [secondUser, setSecondUser]= React.useState([]);
  const [photos, setPhotos] = React.useState([]);
  

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users");

      const data = await res.json();

      if (data?.data) {
        setFirstUser(data.data.splice(1, 1));
        setSecondUser(data.data.splice(0, 1));
      }
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await res.json();

      if (data) {
        setPhotos(data.splice(0, 10));
      }
    })();
  }, []);

  return (
    <>
      <Nav />

      {/* Home */}

      <div className="home__main">
        {/* Top */}

        <div className="home__top">
          {firstUser?.length > 0 &&
            firstUser.map((user) => (
              <Link className="home__channel-link" to={"/channel/" + user.id} key={user.id}>
                <img
                  className="home__channel-image"
                  src={user.avatar}
                  alt={user.first_name + "`s avatar"}
                  width="50"
                  height="50"
                />

                <h2 className="home-channel-title">
                  {user.first_name + " " + user.last_name}
                </h2>
              </Link>
            ))}

          <ul className="video__list">
            {photos?.length > 0 &&
              photos.map((photo) => (
                <li className="video__item " key={photo.id}>
                  <Link className="video__link" to={"/video/" + photo.id}>
                    <img
                      className="video__image"
                      src={photo.url}
                      alt={photo.title + "`s photo"}
                      width={250}
                      height={150}
                    />

                    <p className="video__title">{photo.title}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Recommended */}

        <div className="home__rec">
          <h2 className="rec-video__heading">Recommended</h2>

          <ul className="rec-video__list">
            {photos?.length > 0 &&
              photos.map((photo) => (
                <li className="rec-video__item " key={photo.id}>
                  <Link className="rec-video__link" to={"/video/" + photo.id}>
                    <img
                      className="rec-video__image"
                      src={photo.url}
                      alt={photo.title + "`s photo"}
                      width={540}
                      height={150}
                    />

                    <p className="rec-video__title">{photo.title}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Bottom */}

        <div className="home__bottom">
        {secondUser?.length > 0 &&
            secondUser.map((user) => (
              <Link className="home__channel-link" to={"/channel/" + user.id} key={user.id}>
                <img
                  className="home__channel-image"
                  src={user.avatar}
                  alt={user.first_name + "`s avatar"}
                  width="50"
                  height="50"
                />

                <h2 className="home-channel-title">
                  {user.first_name + " " + user.last_name}
                </h2>
              </Link>
            ))}

          <ul className="video__list">
            {photos?.length > 0 &&
              photos.map((photo) => (
                <li className="video__item " key={photo.id}>
                  <Link className="video__link" to={"/video/" + photo.id}>
                    <img
                      className="video__image"
                      src={photo.url}
                      alt={photo.title + "`s photo"}
                      width={250}
                      height={150}
                    />

                    <p className="video__title">{photo.title}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;

import "./Channel.scss";
import React from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Channel() {
  const [user, setUser] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);
  const [firstphotos, setFirstPhotos] = React.useState([]);

  const { user_id } = useParams();

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users/" + user_id);

      const data = await res.json();

      if (data?.data) {
        setUser({ ...data?.data });
      }
    })();
  }, [user_id]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users?page=2");

      const data = await res.json();

      if (data?.data) {
        setUsers(data?.data?.splice(0, 3));
      }
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await res.json();

      if (data) {
        setPhotos(data.splice(0, 6));
        setFirstPhotos(data.splice(0, 1));
      }
    })();
  }, []);

  return (
    <>
      <Nav />
      <div className="channel">
        <img
          className="channel__bgr-img"
          src="https://via.placeholder.com/1595x280"
          alt="Channel background image"
          width="1595"
          height="280"
        />

        <div className="channel-top">
          {user && (
            <div className="channel-user__info">
              <img
                className="channel-user__avatar"
                src={user.avatar}
                alt="Avatar"
                width={80}
                height={80}
              />

              <h2 className="channel-user__name">
                {user.first_name + " " + user.last_name}
              </h2>
            </div>
          )}

          <button className="channel__subscribe-btn">Subscribe</button>
        </div>

        {/* Channel Main */}

        <div className="channel-main">
          <div className="channel-main__left">
            <ul className="channel-menu">
              <li className="channel-menu__item">
                <Link className="channel-menu__link" to={"/channel/" + user_id}>
                  Home
                </Link>
              </li>

              <li className="channel-menu__item">
                <Link className="channel-menu__link" to={"/channel/" + user_id}>
                  Videos
                </Link>
              </li>

              <li className="channel-menu__item">
                <Link className="channel-menu__link" to={"/channel/" + user_id}>
                  Playlists
                </Link>
              </li>

              <li className="channel-menu__item">
                <Link className="channel-menu__link" to={"/channel/" + user_id}>
                  Channels
                </Link>
              </li>

              <li className="channel-menu__item">
                <Link className="channel-menu__link" to={"/channel/" + user_id}>
                  Discussion
                </Link>
              </li>

              <li className="channel-menu__item">
                <Link className="channel-menu__link" to={"/channel/" + user_id}>
                  About
                </Link>
              </li>
            </ul>

            {firstphotos &&
              firstphotos.map((firstphotos) => (
                <Link className="channel-main__info" key={firstphotos.id} to={"/video/" + firstphotos.id}>
                  <img
                    className="channel-main__first-video"
                    src={firstphotos.url}
                    alt={firstphotos.title}
                    width="540"
                    height="250"
                  />

                  <span className="channel-main__first-about">
                    <span className="channel-main__first-heading">
                      Choosing The Best Audio Player Software For Your Computer
                    </span>

                    <span className="channel-main__first-title">
                      {firstphotos.title}
                    </span>
                  </span>
                </Link>
              ))}
          </div>

          {/* Channel right */}
          <div className="channel-right">
            <h2 className="channel-right__heading">Recommended channel</h2>
            <ul className="channel-right__list">
              {users.length > 0 &&
                users.map((user) => (
                  <li className="channel-right__item" key={user.id}>
                    <Link
                      className="channel-right__user-link"
                      to={"/channel/" + user.id}
                    >
                      <img
                        className="channel-right__user-avatar"
                        src={user.avatar}
                        alt={user.first_name + "` avatar"}
                        width="50"
                        height="50"
                      />

                      <h3 className="channel-right__user-name">
                        {user.first_name + " " + user.last_name}
                      </h3>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Channel bottom */}

        <div className="channel-bottom">
          {user && (
            <h2 className="channnel__user-name" key={user.id}>
              {user.first_name + " " + user.last_name + " videos"}
            </h2>
          )}

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

export default Channel;

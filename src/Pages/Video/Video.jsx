import "./Video.scss"
import React from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Video() {
  const [photo, setPhoto] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);

  const { photo_id } = useParams();

  React.useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos/" + photo_id
      );

      const data = await res.json();

      if (data) {
        setPhoto({ ...data });
      }
    })();
  }, [photo_id]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await res.json();

      if (data) {
        setPhotos(data.splice(0, 6));
      }
    })();
  }, []);

  return (
    <>
      <Nav />

      {/* Video left */}
      <div className="video">
          {photo && (
            <div className="video-laft">
              <img
                className="video-left__image"
                src={photo.url}
                alt="Avatar"
                width={1100}
                height={500}
              />

              <h2 className="video-left__title"> {photo.title}</h2>
            </div>
          )}

          {/* Video`s Channel  */}

          <div className="video-channel">
            <div className="video-channel__inner">
              <img
                className="video-channel__image"
                src="https://via.placeholder.com/80x80"
                alt="Food & drink chanel image"
                width="80"
                height="80"
              />

              <span className="video-channel__info">
                <span className="video-channel__heading">Food & Drink</span>

                <span className="video-channel__text">
                  A successful marketing plan relies heavily on the
                  pulling-power of advertising copy. Writing result-oriented ad
                  copy is difficult, as it must appeal to, entice, and convince
                  consumers to take action. There is no magic formula to write
                  perfect ad copy; it is based on a number of factors, including
                  ad placement, demographic, even the consumer’s mood when they
                  see your ad.{" "}
                </span>
              </span>
            </div>

            <button className="channel__subscribe-btn">Subscribe</button>
          </div>
        </div>

        {/* Video Right */}
        <div className="video-right">
          <h2 className="video-right__heading">Next</h2>

          <ul className="video-right__list">
            {photos.length > 0 &&
              photos.map((photo) => (
                <li className="video-right__item" key={photo.id}>
                  <Link className="video-right__link" to={"/video/" + photo.id}>
                    <img
                      className="video-right__image"
                      src={photo.url}
                      alt={photo.title}
                      width="365"
                      height="210"
                    />

                    <h3 className="video-right__title">{photo.title}</h3>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
    </>
  );
}

export default Video;

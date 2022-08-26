export default function AccomodationPageInformation({ accomodation }) {
  const ratingScale = [1, 2, 3, 4, 5];

  return (
    <section className="accomodationInfo">
      <div className="primaryInformation">
        <h1>{accomodation.title}</h1>
        <p>{accomodation.location}</p>
        {accomodation.tags.map((tag) => (
          <span key={tag} className="accomodationTag">
            {tag}
          </span>
        ))}
      </div>
      <div className="secondaryInformation">
        <div className="hostInformation">
          <p>{accomodation.host.name}</p>
          <img
            className="accomodationHostPicture"
            src={accomodation.host.picture}
            alt={accomodation.host.name}
          />
        </div>
        <div className="ratingsInformation">
          {ratingScale.map((scale, index) => (
            <i
              className={`fas fa-star${
                scale <= accomodation.rating ? " colored" : "" // Number of stars colored
              }`}
              key={`star-${index}`}
            ></i>
          ))}
        </div>
      </div>
    </section>
  );
}

import starOrange from "../assets/starOrange.jpg";
import starGris from "../assets/starGris.jpg";

function Rating({ rating }) {
  console.log(rating);
  const range = [1, 2, 3, 4, 5];

  // étoiles jaunes
  const RatingYellow =
    rating === "Orange" ? (
      <img src={starGris} alt="star gris" />
    ) : (
      <img src={starOrange} alt="star orange " />
    );

  const rest = 6 - rating;
  console.log(rest);
  // étoiles grises restantes
  const RestRating =
    rest === "Orange" ? (
      <img src={starOrange} alt="star orange" />
    ) : (
      <img src={starGris} alt="star gris" />
    );

  return (
    <div>
      {range.map((rangeStar) =>
        rating >= rangeStar ? (
          <span key={rangeStar.toString()}>{RatingYellow} </span>
        ) : null
      )}

      {range.map((rangeSta) =>
        rest > rangeSta ? (
          <span key={rangeSta.toString()}>{RestRating} </span>
        ) : null
      )}
    </div>
  );
}

export default Rating;

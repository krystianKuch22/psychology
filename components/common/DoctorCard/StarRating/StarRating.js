import Star from "../../Icons/Star/Star";

export default function StarRating({ rating }) {
  const fillPercentage = rating / 5;

  return <Star fill={fillPercentage} />;
}

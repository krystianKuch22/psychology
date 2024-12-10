import Image from "next/image";
import Star from "../Icons/Star/Star";
import { StyledDoctorCard } from "./DoctorCard.styles";
import StarRating from "./StarRating/StarRating";

export default function DoctorCard({ language, doctor }) {
  let sum = 0;
  doctor.opinions.forEach((opinion) => {
    sum += opinion.opinionRating;
  });

  const rating = sum / doctor.opinions.length;

  return (
    <StyledDoctorCard>
      <div className="photoBox">
        <Image
          src={doctor.photo}
          alt="Doctor photo"
          fill
          style={{ objectFit: "cover" }}
          sizes="50%"
        />
      </div>
      <div className="firstInfoBox">
        <div className="ratingBox">
          <StarRating rating={rating} />
          <span>{rating}</span>
          <span className="opinions">
            ({doctor.opinions.length} {language.opinions})
          </span>
          <span className="distinguished">
            {doctor.isDistinguished ? (
              <>
                <Star fill={1} /> {language.distinguished}
              </>
            ) : (
              ""
            )}
          </span>
        </div>
        <h3>{doctor.firstName + " " + doctor.lastName}</h3>
        <span className="categorySpecialist">{doctor.specialization}</span>
      </div>
    </StyledDoctorCard>
  );
}

import Link from "next/link";
import DoctorCard from "../DoctorCard/DoctorCard";
import { StyledFeaturedDoctorBox } from "./FeaturedDoctorBox.styles";
import { useState } from "react";

export default function FeaturedDoctorBox({language, doctor }) {

    const [showAll, setShowAll] = useState(false)

    const visibletags = showAll ? doctor.tags : doctor.tags.slice(0, 3)
    const extratags = doctor.tags.length - 3
  return (
    <StyledFeaturedDoctorBox>
      <DoctorCard language={language} doctor={doctor} />
      <div className="description">
        <span>
          {doctor.description}
        </span>
        <div className="decoLine"></div>
        <div className="tags">
            {visibletags.map(tag => {return <Link href={"/" + tag} key={tag}>{tag}</Link>})}
            {!showAll && extratags > 0 && (<button onClick={() => setShowAll(true)}>+{extratags}</button>)}
        </div>
      </div>
    </StyledFeaturedDoctorBox>
  );
}

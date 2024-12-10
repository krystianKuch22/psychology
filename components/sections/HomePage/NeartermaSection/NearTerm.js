import Wrapper from "@/components/layout/Wrapper/Wrapper";
import { StyledNearTerm } from "./NearTeram.styles";
import FeaturedDoctorBox from "@/components/common/FeaturedDoctorBox/FeaturedDoctorBox";

export default function NearTerm({ language, doctors }) {
  return (
    <StyledNearTerm>
      <Wrapper>
        <h2>{language.nearTerm}</h2>
        <div className="nearTermBox">
          {doctors.map((doctor) => {
            return <FeaturedDoctorBox language={language} doctor={doctor} key={doctor.lastName}/>;
          })}
        </div>
      </Wrapper>
    </StyledNearTerm>
  );
}

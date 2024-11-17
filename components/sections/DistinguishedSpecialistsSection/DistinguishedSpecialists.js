import Wrapper from "@/components/layout/Wrapper/Wrapper";
import { StyledDistinguishedSpacialists } from "./DistinguishedSpecialists.styles";
import FeaturedDoctorBox from "@/components/common/FeaturedDoctorBox/FeaturedDoctorBox";

export default function DistinguishedSpecialists({ language, doctors }) {
  return (
    <StyledDistinguishedSpacialists>
      <Wrapper>
        <h2>{language.distinguishedSpecialistsSectionTitle}</h2>
        <div className="featuredDoctorsBox">
          {doctors.map((doctor) => {
            return <FeaturedDoctorBox language={language} doctor={doctor} key={doctor.lastName}/>;
          })}
        </div>
      </Wrapper>
    </StyledDistinguishedSpacialists>
  );
}

import Wrapper from "@/components/layout/Wrapper/Wrapper";
import { StyledResutlSection } from "./ResultSection.styles";
import { useEffect, useState } from "react";
import DoctorCard from "@/components/common/DoctorCard/DoctorCard";
import Scheduler from "../Scheduler/Scheduler";

export default function ResultSection({ language, filters, doctors }) {
  const visibleFilters = Object.values(filters).slice(0, 2);
  const hiddenFilters = Object.values(filters).slice(2, 17).length;

  const filterDoctors = (doctors, filters) => {
    return doctors.filter((doctor) => {
      return Object.entries(filters).every(([key, value]) => {
        if (key === "rate") {

          let rating = 0
          let numberOfOpinions = 0

          doctor.opinions.forEach(opinion => {
            rating += opinion.opinionRating
            numberOfOpinions++
          });

          return rating/numberOfOpinions >= value;
        }
        // do zweryfikowania jakie konkretnie bedą filtry, jaka będzie ich struktura

        return (
          String(doctor[key]).toLowerCase() === String(value).toLowerCase()
        );
      });
    });
  };

  const filteredDoctors = filterDoctors(doctors, filters);
  console.log(filteredDoctors);

  return (
    <StyledResutlSection>
      <Wrapper>
        <div className="allContentBox">
          <div className="headerDiv">
            <span>
              <b>{visibleFilters.join(", ")}</b>{" "}
              {hiddenFilters <= 0 ? "" : " +" + hiddenFilters + " filtry"}
            </span>
            <div>
              <select>
                <option>ilość wyników: 20</option>
              </select>{" "}
              <button>pokaż mapę</button>
            </div>
          </div>
          <div className="doctorsBox">
            {filteredDoctors.map((doctor) => {
              return (
                <div className="doctorBox">
                  <div className="doctorInfo">
                    <DoctorCard language={language} doctor={doctor} />
                    <p>{doctor.description}</p>
                    <div className="decoline"></div>
                    <button>lokalizacja</button>
                    <span>cena({doctor.paymentMethod.join(', ')})</span>
                  </div>
                  <div className="calendarBox"><Scheduler/></div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </StyledResutlSection>
  );
}

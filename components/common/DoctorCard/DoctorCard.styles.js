import styled from "styled-components";

export const StyledDoctorCard = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 0.5em;

  .photoBox {
    position: relative;
    width: 6em;
    height: 6em;

    img {
      border-radius: 8px;
    }
  }

  .firstInfoBox {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .ratingBox {
    display: flex;
    align-items: center;
    gap: 0.5em;

    .opinions {
      color: #aeaeae;
    }
  }

  .distinguished {
    display: flex;
    align-items: center;
    gap: 0.25em;
    background-color: #bbffe7;
    padding: 0.25em 0.5em;
    border-radius: 8px;
    svg {
      width: 1em;
      color: #00744a !important;
      path {
        fill: #00744a;
      }
    }
  }

  .categorySpecialist {
    color: #454545;
  }
`;

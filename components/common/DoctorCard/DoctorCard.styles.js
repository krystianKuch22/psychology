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
      color: var(--opinions-text-color);
    }
  }

  .distinguished {
    display: flex;
    align-items: center;
    gap: 0.25em;
    background-color: var(--distinguished-color);
    padding: 0.25em 0.5em;
    border-radius: 8px;
    svg {
      width: 1em;
      color: var(--distinguished-star-color) !important;
      path {
        fill: var(--distinguished-star-color);
      }
    }
  }

  .categorySpecialist {
    color: var(--doctor-category-text-color);
  }
`;

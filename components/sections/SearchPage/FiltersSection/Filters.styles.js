import styled from "styled-components";

export const StyledFilters = styled.section`
  background-color: var(--background-section-3-color);

  .allContentBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .filterClearButton {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .filtersBox {
      .customSelect {
        width: 10em;
        padding: 0.5em 1em;
        border-radius: 8px;
        border-color: var(--input-border-color);
        color: var(--input-border-color);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("/svg/selectArrow.svg");
        background-repeat: no-repeat;
        background-position: right 5px center;
        background-size: 15px 15px;

        option {
          color: black;
        }
      }

      .customSelect.selected {
        color: black;
      }
    }
  }
`;

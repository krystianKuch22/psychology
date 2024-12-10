import styled from "styled-components";

export const StyledFilters = styled.section`
  background-color: var(--background-section-3-color);

  .allContentBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1em 0;

    .filterClearButton {
      display: flex;
      justify-content: space-between;
      width: 100%;

      button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        color: var(--second-text-color);
      }
    }

    .filtersBox {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.5em;
      width: 100%;
      margin: 1em 0;

      .customLabel{
        width: 16%;
        height: 3em;
      }

      .customSelect {
        width: 100%;
        height: 100%;
        min-width: 160px;
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

      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        min-width: 160px;
        width: 16%;
        font-size: .8rem;
        text-transform: uppercase;
        font-weight: bold;
        background: none;
        background-color: #fff;
        border-radius: 8px;
        padding: 0.5em 1em;

        svg {
          width: 1.25em;
        }

        path {
          stroke: black;
        }
      }
    }

    .filtersBoolBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      width: 100%;
      gap: 0.5em;

      label {
        display: flex;
        align-items: center;
      }
      .customCheckbox input[type="checkbox"] {
        display: none;
      }

      /* Stylowanie kontenera checkboxa */
      .customCheckbox span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid var(--second-dark-color); /* Kolor obramowania */
        background-color: white; /* Domyślne tło */
        border-radius: 4px; /* Zaokrąglone rogi */
        position: relative;
        margin-right: 8px; /* Odstęp między checkboxem a tekstem */
        cursor: pointer; /* Zmiana kursora na wskaźnik */
        transition: background-color 0.3s, border-color 0.3s;
      }

      /* Zmiana koloru tła, gdy checkbox jest zaznaczony */
      .customCheckbox input[type="checkbox"]:checked + span {
        background-color: var(--primary-green-color); /* Tło zaznaczenia */
        border-color: var(--primary-green-color); /* Obramowanie zaznaczenia */
      }

      /* Ptaszek (checkmark) w zaznaczonym checkboxie */
      .customCheckbox input[type="checkbox"]:checked + span::after {
        content: ""; /* Tworzenie ptaszka */
        position: absolute;
        width: 6px; /* Szerokość ptaszka */
        height: 10px; /* Wysokość ptaszka */
        border: solid #ffffff; /* Kolor ptaszka */
        border-width: 0 2px 2px 0; /* Stylizacja ptaszka */
        top: 40%; /* Pozycja względem góry */
        left: 45%; /* Pozycja względem lewej krawędzi */
        transform: rotate(45deg) translate(-80%, -20%); /* Obrót ptaszka o 45 stopni */
      }

      label {
        margin-left: 0.3em;
      }
    }
  }
`;

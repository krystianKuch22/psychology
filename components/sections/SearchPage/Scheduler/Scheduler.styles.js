import styled from "styled-components";

export const StyledScheduler = styled.div`
  /* margin-left: 1em; */
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  .fc {
    width: 85%;
    height: 100%;
    /* background-color: yellow; */
    table {
      border: none;
      th {
        border: none;
      }
      td {
        border: none;
      }
      tr {
        height: 100%;
      }
    }

    .fc-daygrid-day.fc-day-today {
      background-color: #fff;
    }
  }

  .fc-timegrid {
    /* background-color: red; */
  }

  .fc-timegrid-slot {
    display: none;
    background-color: green;
  }

  .fc-scrollgrid-section-liquid {
    display: none;
  }

  .fc-day {
    button {
      display: block;
      width: 100%;
      background-color: var(--background-available-hour);
      color: var(--available-hour-text-color);
      border: none;
      padding: 0.3em;
      margin-bottom: 0.2em;
      cursor: pointer;

      
    }

    .unavailable {
      padding: 0.3em;
      text-align: center;
      margin-bottom: 0.2em;
    }
  }
  .fc-daygrid-day-top {
    /* height: 100%; */
    /* background-color: blue; */
    div{
      width: 5em;
    }
  }
  .fc-daygrid-day-events {
    /* height: 100%; */
    /* background-color: green; */
    display: none;
  }

  .fc-timegrid-axis {
    width: 0; /* Zmniejszenie szerokości do 0 */
  }

  .fc-timegrid-axis .fc-scrollgrid-shrink-frame {
    display: none; /* Usunięcie zawartości */
  }

  .fc-toolbar-title {
    display: none;
  }
  .fc-prev-button {
    position: absolute;
    top: 1.5em;
    left: -3em;
    z-index: 15;
  }
  .fc-next-button {
    position: absolute;
    top: 1.5em;
    right: -3em;
    z-index: 15;
  }
  .fc-toolbar {
    position: relative;
    height: 0;
  }

  .fc-daygrid-day-top {
    display: flex;
    justify-content: center;
  }

  .fc-scroller {
    height: 100%;
  }
  .fc-scroller-harness {
    height: 100%;
  }
  .fc-view-harness {
    .fc-timegrid-divider {
      display: none;
    }
  }
  .fc-daygrid-body {
    height: 100%;

    table {
      height: 100%;
    }

    tbody {
      border: none;
    }
  }
`;

import styled from "styled-components";

export const StyledResutlSection = styled.section`
  background-color: var(--primary-background-color);

  .headerDiv {
    display: flex;
    justify-content: space-between;
    padding-top: 1em;
    padding-bottom: 2em;

    select {
      min-width: 160px;
      padding: 0.4em 1em 0.4em 0.4em;
      font-size: 0.8rem;
      border-color: var(--input-border-color);
      border-radius: 8px;
    }

    button {
      background: none;
      border: none;
      padding: 0.7em 0 0.7em 0.4em;
      font-size: 0.7rem;
      text-transform: uppercase;
    }
  }

  .doctorsBox {


    .doctorBox { 
      display: flex;
      height: 40vh;
      border: solid 1px var(--input-border-color);
      border-radius: 8px;
      padding: 0.5em;
      padding-bottom: 1em;
      margin-bottom: 1em;

      .calendarBox{
        display: flex;
        justify-content: end;
        align-items: center;
        width: 100%;
        height: 100%;
      }

    }

    .doctorInfo {
      display: flex;
      flex-direction: column;
      gap: 0.4em;
      width: 30%;

      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
      }

      .decoline{
        width: 100%;
        height: 1px;
        background-color: var(--input-border-color);
        margin: 0.5em 0;
      }

      button{
        background: none;
        border: none;
        text-align: left;
      }
    }
  }
`;

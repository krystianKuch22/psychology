import styled from "styled-components";

export const StyledFeaturedDoctorBox = styled.div`
  width: 30vw;
  background-color: #fff;
  border-radius: 8px;
  padding-bottom: 0.5em;

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 0.5em;

    span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      color: #454545;
    }

    .decoLine {
      width: 100%;
      height: 2px;
      margin-bottom: 0.5em;
      background-color: #dddddd;
    }

    a {
      padding: 0.5em 0.25em;
      text-decoration: none;
      color: #454545;
      background-color: #f2f3ff;
      border-radius: 8px;
    }

    .tags {
      display: flex;
      gap: 0.5em;

      button {
        background: none;
        border: none;
        padding: 0.5em 0.25em;
        color: #454545;
        background-color: #f2f3ff;
        border-radius: 8px;
      }
    }
  }
`;

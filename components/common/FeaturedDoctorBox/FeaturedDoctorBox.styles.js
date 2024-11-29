import styled from "styled-components";

export const StyledFeaturedDoctorBox = styled.div`
  width: 30vw;
  background-color: var(--primary-background-color);
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
      color: var(--doctor-description-text-color);
    }

    .decoLine {
      width: 100%;
      height: 2px;
      margin-bottom: 0.5em;
      background-color: var(--decoline-color);
    }

    a {
      padding: 0.5em 0.25em;
      text-decoration: none;
      color: var(--tag-text-color);
      background-color: var( --background-tag-doctor-card-color);
      border-radius: 8px;
    }

    .tags {
      display: flex;
      gap: 0.5em;

      button {
        background: none;
        border: none;
        padding: 0.5em 0.25em;
        color: var(--tag-text-color);
        background-color: var( --background-tag-doctor-card-color);
        border-radius: 8px;
      }
    }
  }
`;

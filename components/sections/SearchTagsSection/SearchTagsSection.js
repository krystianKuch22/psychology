import Wrapper from "@/components/layout/Wrapper/Wrapper";
import { StyledSearchTagsSection } from "./SearchTagsSection.styles";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import CenterFlexRow from "@/components/layout/CenterFlexRow/CenterFlexRow";
import Link from "next/link";

export default function SearchTagsSection({ language }) {
  const tags = [
    language.tag1,
    language.tag2,
    language.tag3,
    language.tag4,
    language.tag5,
    language.tag6,
    language.tag7,
    language.tag8,
    language.tag9,
    language.tag10,
  ];

  return (
    <StyledSearchTagsSection>
      <Wrapper>
        <div className="tagsFlex">
          <h2>{language.tagSectionTitle}</h2>
          <div className="tagsBox">
            {tags.map((tag) => {
              return (
                <Link href={"/" + tag} key={tag}>
                  {tag}
                </Link>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </StyledSearchTagsSection>
  );
}

import Wrapper from "@/components/layout/Wrapper/Wrapper";
import { StyledFilters } from "./Filters.styles";
import {
  filters,
  filtersBool,
  filtersTab,
  namesOfFilters,
} from "@/dataExemples/filters";
import { useRef, useState } from "react";
import ClearIcon from "@/components/common/Icons/ClearIcon/ClearIcon";
import SearchIcon from "@/components/common/Icons/SearchIcon/SearchIcon";

export default function Filters({ language, changeSelectedFilters }) {
  const [isSelected, setIsSelected] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");

  const [selectedName, setSelectedName] = useState("");

  const [selectedValues, setSelectedValues] = useState({});

  const [moreLessFilters, setMoreLessFilters] = useState({
    text: "więcej filtrów",
    number: 5,
  });

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    setSelectedName(e.target.name);
    setIsSelected(e.target.value !== "");
    setSelectedValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    
  };

  const handleChangeCheckbox = (e) => {
    const { value, checked } = e.target;

    setSelectedValues((prev) => {
      return {
        ...prev,
        [value]: checked,
      };
    });
  };

  const findKey = (obj, value) => {
    const keys = Object.keys(obj);
    const found = keys.find((key) => key === value);

    return found;
  };

  const clearFilters = () => {
    setSelectedValues({});
  };

  const changeMoreLessFilter = () => {
    if (moreLessFilters.number === 5)
      setMoreLessFilters({ text: "mniej filtrów", number: 17 });
    else setMoreLessFilters({ text: "więcej filtrów", number: 5 });
  };

  changeSelectedFilters(selectedValues);

  return (
    <StyledFilters>
      <Wrapper>
        <div className="allContentBox">
          <div className="filterClearButton">
            <span>{language.searchSpanFilter}</span>
            <button onClick={clearFilters}>
              <ClearIcon />
              {language.searchClearButtonText}
            </button>
          </div>
          <div className="filtersBox">
            {filters.slice(0, moreLessFilters.number).map((filter) => {
              return (
                <label key={filter.filterName} className="customLabel">
                  <select
                    className={`customSelect ${
                      findKey(selectedValues, filter.filterName) ===
                      filter.filterName
                        ? "selected"
                        : ""
                    }`}
                    onChange={handleChange}
                    value={
                      findKey(selectedValues, filter.filterName)
                        ? selectedValues[filter.filterName]
                        : ""
                    }
                    name={filter.filterName}
                  >
                    <option value="">{filter.filterPlaceholder}</option>
                    {filter.values.map((option) => {
                      return (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </label>
              );
            })}
            <button className="moreBtn" onClick={changeMoreLessFilter}>
              <SearchIcon /> {moreLessFilters.text}
            </button>
          </div>
          <div className="filtersBoolBox">
            {filtersBool.slice(0, moreLessFilters.number - 2).map((filter) => {
              return (
                <div key={filter.filterName} className="customCheckbox">
                  <label htmlFor={filter.filterName}>
                    <input
                      id={filter.filterName}
                      name={filter.filterName}
                      type="checkbox"
                      value={filter.filterName}
                      checked={
                        findKey(selectedValues, filter.filterName)
                          ? selectedValues[filter.filterName]
                          : ""
                      }
                      onChange={handleChangeCheckbox}
                    />
                    <span></span>
                    <div>{filter.filterPlaceholder}</div>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </StyledFilters>
  );
}

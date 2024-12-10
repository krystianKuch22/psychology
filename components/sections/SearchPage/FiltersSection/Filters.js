import Wrapper from "@/components/layout/Wrapper/Wrapper";
import { StyledFilters } from "./Filters.styles";
import {
  filters,
  filtersBool,
  filtersTab,
  namesOfFilters,
} from "@/dataExemples/filters";
import { useRef, useState } from "react";

export default function Filters({ language }) {
  const [isSelected, setIsSelected] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");

  const [selectedName, setSelectedName] = useState("");

  const [selectedValues, setSelectedValues] = useState({});

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

  return (
    <StyledFilters>
      <Wrapper>
        <div className="allContentBox">
          <div className="filterClearButton">
            <span>{language.searchSpanFilter}</span>
            <button>{language.searchClearButtonText}</button>
          </div>
          <div className="filtersBox">
            {filters.map((filter) => {
              return (
                <label key={filter.filterName}>
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
          </div>
          <div className="filtersBoolBox">
            {filtersBool.map((filter) => {
              return (
                <div key={filter.filterName}>
                  <input
                    id={filter.filterName}
                    name={filter.filterName}
                    type="checkbox"
                    value={filter.filterName}
                    onChange={handleChangeCheckbox}
                  />
                  <label htmlFor={filter.filterName}>
                    {filter.filterPlaceholder}
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

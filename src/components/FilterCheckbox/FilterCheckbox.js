import React from "react";

function FilterCheckbox ({ setIsShortMovie }) {

  const [checkedInput, setCheckedInput] = React.useState(true);

  const handleToggleCheck = () => {
    setCheckedInput(!checkedInput);
    setIsShortMovie(!checkedInput);
  };

  return(
    <div className="search-form__filter">
      <label htmlFor="switcher" className="search-form__filter-label">
        <input type="checkbox" className="search-form__filter-btn" checked={checkedInput} onChange={handleToggleCheck} id="switcher"/>
        <span className="search-form__filter-fake"/>
        <span className="search-form__filter-name">Короткометражки</span>
      </label>
  </div>
  )
}

export default FilterCheckbox;
import React from "react";

function FilterCheckbox ({ setIsShortMovie, checkboxIsChecked }) {

  const [checkedInput, setCheckedInput] = React.useState(checkboxIsChecked);
  const location = window.location.pathname;

  const handleToggleCheck = () => {
    setCheckedInput(!checkedInput);
    setIsShortMovie(!checkedInput);
  };

  React.useEffect(() => {
    if(location==="/movies") {
      setCheckedInput(checkboxIsChecked)
    }
  }, [checkboxIsChecked])

  return(
    <div className="search-form__filter">
      <label htmlFor="switcher" className="search-form__filter-label">
        <input type="checkbox" className="search-form__filter-btn" checked={checkedInput || ""} onChange={handleToggleCheck} id="switcher"/>
        <span className="search-form__filter-fake"/>
        <span className="search-form__filter-name">Короткометражки</span>
      </label>
  </div>
  )
}

export default FilterCheckbox;
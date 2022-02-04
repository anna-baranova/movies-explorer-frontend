import React from "react";

function FilterCheckbox ({ setIsShortMovie }) {

  const [checkedInput, setCheckedInput] = React.useState(true);

  const handleToggleCheck = () => {
    setCheckedInput(!checkedInput);
    setIsShortMovie(!checkedInput);
  };

  return(
    <div className="search-form__filter">
      {/* <button className="search-form__filter-btn"></button> */}
      <input 
        type="checkbox"
        className="search-form__filter-btn"
        checked={checkedInput}
        onChange={handleToggleCheck}
      />
      <p className="search-form__filter-name">Короткометражки</p>
  </div>
  )
}

export default FilterCheckbox;
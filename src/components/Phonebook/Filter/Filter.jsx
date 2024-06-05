import React, { Component } from "react";
import { FilterStyled } from "./Filter.styled";


const Filter = ({ value, onChange }) => {
    return (
      <>
        <h2>Find contacs by name</h2>
        <FilterStyled type="text" value={value} onChange={onChange} />
      </>
    );
};


export default Filter;
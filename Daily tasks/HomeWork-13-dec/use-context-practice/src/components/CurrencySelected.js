import React from "react";
import CurrencySelectorContext from "../contexts/CurrencySelectorContext";

const CurrencySelected = () => {
  return (
    <div>
      Currency is :
      <CurrencySelectorContext.Consumer>
        {(currency) => {
          return currency;
        }}
      </CurrencySelectorContext.Consumer>
    </div>
  );
};

export default CurrencySelected;

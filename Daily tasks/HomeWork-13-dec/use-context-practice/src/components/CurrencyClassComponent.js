import React from "react";
import CurrencySelectorContext from "../contexts/CurrencySelectorContext";

class CurrencyClassComponent extends React.Component {
  static contextType = CurrencySelectorContext;
  render() {
    return <div>Currency Selected : {this.context}</div>;
  }
}

export default CurrencyClassComponent;

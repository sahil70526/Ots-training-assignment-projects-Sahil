import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import CurrencySelectorContext from "../contexts/CurrencySelectorContext";
import AmountEnteredContext from "../contexts/AmountEnteredContext";
import PaymentModeSelectorContext from "../contexts/PaymentModeSelectorContext";

const BillPayment = () => {
  const currency = useContext(CurrencySelectorContext);
  const amount = useContext(AmountEnteredContext);
  const paymentMode = useContext(PaymentModeSelectorContext);

  const getCurrencySymbol = () => {
    if (currency === "rupee") {
      return "rupee sign";
    } else if (currency === "dollar") {
      return "dollar sign";
    } else if (currency === "euro") {
      return "euro sign";
    } else if (currency === "pound") {
      return "pound sign";
    } else if (currency === "ruble") {
      return "ruble sign";
    } else if (currency === "yen") {
      return "yen sign";
    }
  };

  return (
    <div>
      You have to pay <Icon name={getCurrencySymbol()} />
      {amount}. You are paying through :-{paymentMode}.
    </div>
  );
};

export default BillPayment;

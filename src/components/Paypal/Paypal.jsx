import { Grid } from "@material-ui/core";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { addOrder } from "../../api/api";
const PayPalButton = (props) => {
  console.log(props);
  return (
    <Grid>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AWoMlX6SCeH9LdWsUg8Tc2wc8juZKVSTCtgOZLq9gfkFq9dEN9jawlo1-nAHFSwpzTzWEAFTPKQFsMxO",
        }}
      >
        <PayPalButtons
          style={{
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "checkout",
            size: "expanded",
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: Math.round(props?.total),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(async (details) => {
              const data = JSON.parse(localStorage.getItem("data"));
              data.listOrder = props.listOrder;
              data.paymentMethod = "paypal";
              data.paypalID = details.id;
              await addOrder(data).then((res) => {
                localStorage.removeItem("data");
                props.handleSuccess();
              });
            });
          }}
        />
      </PayPalScriptProvider>
    </Grid>
  );
};

export default PayPalButton;

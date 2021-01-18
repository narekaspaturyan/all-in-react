import React from "react";
import Select from "../../utils/Select";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "select":
      return <Select {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;

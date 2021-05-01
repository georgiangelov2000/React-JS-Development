import React, { useContext } from "react";
import AlertsContext from "../../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertsContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => ( 
    <div key={alert.id}>
        {alert.msg}
    </div>
    )
    )
  );
};

export default Alerts;

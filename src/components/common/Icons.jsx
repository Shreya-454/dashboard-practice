import React from "react";

const Icons = ({ icon, className = "", ...props }) => {
  const iconsList = {
};
return icon && iconsList[icon];
};

export default Icons;
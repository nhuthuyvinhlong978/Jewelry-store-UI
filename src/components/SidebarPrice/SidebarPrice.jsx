import React from 'react';
import './sidebarPrice.css';
import Slider from '@material-ui/core/Slider';
const SidebarPrice = (props) => {
  const [value, setValue] = React.useState([0, 0]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleSearchPrice(newValue);
  };
  return (
    <div className="hiraola-sidebar_categories">
      <div className="hiraola-categories_title">
        <h5>Price</h5>
      </div>
      <Slider value={value} onChange={handleChange} max={10000} />
      <div style={{ textAlign: 'center' }}>
        Price: ${value[0]} - ${value[1]}
      </div>
    </div>
  );
};

export default SidebarPrice;

import React from 'react';
import './tab.css';
import { useEffect, useState } from 'react';
import { getListCategory } from '../../api/api';
const Tab = (props) => {
  const [category, setCategory] = useState([])
  const [selected, setSelected] = useState("");
  useEffect(async () => {
    await getListCategory().then(res => {
      for(let i=0; i<res.data.length; i++){
        if(i < 4){
          setCategory(category => [...category, res.data[i]])
        }
      }
      setSelected(res.data[0]._id);
      props.handleChangeCategory(res.data[0]._id, "new");
      props.handleChangeCategory(res.data[0]._id, "sale");
    })
  },[])
  const handleClick = (id) => {
    setSelected(id);
    props.handleChangeCategory(id, props.type);

  }

  const show = category.map((e, index) => {
    return (
      <li key={index} onClick={() => {handleClick(e._id)}}>
          <a
            className={e._id == selected ? "tab-active": ""}
            data-bs-toggle="tab"
            role="tab"
          >
            <span>{e.categoryName}</span>
          </a>
        </li>
    )
  })

  return (
    <div className="product-tab">
      <div className="hiraola-tab_title">
        <h4>{props.title}</h4>
      </div>
      <ul className="nav product-menu" role="tablist">
        {show}
      </ul>
    </div>
  );
};

export default Tab;

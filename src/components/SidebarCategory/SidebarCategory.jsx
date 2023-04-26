import React, { useEffect, useState } from 'react';
import './sidebarCategory.css';
import { getListCategory } from '../../api/api';
const SidebarCategory = (props) => {
  const [listCategory, setListCategory] = useState([]);
  useEffect(async () => {
    await getListCategory().then(res => {
      console.log(res);
      setListCategory(res.data);
    })
  }, [])

  const show = listCategory.map((e, index) => {
    return (
      <li key={index} onClick={() => {props.changeCategory(e._id)}}>
        <a>{e.categoryName}</a>
      </li>
    )
  })

  return (
    <div className="category-module hiraola-sidebar_categories">
      <div className="category-module_heading">
        <h5>Categories</h5>
      </div>
      <div className="module-body">
        <ul className="module-list_item">
         {show}
        </ul>
      </div>
    </div>
  );
};

export default SidebarCategory;

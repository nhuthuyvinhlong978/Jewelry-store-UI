import React from 'react';
import loading from "../../assets/image/loading.gif";
import "./style.css"
const Loading = () => {
    return (
        <div className="loading-overlay">
            <img src={loading} alt="" width='5%'/>
        </div>
    );
}

export default Loading;

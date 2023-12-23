import React from 'react';
import '../index.css'
import { useState, CSSProperties } from "react";
import {HashLoader} from "react-spinners";



const overrid= CSSProperties = {
    display: "block",
    margin: "0 auto",
    
  };
  
function Loading() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#36d7b7");
  return (
    <div className="sweet-loading" id='loading-parent'>
      
      <HashLoader
        size={40}
        color={color}
        aria-label="Loading "
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
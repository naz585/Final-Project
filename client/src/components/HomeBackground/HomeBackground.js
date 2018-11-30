    import React from "react";
import background from '../../images/nba.jpg';
import "./HomeBackground.css";

const HomeBackground = ({children}) => (
    <div className="bg-1 container-fluid">
        {children}
    </div>
)

export default HomeBackground; 
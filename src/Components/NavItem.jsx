import React from "react";
import {Link} from "react-router-dom";


export default function NavItem({icon,path,title}){
    return(
        <Link to= {path}>
            {icon}
            <h2>{title}</h2>
        </Link>
    )
}

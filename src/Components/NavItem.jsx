import React from "react";
import { Link } from "react-router-dom";
import { Button} from "@mui/material";


export default function NavItem({ icon, path, title }) {
    return (
        <Button
            component={Link}
            to={path}
            startIcon ={icon}
            sx={{
                color: "black",
                justifyContent: "flex-start",
                textTransform: "none",
                textDecoration: "none",
                width: "100%",
                padding: "10px 20px",
                borderRadius: "12px",
                "&:hover": {
                    backgroundColor: "#996b3f5e",
                    textDecoration: "none",
                },
            }}>
            
            {title}
        </Button>
    );
}

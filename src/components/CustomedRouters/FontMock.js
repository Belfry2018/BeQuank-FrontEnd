import React from "react";


export default function ({children}) {
    return (
        <div style={{width:"100%",height:"100vh",backgroundColor:"rgba(41, 128, 185, 0.08)"}}>
            <div
                style={{
                    position:"absolute",
                    left:"50%",
                    top:"40%",
                    transform: "translateX(-50%) translateY(-50%)",
                    padding:"0 50px",
                    borderRadius:"10px",
                    fontSize:"12rem",
                    color:"rgba(41, 128, 185)",
                    fontFamily:"Lobster",
                    fontWeight:"bold"
                }}
            >
                {children}
            </div>
            <div>
                <div
                    style={{
                        position:"absolute",
                        left:"50%",
                        top:"55%",
                        transform: "translateX(-50%) translateY(-50%)",
                        letterSpacing:"1em",
                        fontSize:"1rem",
                        color:"grey",
                        fontWeight:"bold"
                    }}
                >
                    WE BUILD APPS
                </div>
            </div>
        </div>
    );
}
    import { minify } from "csso";
import React from "react";
    import ReactDOM  from "react-dom/client";
    
// HMR- Hot Module Replacement
// Created a Server 
// File watch algorithm -C++
// Bundling
// minify
// cleaning our coding
// Dev and Production build
// Super fast build algorithm
// Image Optimization
//Caching by development
// Compression
// Compatible with older versions of Chrome
// HTTPS on dev
//  Port number
// Consistent Hashing algoritm
// Zero config
// 
// 
// Transitive dependencies

    const heading = React.createElement("h1",{
        id:'title',
        className:'title',
    },"Namaste Abhilash");
    const heading1 = React.createElement("h1",{
        id:'title1',
        className:'title1',
    },"Namaste Abhilash 1"); 
    const heading2 = React.createElement("h1",{
        id:'title2',
        className:'title2',
    },"Namaste Abhilash g 2");
    const container =React.createElement("div",{id:"container"},[heading1,heading2]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing the react element inside the root
    // root.render(heading)
    root.render(container)
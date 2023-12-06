    import React from "react";
    import ReactDOM from "react-dom/client";
    
        const parent = React.createElement(
        "div", 
        {id:"parent"}, 
        [
            React.createElement(
                "div", {id:"child"}, 
            [
                React.createElement("h1", {id:"hdk"}, "I am HDK"),
                React.createElement("h2", {id:"hdk-sibling"}, "I am HDK sibling"),
            ]
            ),
            React.createElement(
                "div", {id:"child"}, 
            [
                React.createElement("h1", {id:"hdk2"}, "I am HDK2"),
                React.createElement("h2", {id:"hdk-sibling2"}, "I am HDK2 sibling"),
            ]
            ),
        ]
        );
    
    console.log(parent);

       // Creating a Root Element using ReactDOM CDN
      const root = ReactDOM.createRoot(document.getElementById('root'));

        //   Rendering the React Element into the Root Element
      root.render(parent);
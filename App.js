
const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},[
React.createElement("h1",{id:"heading1"},"Heading 1"),
React.createElement("h2",{id:"heading2"},"Heading 2"),]
),
React.createElement("div",{id:"child2"},[
React.createElement("h3",{id:"heading3"},"Heading 3"),
React.createElement("h4",{id:"heading4"},"Heading 4"),]
)
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

/*

ReactElement(object) =  HTML(Browser Understands)

*/

// const heading = React.createElement("h1",{id:"heading"},"Namaste Amu from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
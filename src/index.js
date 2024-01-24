//allows to use Jsx - so to write HTML as Javascript statements
//it will compile elements
import React from "react";
//React Document option model allows to import/inserts elements
//created by React inside of the HTML elements
import ReactDOM from "react-dom";

//function components are more common, easier to write and maintain

function Webpage() {
	const name = "David Smith";

	return (
		<>
			<section>
				<header>
					<h1>Hello {name}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</header>
			</section>
			<Clock />
		</>
	);
}

//nesting components
function Clock() {
	return <p> It's currently: {new Date().toLocaleTimeString("UK")} </p>;
}

ReactDOM.render(<Webpage />, document.getElementById("root"));

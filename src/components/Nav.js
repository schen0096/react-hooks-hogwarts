import React from "react";
import piggy from "../assets/porco.png";


const SortDropdown = ({ sort }) => {
	// this codes for us being able to sort by name and weight
	// but we need the data to get passed down from the App in order to access it

	return (
		<select onChange={sort}>
			<option />
			<option value="name">Name</option>
			<option value="weight">Weight</option>
		</select>
	)
}

const Nav = ({toggleGrease, sort, hidePigs, hogSearch}) => {
	return (
		<div className="navWrapper">
			Search: <input onChange={hogSearch} style={{margin: "10px"}} />
			<SortDropdown sort={sort}/>
			<span className="headerText">Hogwarts</span>
			<div 
			onClick = {toggleGrease}
			className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
				<br></br>
				Click On Twirling Pig To Filter By Greased Pigs
			</span>
			<hr></hr>
			<button onClick = {hidePigs}>Hide Pigs</button>
			
		</div>
	);
};

export default Nav;

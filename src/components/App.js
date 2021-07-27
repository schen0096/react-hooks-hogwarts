import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile"
import hogsData from "../porkers_data";
// import FilterButton from "./FilterButton";

function App() {

	const [ greaseView, greaseViewSetter ] = useState(false)
	// const [ hogs, sortingPigsSetter ] = useState(hogsData)
	const [ sort, setSort ] = useState('')
	const [ hide, setHide ] = useState(true)
	const [ search, setSearch ] = useState('')

	function toggleHide(){
		setHide(!hide)
	}

	function HiddenPage(){
		return (
			<p>ALL PIGS HIDDEN</p>
		)
	}

	function toggleGrease(){
		greaseViewSetter(!greaseView)
	}

	const hogSearch = e => setSearch(e.target.value) //changes state
	//filteredSortedSearchableHogs absolutely has to return an array
	const filteredSortedSearchableHogs = () => {
  
	  /*    ifNameFound is a function which will return a boolean needed by filter
						when a name is being searched for.                      */
	  const ifNameFound = hog => 
		hog.name.toLowerCase().includes(search.toLowerCase())
  
	  if (search.length > 0) { //<-----checks value in state
		return sortedHogs().filter(ifNameFound)
	  } else {
		return sortedHogs()
	  }
	}

	// const greaseFilter = () => {  // must return an array or it will break
	// 	if (greaseView){
	// 		return hogsData.filter(hog => hog.greased)
	// 		// because it is a boolean, we don't need === true, it defaults to true
	// 	} else {
	// 	return hogsData
	// 	}
	// }

	// ALTERNATIVELY 

	const greaseFilter = () => {
		return greaseView ? hogsData.filter(hog=>hog.greased) : hogsData
	}

	// original function to sort, can only do one.
	// function sortPigs(){
	// 	let originalPigs = [...hogs]
	// 	const sortedPigs = originalPigs.sort((currentPig, nextPig) =>{
	// 		let current = currentPig.weight
	// 		let next = nextPig.weight

	// 			if (current < next) return -1;
	// 			if (current > next) return 1;
	// 			else return 0
	// 	})
	// 	console.log(sortedPigs)
	// 	sortingPigsSetter(sortedPigs)
	// }
	
	const selectSort = event => {
		// this way we can see which way we want to sort by (name or weight)
		// create a state as well so we can change the state of the page when sorted
		setSort(event.target.value)
	}

	const sortedHogs = () => {
		// use a switch on sort, so we can both return the greaseFilter if no sort is selected
		// or if a sort is selected, return the sort.
		// return value of this must also be an array
		switch(sort){
			// case 'name': 
			// 	return greaseFilter().sort((a, b) => {
					// return sort on the grease filter, it takes 2 comparisons
					// sort is destructive so it will change the value of hogsData
					// you can fix this by spread operator on the array to essentially create a new array to work with
			// 		if (a.name < b.name) {
			// 			return -1
			// 		} if (a.name > b.name) {
			// 			return 1
			// 		} else {
			// 			return 0
			// 		}
			// 	})	
			case 'name': 
			return [...greaseFilter()].sort((a, b) => {
				// return sort on the grease filter, it takes 2 comparisons
				// sort is destructive so it will change the value of hogsData
				// you can fix this by spread operator on the array to essentially create a new array to work with
				if (a.name < b.name) {
					return -1
				} if (a.name > b.name) {
					return 1
				} else {
					return 0
				}
				// this can be further shortened by setting the entire return of the sort function to a variable, i.e., 
					// const returnNameFirstToLast = (a, b) => {
					// 	if (a.name < b.name) {
					// 		return -1
					// 	} if (a.name > b.name) {
					// 		return 1
					// 	} else {
					// 		return 0
					// 	}
					// }
					// case 'name': 
					// return [...greaseFilter()].sort(returnNameFirstToLast)
			})	
			// case 'weight':
			// 	return greaseFilter().sort((a,b)=>{
			// 		if (a.weight < b.weight){
			// 			return -1
			// 		} if (a.weight > b.weight){
			// 			return 1
			// 		} else {
			// 			return 0
			// 		}
			// 	})
			case 'weight':
				return [...greaseFilter()].sort((a,b)=>{
					// if (a.weight < b.weight){
					// 	return -1
					// } if (a.weight > b.weight){
					// 	return 1
					// } else {
					// 	return 0
					// }
					// alternatively, because the value of weight is already a number, we can have the return be this instead:
					return a.weight - b.weight
					// can refactor further and place this entire return into another function
				})
			default: return greaseFilter()
		}
		
	}

	return (
		<div className="App">
			<Nav hogSearch = {hogSearch} sort={selectSort} toggleGrease={toggleGrease} hidePigs = {toggleHide}/>
			{/* <button onClick = {toggleGrease}>Show Greased Pigs</button> */}
			{/* <button onClick = {sortPigs}>Sort Pigs by Weight</button> */}
			<>
			{/* { greaseView ? <FilterButton hogs={hogs}/> : <HogTile hogs={hogs}/> } */}
			{/* original code for filtering by grease, but breaks functionality  */}
			{/* <HogTile hogs={greaseFilter()}/> */}
				{/* because greaseFilter() returns hogData, we can pass it in as the value for our prop */}
				{/* <HogTile hogs={sortedHogs()}/> */}
				{/* because we now want to be able to return sorted data and filtered, we can invoke both by having a new function return the previous one */}
				{ hide ? <HogTile hogs={filteredSortedSearchableHogs()}/> : <HiddenPage /> }
				{/* if we want to include a search function, we gotta add in a new function to handle the search and then push it to HogTiles */}
			</>
		</div>
	);
}

export default App;

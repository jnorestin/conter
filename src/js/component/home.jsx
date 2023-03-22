import React,{useState, useEffect} from "react";
import Digit from "./digit";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let [counter, setCounter] = useState(0)
	useEffect(()=>{ 
		setInterval(()=>{
			setCounter(counter++)
			console.log(counter)
		},1000)
	},[])
	return (
		<div className="text-center d-flex count " styles={{alignItems:"center"}}>

			<Digit count = { Math.floor(counter/100000)}/>
			<Digit count = { Math.floor(counter/10000)}/>
			<Digit count = { Math.floor(counter/1000)}/>
			<Digit count = { Math.floor(counter/100)}/>
			<Digit count = { Math.floor(counter/10)}/>
			<Digit count = { Math.floor(counter/1)}/>
		</div>
	);
};

export default Home;

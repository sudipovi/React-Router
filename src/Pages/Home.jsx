import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";

const Home = () => {
    const [plants, setPlants] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/plants')
            .then(res => res.json())
            .then(data => setPlants(data?.plants))
    },[])
    console.log(plants);
    return (
        <div>
            <h1>Plant Card</h1>
            {
                plants.map(plant => (
                    <p key={plant.id}>{plant.name}</p>
                ))
            }
        </div>
    );
};

export default Home;    
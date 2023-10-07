import React, { useState } from 'react'

// Components
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
// Cars data
import { carsData } from './mock/cars-data'
import AdsCard from './components/AdsCard/Ads-Card'
import AdsCardImg from '../src/assets/home-car-img.png'
import AdsCardImg2 from '../src/assets/home-car-img-2.png'
import FilterSection from './components/FilterSection/FilterSection'
import Button from './components/button/Button'





export default function App() {
  const [allData, setAllData] = useState(carsData)
  // Search 
  const [search, setSearch] = useState('')

  const handleSearch = (value) => {
    setSearch(value);
  
  };

  // Like bosilgan mashinalar, shu stateda saqlanadi, bitta arrayni ichida!
  const [favoriteCars, setFavoriteCars] = useState([]) 

  // Like bosilish funksiyasi
  const handleFavorite = (car) => {

    if (favoriteCars.includes(car)) {
      const updatedLikedCars = favoriteCars.filter((favoriteCar) => favoriteCar !== car);
      setFavoriteCars(updatedLikedCars);
    } else {
      setFavoriteCars([...favoriteCars, car]);
    }
  }
  
  return (
    
    <>
      <Navbar
        favoriteCars={favoriteCars}
        handleFavorite={handleFavorite}
        handleSearch={ handleSearch}

      />
      <div className="container ads__cards d-flex gap-30">
      <AdsCard 
      cardTitle="The Best Platform for Car Rental" 
      cardText="Ease of doing a car rental safely and reliably. Of course at a low price." cardImg={AdsCardImg } />
      
      <AdsCard 
      cardTitle="Easy way to rent a car at a low price" 
      cardText="Providing cheap car rental services and safe and comfortable facilities." cardImg={AdsCardImg2 } />
      
      </div>
      <div className="filterSection__wrapper">
        <FilterSection></FilterSection>
      </div>
      <Card
        title = "Popular Car"
        isPopular = {true}
        carsData={allData}
        favoriteCars={favoriteCars}
        handleFavorite={handleFavorite}
        search = {search}

      />
      <Card
        title = "Recomendation Car"
        isPopular = {false}
        carsData={allData}
        favoriteCars={favoriteCars}
        handleFavorite={handleFavorite}
        search ={ search}
      />
      <div className="container btn__card__wrapper">
      <div className="button__card">
        <Button >Show more car</Button>
        <p>12 Car</p>
      </div>
      </div>
      <Footer></Footer>

    </>
  )
}
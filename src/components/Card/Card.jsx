import { Favorite } from '@mui/icons-material'
import Button from './../button/Button';
// import Images
import petrolImg from '/src/assets/gas-station.svg'
import manualImg  from '/src/assets/manual_icon.svg'
import peopleImg from '/src/assets/profile-2user.svg'
import './Card.css'


export default function Card({title, isPopular, carsData, favoriteCars, handleFavorite,search }) {
  const  popularData = carsData.slice (0,4)
  if( isPopular){
    
    return (
      <>
      <div className="container  cards__title__wrapper">
        <h2 className='cards__title'>{title}</h2>
        <a href="#">View All</a>

      </div>
      <div className='container'>
        <div className="cards" >
          {popularData.map((car) => {
            return <>
              {car.status.toLowerCase().includes(search.trim().toLowerCase()) ? <div key={car.id} className='card__list'>
            
            <div className="card__top"> 
                  <div className="card__top__title">
                  <h1 className='status'>{car.status}</h1>
                  <p className='title'>{car.title}</p>
                  </div>

                  <button className='card__liked' onClick={() => handleFavorite(car)}>

                    {favoriteCars.find((favoriteCar) => favoriteCar.id === car.id)
                      ? 
                      <Favorite className='like'></Favorite>: <Favorite className='dontLike'></Favorite>}
                  </button>
            </div>
            <img src={car.carImg} alt="" />
            <div className="card__center">
              <div className="petrol">
                <img src={petrolImg} alt="" />
                <p>{car.petrol_consumption}</p>
              </div>
              <div className="manual">
                <img src={manualImg} alt="" />
                <p>Manual</p>
              </div>
              <div className="number__people">
                  <img src={peopleImg} alt="" />
                  <p>{car.number_of_people}</p>
              </div>
            </div>
            <div className="card__bottom">
              <div className="price">
                <p className='new__price'>{car.price}<span>/day</span> </p>
                <p className='old__price'>{car.old_price}</p>
              </div>
              <Button>Rent Now</Button>
            </div>

          </div>  :  <></>}
            </>
          })}
        </div>
      </div>
      </>
    )
  }else{
    const recomendationData = carsData.slice(4)
    return (
      <>
      <div className="container cards__title__wrapper">
        <h2  className='cards__title' >{title}</h2>
        <a href="#">View All</a>
      </div>
      <div className='container'>
        
        <div className="cards">
          {recomendationData.map((car) => {
            return <>
              {car.status.toLowerCase().includes(search.trim().toLowerCase()) ? <div key={car.id} className='card__list'>
            
            <div className="card__top"> 
                  <div className="card__top__title">
                  <h1 className='status'>{car.status}</h1>
                  <p className='title'>{car.title}</p>
                  </div>

                  <button className='card__liked' onClick={() => handleFavorite(car)}>

                    {favoriteCars.find((favoriteCar) => favoriteCar.id === car.id)
                      ? 
                      <Favorite className='like'></Favorite>: <Favorite className='dontLike'></Favorite>}
                  </button>
            </div>
            <img src={car.carImg} alt="" />
            <div className="card__center">
              <div className="petrol">
                <img src={petrolImg} alt="" />
                <p>{car.petrol_consumption}</p>
              </div>
              <div className="manual">
                <img src={manualImg} alt="" />
                <p>Manual</p>
              </div>
              <div className="number__people">
                  <img src={peopleImg} alt="" />
                  <p>{car.number_of_people}</p>
              </div>
            </div>
            <div className="card__bottom">
              <div className="price">
                <p className='new__price'>{car.price}<span>/day</span> </p>
                <p className='old__price'>{car.old_price}</p>
              </div>
              <Button>Rent Now</Button>
            </div>

          </div>  :  <></>}
            </>
          })}
        </div>
      </div>
      </>
      
    )
  }
  
}

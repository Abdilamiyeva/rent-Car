import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import filterImg from '../../assets/filter.svg'
import userImg from '../../assets/user_img.svg'
import { Favorite, Notifications, Search, Settings } from '@mui/icons-material'
import Button from '../button/Button'

// import Images
import petrolImg from '/src/assets/gas-station.svg'
import manualImg  from '/src/assets/manual_icon.svg'
import peopleImg from '/src/assets/profile-2user.svg'
import './Navbar.css'

export default function Navbar({ favoriteCars, handleFavorite, handleSearch }) {
  // Modalni ochib, yopish uchun state 
  const [showModal, setShowModal] = useState(false)

  // Modalni ochib yopish uchun funksiya
  const toggleModal = () => {
    setShowModal(!showModal)
  }
  

  return (
    <>
      {/* Agar showModal == true bo'lsa mana bu '&&' belgidan keyingi kod iwlaydi, ya'ni modal ko'rinadi */}
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <div className="cards">
        {favoriteCars.map((car) => (
          <div key={car.id}  className='card__list'>
          
            <div className="card__top"> 
                  <div className="card__top__title">
                  <h1 className='status'>{car.status}</h1>
                  <p className='title'>{car.title}</p>
                  </div>

                  {/* handleFavoritega bitta carni bervoramiz , button bosilganda, obyekt ketadi */}
                  <button className='card__liked' onClick={() => handleFavorite(car)}>

                    {/* Conditional rendering, Agar favoriteCarsni ichidagi birorta carning idsi hozir bosilgan carning idsi bilan bir xil bo'lib qolsa, like so'zini Likedga o'zgartir, aks holda agar yo'q bo'lsa Liked so'zini Likega o'zgartir, (siz bu yerda iconlarni qo'yasiz) */}
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

          </div>
        ))}
      </div>
        </Modal>
      )}
      {/* Modalni ochish */}
      <div className="navbar">
        <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <h4>MORENT</h4>
          </div>
          <div className="navbar__search " >
              <Search className='search'></Search>
              <input  onChange={(e) => handleSearch(e.target.value)} type="text " placeholder='Search something here'/>
              <img src={filterImg} alt="" />
          </div>
          <div className="navbar__right">
            <button  onClick={toggleModal}><Favorite className={`favourteIcon`}></Favorite></button>
            <div className="notification">
              <Notifications ></Notifications>
            </div>
            <div className="settings">
              <Settings></Settings>
            </div>
            <div className="user__img">
              <img src={userImg} alt="user-img" />
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <hr />

    </>
  )
}

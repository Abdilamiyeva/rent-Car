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
  
  // Sidebar 
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          {favoriteCars.length === 0  &&(

            <div className='empty__wrapper'>
               <i id='shopping__cart' className='fa fa-shopping-cart'></i>
              <p> Your Cart Is empty </p>
            </div>
          )}
          <div className="cards">  
          {favoriteCars.map((car) => (
          
          <div key={car.id}  className='card__list'>
          
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

          </div>
        ))}
          </div>
         
        </Modal>
      )}

      {/* Modalni ochish */}
      <div className="navbar">
        <div className="container">
        <div className="navbar__wrapper">
        <div className="header__bars">
            <div className={`menu__toggle  ${isOpenMenu && "open"}`} onClick={() =>setIsOpenMenu(!isOpenMenu)}>
                <div className="bar"></div>
            </div>
        </div>
          <div className={`sidebar  ${isOpenMenu && "open"}` } >
            <div className="sidebar__wrapper">
            <div className="navbar__right">
                <p className='rent__car__menu'>Rent Car Menu </p>
                
                <div className=" d-flex">
                  <button  onClick={toggleModal}><Favorite className={`favourteIcon`}></Favorite></button>
                  <p className='liked__view'>View purchases</p>
                </div>
                <div className="notification__wrapper d-flex">
                  <div className="notification ">
                    <Notifications className='icon' ></Notifications>
                  </div>
                  <p > Notifications </p>
                </div>
                <div className="settings__wrapper d-flex">
                  <div className="settings">
                    <Settings></Settings>
                  </div>
                  <p> Settings </p>
                </div>
                
              </div>
             
            </div>
          </div>
          <div className="navbar__logo">
            <h4>MORENT</h4>
            <div className="navbar__search  mobile__search" >
              <Search className='search'></Search>
              <input  onChange={(e) => handleSearch(e.target.value)} type="text " placeholder='Search something here'/>
              <img src={filterImg} alt="" />
          </div>
          </div>
          <div className="navbar__search nabvar__search__none " >
              <Search className='search'></Search>
              <input  onChange={(e) => handleSearch(e.target.value)} type="text " placeholder='Search something here'/>
              <img src={filterImg} alt="" />
          </div>
          <div className="navbar__right">
            <button className='favourteButton' onClick={toggleModal}><Favorite className={`favourteIcon`}></Favorite></button>
            <div className="notification notification__none">
              <Notifications ></Notifications>
            </div>
            <div className="settings settings__none">
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

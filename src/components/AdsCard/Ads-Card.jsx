import Button from '../button/Button'

import './AdsCard.css'


function AdsCard({cardTitle, cardText,  cardImg}) {
  return (
    <div className='home__card'>
        <h2 className='home__card__title'>{cardTitle}</h2>
        <p className='card__text'>{cardText}</p>
        <Button className="home__card__btn">Rental Car</Button>
        
        <div className="img">
        <img  className="home__img" src={cardImg} alt="home__car" />
        </div>
    </div>
  )
}

export default AdsCard
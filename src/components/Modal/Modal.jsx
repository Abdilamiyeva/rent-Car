import './Modal.style.css'

export default function Modal({ children, toggleModal }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2 style={{ marginBottom: 15 }}>Favorite cars</h2>
        <span className='close-modal' onClick={toggleModal} >&times;</span>
        {children}
      </div>
    </div>
  )
}

import './Modal.style.css'

export default function Modal({ children, toggleModal }) {
  return (
    <div className="modal-container" onClick={toggleModal}>
      <div className="modal-content">
        <span className='close-modal' onClick={toggleModal} >&times;</span>
        {children}
      </div>
    </div>
  )
}

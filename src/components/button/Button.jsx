import './button.css'
function Button({ variant,  onClick,className, children}) {
  return (
    <button   variant={variant}
    className={className}  onClick={onClick}>{children}</button>
  )
}

export default Button
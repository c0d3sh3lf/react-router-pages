import './Button.css'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
  type?: 'primary' | 'secondary' | 'danger'
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  type = 'primary',
  className,
}) => {
  return (
    <button
      className={`button ${type} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button


type ButtonPropsType = {
  title?: string
  icon?: React.ReactNode
  type:"button" | "submit"
  iconPost?: "left" | "right"
  extraStyle?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?:boolean
}

function Button({type,title, icon, iconPost, extraStyle, disabled, onClick }: ButtonPropsType) {
  return (
    <button
    disabled={disabled}
    type={type}
      onClick={onClick}
      className={`${extraStyle} hover:border-[#ffad2d] hover:bg-transparent cursor-pointer  border-2  border-black  hover:text-[#ffad2d]  duration-300 active:opacity-20`}>
      {icon && iconPost === "left" && icon}
      {title && <span className="leading-2">{title}</span>}
      {icon && iconPost === "right" && icon}
    </button>
  )
}

export default Button
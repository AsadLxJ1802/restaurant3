
const Messenger = ({extraClass , icon,iconPost, title}:{extraClass?:string , icon?:React.ReactNode , iconPost?:"left" | "right" , title:string}) => {
  return (
    <div className='w-50 bg-black border-2 rounded-2xl '>
        <div className={`${extraClass}`}>
        {icon && iconPost === "left" && icon}
        {title && <span className="leading-2">{title}</span>}
        {icon && iconPost === "right" && icon}
        </div>
    </div>
  )
}

export default Messenger
import { FocusEventHandler } from "react"

type  InputProps = {
  extraStyle?: string
  title?: string
  type?: React.HTMLInputTypeAttribute
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  name?:string
}

function Input({ onFocus, onBlur, extraStyle, title, type ,name }: InputProps) {
  return (
    <input name={name} onFocus={onFocus} onBlur={onBlur} className={`py-3 w-90  outline-none border-b ${extraStyle}`} type={type} placeholder={title}/>
  )
}

export default Input
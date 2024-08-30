'use client'
import { useFormStatus } from "react-dom"
import { ChevronRight } from "../icons/chevron-right.icon"
import { cn } from "../utils/cn"

interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
}

type ButtonComponent = React.FC<Partial<ButtonComponentProps>>

export const FormButton: ButtonComponent = ({ children, className, ...props }) => {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} {...props} className={cn("btn", className)}>
      {children}
      {pending ? <span className="loading loading-spinner h-4 w-4 opacity-70"></span> : <ChevronRight outline className="h-4 w-4 opacity-70" />}
    </button>)
}

import { cn } from "../utils/cn"

interface LabelInputComponentProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode,
}

interface InputComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode,
}

type InputComponent = React.FC<Partial<InputComponentProps>>
type LabelInputComponent = React.FC<Partial<LabelInputComponentProps>> & { Prompt: InputComponent }

const Input: LabelInputComponent = ({ children, className, ...props }) => {
  return (
    <label className={cn(className)}  {...props} >
      {children}
    </label>
  )
}


const Prompt: InputComponent = ({ children, ...props }) => {
  return (<input  {...props} />)
}

Input.Prompt = Prompt

Object.freeze(Input)

export { Input }

import { cn } from "../utils/cn"

type SelectOptionComponent = React.FC<Partial<SelectOptionProps>>
type SelectComponent = React.FC<Partial<SelectProps>> & { Option: SelectOptionComponent }

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode,
}

interface SelectOptionProps extends React.SelectHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode,
}

const Select: SelectComponent = ({ children, className, ...props }) => {
  return (
    <select {...props} className={cn("select",className)} >
      {children}
    </select>
  )
}

const Option: SelectOptionComponent = ({ children, ...props }) => {
  return (<option {...props}>{children}</option>)
}

Select.Option = Option

Object.freeze(Select)

export { Select }
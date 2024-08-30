
interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
}

type ButtonComponent = React.FC<Partial<ButtonComponentProps>>

export const Button: ButtonComponent = ({ children, ...props }) => {
  return (<button {...props} className="btn">Button</button>)
}


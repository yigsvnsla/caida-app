{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> */}



interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  solid: boolean
  outline: boolean
}

type IconComponent = React.FC<Partial<IconProps>>

export const ChevronRight: IconComponent = ({ solid, outline, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={solid ? "currentColor" : outline ? "none" : ""}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={solid || outline ? "currentColor" : "none"}
      className="size-6"
      {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg >
  )
}
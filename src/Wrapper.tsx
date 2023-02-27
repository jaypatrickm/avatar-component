import { PropsWithChildren } from "react"

type WrapperProps = PropsWithChildren<{
  caption: string;
}>

function Wrapper({children, caption}: WrapperProps) {
  return (
  <figure>
    {children}
    <figcaption>{caption}</figcaption>
  </figure>)
}

export default Wrapper
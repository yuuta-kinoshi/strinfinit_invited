interface ButtonProps {
  type: "button" | "link",
  text: string,
  url?: string,
  func?: () => void,
  blank?: boolean
}

const Button = ({type, text, url, func, blank = false }: ButtonProps) => {
  if (type === "button") {
    return (
      <button onClick={func}>{text}</button>
    )
  }

  if (type === "link") {
    return (
      <a href={url} target={blank ? "_blank" : "_self"}>
        <button>{text}</button>
      </a>
    )
  }
}

export default Button

import { Image } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
export default function Imagen({src}) {
  return (
    <Image src={src} fluid className="img-fluid w-100 h-100"/>
  )
}

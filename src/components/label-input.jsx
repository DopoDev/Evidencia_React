import { Form } from "react-bootstrap";


// eslint-disable-next-line react/prop-types
export default function Labelinput({labelName, inputType, inputPlaceholder, text=null}) {
  return (
    <>
      <Form.Label>{labelName}</Form.Label>
      <Form.Control type={inputType} placeholder={inputPlaceholder} /> 
      <Form.Text muted>{text}</Form.Text>
    </>
  )
}

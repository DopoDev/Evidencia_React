
import { Stack, Button } from 'react-bootstrap'
import Labelinput from './label-input'

export default function StackForm() {
  return (
    <>
      <Stack gap={2}>
        <div className="px-2 pt-4 text-center">
          <h1>Bienvenido</h1>
        </div>
        <div className="px-2">
          <Labelinput
            labelName="Correo Electronico"
            inputType="text"
            inputPlaceholder="Escriba su Correo Electronico"
          />
        </div>{" "}
        <div className="p-2"></div>
        <div className="px-2">
          <Labelinput
            labelName="Contraseña"
            inputType="password"
            inputPlaceholder="Escriba su contraseña"
          />
        </div>
        <div className="py-5 px-2">
          <Button variant="primary" size="lg" className="w-100">
            Ingresar
          </Button>
        </div>
      </Stack>
    </>
  );
}

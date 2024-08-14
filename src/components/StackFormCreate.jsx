import { Stack, Button, Form} from 'react-bootstrap'
import Labelinput from './label-input';

function StackFormCreate() {
    return (
      <Stack gap={3}>
        <div className="px-2 pt-4 text-center">
          <h1>Crear Cuenta</h1>
        </div>
        <div className="px-2">
          <Labelinput
            labelName="Correo Electronico"
            inputType="text"
            inputPlaceholder="Ingrese su Correo Electronico"
          />
        </div>
        <div className="px-2">
          <Labelinput
            labelName="Contraseña"
            inputType="password"
            inputPlaceholder="Ingrese su contraseña"
          />
        </div>
        <div className="px-2">
          <Labelinput
            labelName="Nombre"
            inputType="text"
            inputPlaceholder="Ingrese su primer nombre"
          />
        </div>
        <div className="px-2">
          <Labelinput
            labelName="Número de Telefono"
            inputType="text"
            inputPlaceholder="Ingrese su numero de telefono"
          />
        </div>
        <div className="py-3 px-2">
          <Button variant="primary" size="lg" className="w-100">
            Crear Cuenta
          </Button>
        </div>
        <div>
            <Form >
                <Form.Check type='switch' id='custom-switch' label='Estoy de acuerdo con los términos y Condiciones' />
                <p className='text-muted'><a href="#">Terminos y condiciones</a></p>
            </Form>
        </div>
      </Stack>
    );
}

export default StackFormCreate;

import { Button, Form } from 'react-bootstrap';
import ListaTareas from './ListaTareas';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Ej: Tarea 1" minLength={3} maxLength={50}/>
          <Button variant='dark' className='ms-2' type='submit'>Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;

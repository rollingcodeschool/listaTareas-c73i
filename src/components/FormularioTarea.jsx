import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dentro del evento submit");
    //realizar algo similiar al tareas.push()
    // operador spread ... 
    setTareas([...tareas, tarea]);
    //limpiar el formulario
    setTarea('');
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="dark" className="ms-2" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;

import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const tareasLocalStorage = JSON.parse(localStorage.getItem('tareasKey')) || []
  const [tareas, setTareas] = useState(tareasLocalStorage);

  useEffect(()=>{
    console.log('ejecutando useEffect, aqui guardo en localstorage');
    localStorage.setItem('tareasKey', JSON.stringify(tareas));
  }, [tareas])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dentro del evento submit");
    //realizar algo similiar al tareas.push()
    // operador spread ... 
    setTareas([...tareas, tarea]);
    //limpiar el formulario
    setTarea('');
  };

  const borrarTarea = (nombreTarea)=>{
    // tareas.splice
    const tareasFiltradas = tareas.filter((tarea)=> tarea !== nombreTarea);
    setTareas(tareasFiltradas);
  }

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
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;

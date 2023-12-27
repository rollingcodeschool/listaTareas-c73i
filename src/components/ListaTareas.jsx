import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
  return (
    <ListGroup>
      {
        tareas.map((tarea, posicionTarea)=><ItemTarea key={posicionTarea} nombreTarea={tarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;



import { gql } from '@apollo/client'


const CREATE_RAZA = gql`mutation ($Nombre: NonEmptyString!) { createRaza (Nombre: $Nombre) { id Nombre } }`,


UPDATE_RAZA = gql`mutation ($ID: ObjectID! $Nombre: NonEmptyString!) { updateRaza (ID: $ID Nombre: $Nombre) { id Nombre } }`,


DELETE_RAZA = gql`mutation ($ID: ObjectID!) { deleteRaza (ID: $ID) { id Nombre } }`,


CREATE_MASCOTA = gql`mutation ($Mascota: MascotaInput!) { createMascota (Mascota: $Mascota) { id Nombre RazaID { Nombre } Edad Genero createdAt updatedAt } }`,


UPDATE_MASCOTA = gql`mutation ($ID: ObjectID! $Mascota: MascotaOptionalInput!) { updateMascota (ID: $ID Mascota: $Mascota) { id Nombre RazaID { id Nombre } Edad Genero createdAt updatedAt } }`,


DELETE_MASCOTA = gql`mutation ($ID: ObjectID!) { deleteMascota (ID: $ID) { id Nombre RazaID { id Nombre } Edad Genero createdAt updatedAt } }`


export { CREATE_RAZA, UPDATE_RAZA, DELETE_RAZA, CREATE_MASCOTA, UPDATE_MASCOTA, DELETE_MASCOTA }


/*

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
    }
  }
`;

function AddTodo() {
  let input;
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {      cache.modify({        fields: {          todos(existingTodos = []) {            const newTodoRef = cache.writeFragment({              data: addTodo,              fragment: gql`                fragment NewTodo on Todo {                  id                  type                }              `            });            return [...existingTodos, newTodoRef];          }        }      });    }  });

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

*/
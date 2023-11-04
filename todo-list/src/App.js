import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
function App() {
  const [todo, setTodo] = useState(
    [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      },
      {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
      },
      {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
      },
      {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
      },
      {
        "userId": 1,
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
      },
      {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
      },
      {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
      },
      {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true
      },
      {
        "userId": 1,
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true
      },
      {
        "userId": 1,
        "id": 16,
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true
      },
      {
        "userId": 1,
        "id": 17,
        "title": "quo laboriosam deleniti aut qui",
        "completed": true
      },
      {
        "userId": 1,
        "id": 18,
        "title": "dolorum est consequatur ea mollitia in culpa",
        "completed": false
      },
      {
        "userId": 1,
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true
      },
      {
        "userId": 1,
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": true
      }
    ])

  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdatadata] = useState('')


  //add task
  const addTask = () => {
    if (newTask) {
      let num = todo.lenght + 1;
      let newEntry = { id: num, title: newTask, completed: false };
      setTodo([...todo, newEntry])
      setNewTask('');

    }
  }


  //deletetask 
  const deleteTask = (id) => {
    let newTasks = todo.filter(task => task.id !== id);
    setTodo(newTasks);
  }


  //mark task as done or completed
  const markDone = (id) => {
    let newTask = todo.map(task => {
      if (task.id === id) {
        return ({ ...task, completed: !task.completed })
      }
      return task;
    })
    setTodo(newTask);
  }



  //cancel update

  const cancelUpdate = () => {
    setUpdatadata('');
  }



  //change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      completed: updateData.completed ? true : false,
    }
    setUpdatadata(newEntry);
  }
  //updatetask
  const updateTask = () => {
    let filterrecords = [...todo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterrecords, updateData]
    setTodo(updatedObject);
    setUpdatadata('');
  }



  return (
    <div className=" container App">
      <br /><br />
      <h1>todo list</h1>
      <br /><br />
      {/* update task */}
      {updateData && updateData ? (
        <><div className="row">
          <div className="col">
            <input type="text"
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}
              className='from-control from-control-lg' />
          </div>
          <div className="col-auto">
            <button
              onClick={updateTask}
              className='btn btn-lg btn-successs mr-20'>Update</button>
            <button 
            onClick={cancelUpdate}
            className='btn btn-lg btn-warning'>Cancel</button>
          </div>
        </div>
          <br />
        </>
      ) : (<>
        {/* Add Task */}
        <div className="row">
          <div className="col">
            <input type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className=' from-control from-control-lg' />
          </div>
          <div className="col-auto">
            <button
              onClick={addTask}
              className='btn btn-lg btn-success'>Add Task</button>
          </div>
        </div>

      </>)}

      {todo && todo.length ? '' : 'No task...'}
      {todo && todo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className="task status ? 'done' : ''">
                  <span className='taskTest'>{index + 1}</span>
                  <span className='taskTest'>{task.title}</span>
                </div>
                <div className="iconsWrap">
                  <span title="Completed / not Completed"
                    onClick={(e) => markDone(task.id)}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {task.completed ? null : (
                    <span title='Edit'
                      onClick={() => setUpdatadata({
                        id: task.id,
                        title: task.title,
                        completed: task.completed ? true : false
                      })}>
                      <FontAwesomeIcon icon={faPen} ></FontAwesomeIcon>
                    </span>)}
                  <span title='delete' onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} ></FontAwesomeIcon>
                  </span>
                </div>
              </div>
            </React.Fragment>
          )
        }

        )}
    </div>
  );
}

export default App;

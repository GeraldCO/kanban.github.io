import React, {Component} from 'react'
import KanbanBoard from '../components/kanban-board'
import Column from '../components/kanban-column'
import data from '../../task.json'
import ModalContainer from '../../modal/containers/modal'
import Modal from '../../modal/components/modal'



class Kanban extends Component{
  constructor(props){
    super(props);
    this.handleChange= this.handleChange.bind(this);
    this.next = this.next.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.state = {
      tasks:data.tasks,
      TypeDone:[],
      TypeInProgress:[],
      TYpeTodo:[],
      
    }
  }
  handleChange(){
    this.setState( state => ({
      tasks:data.tasks,
      TypeDone:[],
      TypeInProgress:[],
      TYpeTodo:[],
      })
    )
  }

  handleStatusChange(item){
    let tasksToSplice;
    let tasksToAdd;
    let index=0;
    if(item.status==="TYPE_TODO"){
      tasksToSplice=this.state.TYpeTodo;
      index=tasksToSplice.indexOf(item);
      item.status="TYPE_INPROGRESS";
      tasksToSplice.splice(index,1)
      tasksToAdd = this.state.TypeInProgress;
      tasksToAdd.push(item)
      this.setState( state =>({
        tasks:[],
        TypeDone:this.state.TypeDone,
        TypeInProgress:tasksToAdd,
        TYpeTodo:tasksToSplice,
        })
      )
    }
    else if(item.status==="TYPE_INPROGRESS") {
      tasksToSplice=this.state.TypeInProgress;
      index=tasksToSplice.indexOf(item);
      item.status="TYPE_DONE";
      tasksToSplice.splice(index,1);
      tasksToAdd = this.state.TypeDone;
      tasksToAdd.push(item)
      this.setState( state => ({
        tasks:[],
        TypeDone:tasksToAdd,
        TypeInProgress:this.state.TypeInProgress,
        TYpeTodo:this.state.TYpeTodo,
        })
      )
    }
    else index=2;

  }

  componentDidUpdate(){
    
  }

  next(index, type){
    let tasks= this.state.tasks;
    let tarea=this.state.tasks[1];
    tarea.status="TYPE_TODO"
    tarea.title="crear un pequeño proyecto con reactJS ¡POR FIN FUNCIONA ESTA MIERDA!";
    tasks[1]=tarea;
    console.log(tasks)
    this.setState( state => ({
      tasks:tasks,
      TypeDone:[],
      TypeInProgress:[],
      TYpeTodo:[],
        numero:25
      })
    )
    console.log(tasks)
  }

  handleChildUnmount=()=>{
    this.setState({renderChild: false});
  }

  setInputRef = element => {
    this.input.push = element;
  }

  render(){
    this.state.tasks.map((x) => {
      if(x.status==='TYPE_TODO')
        return this.state.TYpeTodo.push(x);
      else if(x.status==='TYPE_DONE')
        return this.state.TypeDone.push(x)
      else return this.state.TypeInProgress.push(x)
    })
    return (
    <KanbanBoard>
      <Column title="TODO" tareas={this.state.TYpeTodo} key={1} id="TODO" handleStatusChange={this.handleStatusChange} bg="bg-primary" btnNext={true}/>
      <Column title="DOING" tareas={this.state.TypeInProgress} key={2} handleStatusChange={this.handleStatusChange} id="INPROGRESS" bg="bg-warning" btnNext={true} />
      <Column title="FINISH" tareas={this.state.TypeDone} key={3} id="DONE" bg="bg-success" btnNext={false}/>
    </KanbanBoard>
    )
  }
}
export default Kanban;
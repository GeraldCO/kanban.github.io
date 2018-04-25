import React, {Component} from 'react'
import Card from './kanbanCard'


class kanban_layout extends Component{
  
  constructor(props){
    super(props);
    this.cambiandoTODO=this.cambiandoTODO.bind(this);
    this.state={
      tareas:props.tareas
    }
  }

  handleClickCard=(id)=>{
   let tareas = this.state.tareas;
   tareas.splice(id,1);
   this.setState({
     tareas: tareas,
   })
  }

  cambiandoTODO(){
    this.props.cambiandoTODO(this.state.tareas)
  }

  addTask=()=>{
    console.log("gasdf")
    //    let ultimaTarea= this.state.tareas[this.state.tareas.length-1];
    let tareas = this.state.tareas;
    let newTask={
      id: 64514,
      priority: "PRIORITY_HIGHEST",
      title: "esta es la nueva tarea",
      epicLink: "React buidings",
      status: "TYPE_TODO"
    };
    tareas.push(newTask);
    this.setState({
      tareas: tareas
    })
  }

  componentDidUpdate(){
    console.log("gerald")
  }

  
  componentDidMount(){
    console.log("componente montado")
  }
/**
 update=(listaTareas)=>{
    let cards=[];
     this.state.tareas.map((itemTask, index) => {
        cards.push(
          <Card
              bg={this.props.bg}
              title={itemTask.title}
              prioridad={itemTask.prioridad}
              display={itemTask.display}
              key={itemTask.id}
              id={itemTask.id}
              imprimir={this.alertKey}
              item={itemTask}
              click={this.handleClickCard}
              index={index}
          />
        ) 
      })
    
    ReactDOM.render( cards, document.getElementById("TODO-body") )
  } 
 */
  render(){
  const {title} = this.props;
  const tam={
  maxWidth:"18rem",
  padding:0
  }
  const pillBadgeStyle={
    paddingTop:"6px"
  }
  return(
      <div className="card border-primary col-md-3 mb-3" id={this.props.id} style={tam}>
        <div className="card-header justify-content-between d-flex">
          <span> {title} </span>
          <span className="badge badge-pill badge-secondary" style={pillBadgeStyle}>{this.props.tareas.length}</span>
        </div>
        <div className="card-body text-primary" id={this.props.id+"-body"}>
    
          {this.state.tareas.map((itemTask, index) => {
          return (
            <Card
                bg={this.props.bg}
                title={itemTask.title}
                prioridad={itemTask.prioridad}
                display={itemTask.display}
                key={itemTask.id}
                id={itemTask.id}
                imprimir={this.alertKey}
                item={itemTask}
                click={this.handleClickCard}
                index={index}
                modificar={this.props.modificar}
                status={itemTask.status}
                handleStatusChange={this.props.handleStatusChange}
                itemTask={itemTask}
                btnNext={this.props.btnNext}
            />
          ) 
        })}
        <input type="button" onClick={this.addTask} value="Añadir" />
        </div>
      </div>
    
    
  )
  }
  
}

export default kanban_layout;
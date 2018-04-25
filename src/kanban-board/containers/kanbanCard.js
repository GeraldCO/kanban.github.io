import React, {Component} from 'react'
import Card from '../components/kanbanCard'

class KanbanCard extends Component{
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state={
      display :"block",
      View: true, 
      task: {...props},
    }
  }

  componentDidMount () { 
    var idTask = this.refs.myTaskCard;
    alert(idTask)
  }

  componentDidUpdate(){
    console.log('Child  has been updated')
  }
  componentWillUnmount() {
    console.log('Child  has been unmounted')
  }



  render(){    
       return( <Card
       
        bg={this.state.task.bg}
        title={this.state.task.title}
        prioridad={this.state.task.prioridad}
        display={this.state.task.display}
        handleClick={this.handleClick}
        id={this.state.task.id}
        handleClickCard={this.props.handleClickCard}
      /> );
  }
  
}

export default KanbanCard;
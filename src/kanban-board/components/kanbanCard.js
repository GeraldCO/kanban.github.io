import React, { PureComponent } from 'react'

class KanbanCard extends PureComponent{
  state={
    
  }

  handleClick=()=>{
    this.props.click(this.props.index)
  }

  handleStatusChange=()=>{
    console.log(this.props.itemTask)
    this.props.handleStatusChange(this.props.itemTask)
  }
  
  render(){
    const divstyles ={
      display:'in-line'
    }

    const buttonStyle={
      display: this.props.btnNext ? 'in-line' : 'none' 
    }
    const {
      bg, title, id, prioridad, status
    } = this.props
    return (
    <div className={"card text-white mb-3 "+bg} style={divstyles} ref={this.props.setInputRef} >
    <div className="card-body">
      <p>status= {status}</p>
      {title} id=<span>{id}</span>
      <p>{prioridad}</p>
      <input type="button" onClick={this.handleClick} value="Eliminar"/>
      <input type="button" onClick={this.handleStatusChange} style={buttonStyle} value="->"/>
    </div>
  </div>
  )
}
}

export default KanbanCard;
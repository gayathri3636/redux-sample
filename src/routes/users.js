import React from 'react';

export default class Users extends React.Component{
  constructor(props){
    super(props);
    this.arr = [
      {id:1, content:"Gayathri"},
      {id:2, content:"Nannapaneni"},
      {id:3, content:"gayathri123@gmail.com"}
    ]
  }
  render() {
    return(
      <ul>
        {this.arr.map((element, index) => {return (<UsersList data={element} onClick={this.props.onClick} />)
        })}    
      </ul>
    )
  }
}

class UsersList extends React.Component{    
  handleClick = () => {
    this.props.onClick(this.props.data.id);
  }
    render() {  
        return( 
            <li 
                onClick={this.handleClick}>
                {this.props.data.content}
            </li>
        )
    }
}
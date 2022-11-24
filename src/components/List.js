import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here [5,4,6,7]
      <React.Fragment>
     {listx.map((e)=>{
      return <ListItems valuex={e}/>
     })}
      
    </React.Fragment>
    
  )
}

export default List;
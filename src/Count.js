import React, { useState } from 'react';

// export function Count({ children }) {
//     let num = 0

//     function addCount(){
//         num+=1
//     }

//         return (
//             <div>
//               {children(num)}
//               <button onClick={ addCount }>Add one!</button>
//             </div>
//           );

//   }

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.addCount = this.addCount.bind(this);
        this.state = { num: 0 };
        console.log(props)
      }

    addCount(){
        this.setState({num: this.state.num+1})
    }
    render(){
        return (
            <div>
              {this.props.children(this.state.num)}
              <button onClick={ this.addCount }>Add one!</button>
            </div>
          );
    }
  }
  
  export default Count;
import React from 'react'
import { connect } from "react-redux"
import { nameAddAction, nameDelAction } from "../redux/name/nameAction"

function NameContainer(props) {
    const names = props.data.map( (name, index) => {
       return  <tr key={index}>
           <td>{name}</td>
           <td><button onClick={ () => props.dispatch(nameDelAction(index)) }>X</button></td>
       </tr>
    } )

    return (
        <div>
            <h1>Hello</h1>
            <form onSubmit={ (event) => {
                event.preventDefault();
                let input = event.target.nameText.value;
                props.dispatch(nameAddAction(input));
                event.target.nameText.value = ""

            }}>
                <input type="text" name="nameText" />
                <button>Submit</button>
            </form>

            <div>
                <table border="1px">
                    <thead>
                        <tr>
                            <th>Name</th><th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {names}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}



export default connect(mapStateToProps)(NameContainer)

import React from 'react'

export default class Shop extends React.Component {
    state = {
        products: [],
        
    }

    componentDidMount(){
        // when using axios the json file MUST be in thepiublic folder.
    }

    render(){
        return(
            <React.Fragment>
                <ul>
                    {this.state.products.map}((p)=>(
                        <li>{p.name} -{p.cost}</li>
                    ))
                </ul>
            </React.Fragment>
        )
    }

}
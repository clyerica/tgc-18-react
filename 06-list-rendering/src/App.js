import React from 'react'

export default class App extends React.Component {
  state={
    fruits:['apple','oranges','bananas','cherries'],
    secretOfLife:42,
    superheroes: ['Hulk', 'Thor','Captain America', 'Ms Marvel'],
    movies: ['Star Trek', 'Spiderman','Deadpool', 'Venom']
  }

  renderSuperHeroes(){
    let superheroesEl=[]
    for (let s of this.state.superheroes){
      superheroesEl.push(<li>{s}</li>)
    }
    return superheroesEl
  }

  render(){
    let fruitElements=[]
    for (let f of this.state.fruits){
      fruitElements.push(<li>{f}</li>)
    }

    return(
      <div>
        <div>{this.state.secretOfLife}</div>
        <div>{this.state.fruits}</div>
        <ul>{fruitElements}</ul>
        <ol>{this.renderSuperHeroes()}</ol>
        <ul>{this.state.movies.map(function(e){return <li>{e}</li>})}</ul>
      </div>
    )
  }
}

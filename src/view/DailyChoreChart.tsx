import fetch from 'node-fetch';

interface Chore {
  name: string,
  description: string,
  age: number,
}

export default function DailyChoreChart() {

  const getChores = async () => {
    const response = await fetch('http://localhost:8081/chores')
    let data = await response.json()
    
    let mappedChores = data.map((chore: Chore)=>{
      return<li>{chore.name}</li>
    })

    console.log(mappedChores)
    return (
      <ul>{mappedChores}</ul>
    )
  }

  window.onload = getChores
    return (

      <div>
        <h1>Maybree Chores!</h1>
      </div>
    );
  }

import { useState } from 'react';











 export const teamData = [
    {
      id: 1,
      image: require('./captions/img1.jpg')  ,
      name:"Gabriel Hart",
      designation:"CEO",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex earum distinctio in vero similique quisquam "
    },
    {
      id: 2,
      image: require('./captions/img2.jpg')  ,
      name:"Kingston Morgan",
      designation:"Supervisor",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex earum distinctio in vero similique quisquam "
    },
    {
      id: 3,
      image: require('./captions/img3.jpg')  ,
      name:"Shaw Michael",
      designation:"Remote Support",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex earum distinctio in vero similique quisquam "
    },
    {
      id: 4,
      image: require('./captions/img4.jpg')  ,
      name:"Paul Mason",
      designation:"Team Lead",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex earum distinctio in vero similique quisquam "
    },
    {
      id: 5,
      image: require('./captions/img10.jpg')  ,
      name:"Akinson",
      designation:"Lead",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex earum distinctio in vero similique quisquam "
    },
    {
      id: 6,
      image: require('./captions/img11.jpg')  ,
      name:"Mason Greenword",
      designation:"MD",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex earum distinctio in vero similique quisquam "
    },
    {
      id: 7,
      image: require('./captions/img12.jpg')  ,
      name:"Max",
      designation:"Ko",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex earum distinctio in vero similique quisquam "
    },
    {
      id: 8,
      image: require('./captions/img13.jpg')  ,
      name:"chrome",
      designation:"Digital marketing",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex earum distinctio in vero similique quisquam "
    },
]


const Grid = () => {


  const [currentFruit, setCurrentFruit] = useState('oranges')
  
  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit)
    if(newFruit === "bananas"){
      console.log('Support Team')
    }

  
  }

    return (
        <>
  <section className="text-center">
        <div className="container">
            <h2 className="fw-bold">OUR TEAM</h2>
            <div className="row">
             {
                teamData.map(teams =>{
                    return(
                    <div className="col-md-3" key={teams.id}>
                        <div className="card">
                         <img src={teams.image} className='img-fluid' alt="" />
                         <h3>{teams.name}</h3>
                         <span>{teams.designation}</span>
                         <p>{teams.description}</p> 
                        </div>
                    </div>
                    )
                })
             }
            </div>
        </div>
  </section>

   
    <form>
      <select 
        onChange={(event) => changeFruit(event.target.value)}
        value={currentFruit}
      >
        <option value="apples">Red Apples</option>
        <option value="oranges">Outrageous Oranges</option>
        <option value="tomatoes">Technically a Fruit Tomatoes</option>
        <option value="bananas">Bodacious Bananas</option>
      </select>
    </form>






        </>
    );
}

export default Grid;

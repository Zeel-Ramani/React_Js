import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercard from './pr1/pr1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="" >
      <div>
        <h1 style={{ textAlign: 'center' }}>User Cards</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' , margin: '20px',}}>
              <Usercard  name="Anish" instaid="anish_vaghasiya" phone="8320744767" emailid="anishvaghasiya001@gmail.com" img= "https://miro.medium.com/v2/resize:fit:1200/1*6Wc2r-HNCgFP2I2DyS0K7g.jpeg"/>

              <Usercard name="Jeel" instaid="Jeel_Ramani" phone="7658945678" emailid="jeel@gmail.com" img="https://i.pinimg.com/736x/e5/6b/79/e56b799b365e63c41041feb38fb7e965--guy-models-men-fashion.jpg"/>

              <Usercard name="Bhagirath" instaid="B_hagirath" phone="4657589763" emailid="b01@gmail.com" img="https://th.bing.com/th/id/R.65fa9e498edfd37d33acd0f8536b6676?rik=hy5hPP6ZCCJD8Q&riu=http%3a%2f%2fwww.malemodelscene.net%2fwp-content%2fuploads%2f2015%2f08%2fArthur-Gosse-Vince-FW15-07-620x863.jpg&ehk=loCK2qFB23dBK99in5Y8KPmL9SVX1TEznXxy2y%2bOmNo%3d&risl=&pid=ImgRaw&r=0"/>

              <Usercard name="Jay" instaid="sikhar_dhavan" phone="9353475758" emailid="sk@gmail.com" img="https://th.bing.com/th/id/R.b4f9f310599f0e39f4d8d82a5abd1f43?rik=pDrYdOt0MsnFAQ&riu=http%3a%2f%2fwww.malemodelscene.net%2fwp-content%2fuploads%2f2016%2f01%2fDowntown-Ted-Sun-MMSCENE-Magazine-08-620x802.jpg&ehk=IoYGbJDGxK03jQb112Jf8A%2bXG0zbpkbhcK2b4nZEK5w%3d&risl=&pid=ImgRaw&r=0"/>

              <Usercard name="Raj" instaid="Raj_balar" phone="6453738907" emailid="raj@gmail.com" img="https://i.pinimg.com/736x/d1/52/9e/d1529ee639a7548d443d7db7b7eaa9a5.jpg"/>

              <Usercard name="Yash" instaid="Yash_satani" phone="9784556789" emailid="yash@gmail.com" img="https://th.bing.com/th/id/R.eb5877179b1c103affbada0eb13f2724?rik=m8JIgnkGmzF7EQ&riu=http%3a%2f%2fwww.malemodelscene.net%2fwp-content%2fuploads%2f2014%2f07%2fJoan-Pastor-Ruben-Suarez-09.jpg&ehk=N70q5KKDEQ5659mbhIyYK0uXyEjXFEamfPEefzUO1VU%3d&risl=&pid=ImgRaw&r=0"/>
          </div>
      </div>
      
    </div>
  )
}

export default App

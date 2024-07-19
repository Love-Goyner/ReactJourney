import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")
  

  return (
    <>

    <div style={{backgroundColor: color}}>

        
          <nav className={`flex justify-center p-4 space-x-4 `}>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full" onClick={()=>setColor('red')}>Red</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full" onClick={()=>setColor('green')}>Green</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full" onClick={()=>setColor('blue')}>Blue</button>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-full" onClick={()=>setColor('yellow')}>Yellow</button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-full" onClick={()=>setColor('purple')}>Purple</button>
          </nav>
        

        <div className="flex justify-center items-center h-screen">
          <h1 className="text-4xl text-yellow-400">Welcome to the Color Buttons Navbar Page</h1>
        </div>
    </div>
    </>
  )
}

export default App

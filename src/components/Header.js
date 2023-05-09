import{ React,useContext }from 'react'
import { DictionaryContext } from '../App'
import { FaSearch } from "react-icons/fa";
import logo from "../logo.png"
const Header = () => {
    const {userInput, setUserInput,Data,wordDetails} = useContext(DictionaryContext)

  return (
    <div className=' bg-blue-500 main  '>

<section className=' h-[5vh] p-2 flex items-center justify-around shadow-md shadow-black'>

<div className='flex items-center'><img src={logo} style={{width:"30px"}}/><span className='italic text-white font-bold'>ictionary</span></div>
  
  </section>
<section className='w-screen h-[40vh] px-10 flex flex-col justify-center' >
    <input type="text" className='w-full px-2 my-5 text-blue-500 font-semibold border-none outline-none h-10 rounded-md shadow-md shadow-black'
    onInput={(event)=>{setUserInput(event.target.value)}}
    />

<button className='border-2 rounded-md py-2 text-white flex justify-center items-center font-medium hover:shadow-md hover:shadow-black hover:bg-blue-700'  onClick={()=>{Data()}}>
    <FaSearch className='mr-5'/>
    Search
    </button>
</section>

    </div>
  )
}

export default Header
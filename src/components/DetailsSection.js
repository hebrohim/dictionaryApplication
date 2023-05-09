import {React,useContext} from 'react'
import { DictionaryContext } from '../App'
import loadingImage from "../loading.gif"
import Footer from '../Footer'
const DetailsSection = () => {
    const {wordDetails,loading,setLoading}  = useContext(DictionaryContext)
   
    return (
    <div className='bg-white rounded-t-2xl pt-2 px-10 relative top-[-20px]'>
     <p className='text-center'>random word goes here</p>
     {loading?<div className='flex justify-center items-center'><img src={loadingImage} className='w-12' /></div>:
        
    wordDetails.map((word)=>{
        console.log(word)
        // console.log((word.meanings[0].definitions).length)
        return<div className=' w-full bg-slate-900 text-white mb-5'>
<h1>---{word.meanings[0].partOfSpeech}</h1>
{/* <p>{word.meanings[0].definitions[0].definition}</p> */}
         {/* <h1 className='capitalize text-3xl text-slate-900' > {word.word}</h1> */}
       <p> {(word.meanings[0].definitions).map((definition)=>{
        return <li className=' list-decimal bg-slate-200 text-slate-900'>{definition.definition}</li>
       })}</p> 
    
        </div>
    })
}
        
        </div>
  )


}

export default DetailsSection
import { React, useContext ,useState} from "react";
import { DictionaryContext } from "../App";


const Synonyms = () => {

    const { userInput, setUserInput, Data, wordDetails,synonym,setSynonym } =
    useContext(DictionaryContext);
  return (
    <div>
  <div className="flex justify-evenly">
        
        <button className="bg-zinc-500" onClick={()=>{setSynonym(!synonym)}}>{synonym?"Definitions":null}</button>
        <button>phonetics</button>
      </div>

      <div>
        <h1 className="text-4xl text-center text-slate-900 uppercase underline mt-10">Synonyms</h1>
        {wordDetails.map((word)=>{
            return <h1>{word.meanings[0].synonyms.map((synonym)=>{
                return <li className="list-none text-center text-xl mb-3">{synonym}</li>
            })
            }</h1>
        })}

<h1 className="text-4xl text-center text-slate-900 uppercase underline mt-10">Antonyms</h1>
        {wordDetails.map((word)=>{
            return <h1>{word.meanings[0].antonyms.map((antonym)=>{
                return <li className="list-none text-center text-xl mb-3">{antonym}</li>
            })
            }</h1>
        })}
      </div>
    
      
    </div>
  )
}

export default Synonyms
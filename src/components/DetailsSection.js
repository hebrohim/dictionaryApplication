import { React, useContext ,useState} from "react";
import { DictionaryContext } from "../App";
import loadingImage from "../loading.gif";
import Footer from "../Footer";
import Synonyms from "./Synonyms";
const DetailsSection = () => {

  const { wordDetails, loading, setLoading,synonym,setSynonym,soundUrl,setSoundUrl } = useContext(DictionaryContext);
  return (
    
    <section>
      {synonym?<Synonyms/>:
    <div className="bg-white rounded-t-2xl pt-2 px-10 relative top-[-20px]">
      {/* <p className="text-center">random word goes here</p> */}
      
      <div className="flex justify-between mt-5">
        
        <button className="font-semibold mb-5 p-2 hover:bg-slate-800 hover:text-white rounded-lg" onClick={()=>{setSynonym(true)}}>synonyms/Antonyms</button>
        {/* <button className="font-semibold p-3 hover:bg-slate-800 hover:text-white rounded-lg">phonetics</button> */}
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <img src={loadingImage} className="w-12" />
        </div>
          
      ) : (
        wordDetails.map((word) => {
          // console.log(word);
          
            setSoundUrl(word.phonetics[0].audio)
        
           
          return (
            <div className=" w-full bg-slate-700 text-white mb-5">
             <h1 className=" capitalize text-4xl text-white">{word.word}</h1>
              <h1>---{word.meanings[0].partOfSpeech}</h1>
              {/* <p>{word.meanings[0].definitions[0].definition}</p> */}
              {/* <h1 className='capitalize text-3xl text-slate-900' > {word.word}</h1> */}
              <p>
                {" "}
                {word.meanings[0].definitions.map((definition) => {
                  return (
                    <li className=" list-decimal bg-slate-100 text-xs text-slate-900 md:text-sm">
                      {definition.definition}
                    </li>
                  );
                })}
              </p>
            </div>
          );
        })
      )}
    </div>
}
    </section>
    
  );
};

export default DetailsSection;

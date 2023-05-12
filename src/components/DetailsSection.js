import { React, useContext ,useState} from "react";
import { DictionaryContext } from "../App";
import loadingImage from "../loading.gif";
import Footer from "../Footer";
import Synonyms from "./Synonyms";
const DetailsSection = () => {
  const { wordDetails, loading, setLoading } = useContext(DictionaryContext);

  const [synonym, setSynonym] = useState(false)

  return (
    <section>
      {synonym?<Synonyms/>:
    <div className="bg-white rounded-t-2xl pt-2 px-10 relative top-[-20px]">
      {/* <p className="text-center">random word goes here</p> */}
      <div className="flex justify-between">
        
        <button className="bg-zinc-500" onClick={()=>{setSynonym(true)}}>synonyms</button>
        <button>phonetics</button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <img src={loadingImage} className="w-12" />
        </div>
      ) : (
        wordDetails.map((word) => {
          console.log(word);
          // console.log((word.meanings[0].definitions).length)
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
                    <li className=" list-decimal bg-slate-100 text-slate-900">
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

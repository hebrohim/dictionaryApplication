import { React, useContext, useState } from "react";
import { DictionaryContext } from "../App";
import { FaSearch } from "react-icons/fa";
import logo from "../logo.png";
import { RxSpeakerLoud } from "react-icons/rx";
//import useSound for audio
import useSound from "use-sound";
import ad from"./audio.mp3"


const Header = () => {
  const { userInput, setUserInput, Data, wordDetails,soundUrl,setSoundUrl } =
    useContext(DictionaryContext);

  //Audio
  const [play] = useSound(`${soundUrl}`)
 
  return (
    <div className=" bg-blue-500 main  ">
     
      <section className=" h-[5vh] p-2 flex items-center justify-around shadow-md shadow-black md:h-[8vh]">
        <div className="flex items-center">
          <img src={logo} style={{ width: "30px" }} />
          <span className="italic text-white font-bold">ictionary</span>
        </div>
      </section>
      <section className="w-screen h-[40vh] px-10 flex flex-col justify-center md:flex-row md:items-center md:justify-center">
        <input
          type="text"
          placeholder="Enter word here..."
          className="w-full px-2 my-5 text-blue-500 font-semibold border-none outline-none h-10 rounded-md shadow-md shadow-black md:w-1/2 md:h-[50px]"
          onInput={(event) => {
            setUserInput(event.target.value);
          }}
        />

        <button
          className="border-2 rounded-md py-2 text-white flex justify-center items-center font-medium hover:shadow-md hover:shadow-black hover:bg-blue-700 md:py-0 md:h-[50px] md:px-[9px] md:ml-2"
          onClick={() => {
            Data();
          
          }}
        >
          <FaSearch className="mr-5" />
          Search
        </button>
     
        {/* <RxSpeakerLoud className="text-white text-4xl" />
        <button onClick={play}>click for sound</button>
      */}
      </section>
      <div className="pt mt-[-3rem] pb-10 ">
          
          {wordDetails.map((word) => {
            return <span className="text-white text-sm md:text-xl flex items-center justify-center">{word.meanings[0].partOfSpeech} :   {word.phonetic}</span>;
          })}

          
        </div>
    </div>
  );
};

export default Header;

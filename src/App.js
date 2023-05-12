import { React, createContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import axios from "axios";
import useSound from "use-sound";
import DetailsSection from "./components/DetailsSection";
// import boopSfx from '../../sounds/boop.mp3';

//export context
export const DictionaryContext = createContext(null);

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [wordDetails, setWordDetails] = useState([]);
  const [Message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)
  // const [randomWords, setRandomWords] = useState([]);
  // const [randomWord, setRandomWord] = useState('');

  const baseURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;

  //fetch meaning of word from API
  const Data = () => {
    setLoading(true)
    axios
      .get(baseURL)
      .then((response) => {
        // console.log(response.data);
        setWordDetails(response.data);

        setLoading(false)
      })
      .catch((error) => {
        setMessage("oops!,check connection and try again!");
      });
    if (!userInput) {
      setMessage("please input a word!");
    }
    console.log(wordDetails);
  };

  // axios.get('https://api.api-ninjas.com/v1/randomword').then((response) => {
  //   console.log(response.data);

  // })

  // fetch("https://random-word-api.herokuapp.com/all").then((response) =>
  //   response.json().then((data) => {
  //     // console.log(data);
  //     setRandomWords(data);
  //   })
  // );
  // setInterval(() => {
  //   //random number Generation
  //   let randomNumber = Math.ceil(Math.random() * randomWords.length);
  //   setRandomWord(randomWords[randomNumber]);
  // }, 5000);
//  console.log(randomWords)
  return (
    <DictionaryContext.Provider
      value={{ userInput, setUserInput, Data, wordDetails,loading,setLoading}}
    >
      <Header />

      {/* <button onClick={play}>Boop!</button> */}

      <DetailsSection />
      <p className="text-center"> {Message}</p>
    </DictionaryContext.Provider>
  );
};

export default App;

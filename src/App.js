
import React from 'react'
import { motion } from "framer-motion";
import Header from './components/Header';

const App = () => {
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
.then((response) => response.json())
.then((data) => console.log(data));
  return (
    <>


<Header/>

    </>
  )
}

export default App
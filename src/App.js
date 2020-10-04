import React from "react"
import "./App.scss"
import Header from "./component/header"
import Headline from "./component/headline"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Headline header="Posts" desc="Click button to render posts!" />
      </div>
    </div>
  )
}

export default App

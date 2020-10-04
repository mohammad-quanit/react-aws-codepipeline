import React from "react"
import "./App.scss"
import Header from "./component/header"
import Headline from "./component/headline"

const tempArr = [
  {
    fname: "Mohd",
    lname: "Quanit",
    age: 24,
    status: true
  },
  {
    fname: "Mohd",
    lname: "Quanit",
    age: 24,
    status: true
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Headline header="Posts" desc="Click button to render posts!" tempArr={tempArr} />
      </div>
    </div>
  )
}

export default App

import React from "react"
import "./styles.scss"
import logo from "../../assets/logo.svg"

export default function Header(props) {
  return (
    <header data-test="headerComp">
      <div className="wrap">
        <div className="logo">
          <img
            data-test="logo-img"
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </div>
      </div>
    </header>
  )
}

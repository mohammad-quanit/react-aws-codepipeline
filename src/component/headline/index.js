import React, { Component } from "react"
import PropTypes from 'prop-types'

export default class Headline extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { header, desc } = this.props
    if (!header) {
      return null
    }
    return (
      <div data-test="headlineComp">
        <h1 data-test="header">{header}</h1>
        <p data-test="descWrapper">{desc}</p>
      </div>
    )
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(PropTypes.shape({
    fname: PropTypes.string,
    lname: PropTypes.string,
    age: PropTypes.number,
    status: PropTypes.bool,
  }))
}

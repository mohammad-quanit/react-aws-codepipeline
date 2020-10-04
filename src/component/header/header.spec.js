import React from "react"
import { shallow } from "enzyme"

import Header from "./index"
import { findByTestAttr } from "../../../utils"

const setUp = (props = {}) => shallow(<Header {...props} />)

describe("Header Component - Suite", () => {
  let componentWrapper
  beforeEach(() => {
    componentWrapper = setUp()
  })

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(componentWrapper, "headerComp")
    expect(wrapper.length).toBe(1)
  })

  it("Should render logo", () => {
    const logo = findByTestAttr(componentWrapper, "logo-img")
    expect(logo.length).toBe(1)
  })
})

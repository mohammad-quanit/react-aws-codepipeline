import React from "react"
import { shallow } from "enzyme"

import Header from "./index"
import { findByTestAttr } from "../../../utils"

const setUp = (props = {}) => shallow(<Header {...props} />)

describe("Header Component - Suite", () => {
  describe("Have Props", () => {
    let wrapper
    beforeEach(() => {
      const props = {
        header: "Test",
        desc: "Test Desc",
      }
      wrapper = setUp(props)
    })

    test("should render withour errors", () => {
      const component = findByTestAttr(wrapper, "headlineComp")
      expect(component.length).toBe(1)
    })

    test("should render H1 element", () => {
      const h1 = findByTestAttr(wrapper, "header")
      expect(h1.length).toBe(1)
      expect(h1.text()).toBe("Test")
    })

    test("should render Description", () => {
      const desc = findByTestAttr(wrapper, "descWrapper")
      expect(desc.length).toBe(1)
    })
  })

  describe("Have NO props", () => {
    let wrapper
    beforeEach(() => {
      wrapper = setUp()
    })

    test("should not render", () => {
      const component = findByTestAttr(wrapper, "headlineComp")
      expect(component.length).toBe(0)
    })
  })
})

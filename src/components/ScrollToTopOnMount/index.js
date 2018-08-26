import React,{PureComponent} from "react"
export default class ScrollToTopOnMount extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return null
  }
}
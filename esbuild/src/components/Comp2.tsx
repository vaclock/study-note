import logo from "../assets/logo.png";
import comps from "./comps.module.css";

export default () => {
  return (
    <>
      <h1 className={ comps.title }>Comp2</h1>
      <img src={logo} />
    </>
  )
}
import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NaveBar from "../components/NaveBar"

const Root = () => {
  return (
    <div className="w-full  grid h-screen grid-cols-view grid-rows-view">
      <div className="col-start-1 col-end-2 row-start-1 row-end-1 bg-rose-100 ">
        <NaveBar />{" "}
      </div>
      <main className=" w-full h-full col-start-1 col-end-2 row-start-2 row-end-2 overflow-y-auto p-10 bg-rose-200">
        <Outlet />{" "}
      </main>
      <div className="col-start-1 col-end-2 flex items-center justify-center border-t-2 p-4 bg-rose-300">
        <Footer/>
      </div>
    </div>
  )
}

export default Root

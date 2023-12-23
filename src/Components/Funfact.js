import React from 'react'
import Singlefunfact from './Singlefunfact'

const Funfact = () => {
  const funfact ={
    funfact1:{
      icon:"icofont icofont-home",
      counter :"7894",
      Heading :"Hospital Rooms"
    },
    funfact2:{
      icon:"icofont-user-alt-3",
      counter :"3439",
      Heading :"Specialist Doctors"
    },
    funfact3:{
      icon:"icofont-simple-smile",
      counter :"47",
      Heading :"Years of Experience"
    },
    funfact4:{
      icon:"icofont-simple-smile",
      counter :"47",
      Heading :"Global Awards"
    }
  }
  return (
    <>
       <div id="fun-facts" className="fun-facts section overlay">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
         <Singlefunfact funfact={funfact.funfact1}/>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
         <Singlefunfact funfact={funfact.funfact2}/>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
        <Singlefunfact funfact={funfact.funfact3}/>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <Singlefunfact funfact={funfact.funfact4}/>
          {/* End Single Fun */}
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Funfact

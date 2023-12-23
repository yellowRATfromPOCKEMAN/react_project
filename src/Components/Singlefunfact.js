import React from 'react'

const Singlefunfact = ({funfact}) => {
  return (
    <>
       <div className="single-fun">
            <i className= {`icofont ${funfact.icon}`} />
            <div className="content">
              <span className="counter">{funfact.counter}</span>
              <p>{funfact.Heading}</p>
            </div>
          </div>
    </>
  )
}

export default Singlefunfact


{/* <div className="single-fun">
<i className="icofont icofont-user-alt-3" />
<div className="content">
  <span className="counter">557</span>
  <p>Specialist Doctors</p>
</div>
</div> */}

{/* <div className="single-fun">
            <i className="icofont-simple-smile" />
            <div className="content">
              <span className="counter">4379</span>
              <p>Happy Patients</p>
            </div>
          </div> */}

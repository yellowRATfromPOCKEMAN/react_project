import React from 'react'

const SingleFeature = ({feature}) => {
  return (
    <>
     <div className={`single-features ${(feature.key === 3) ? 'last' : ''}`}>
        <div className="signle-icon">
          <i className={`icofont ${feature.icon}`}/>
             </div>
            <h4>{feature.name}</h4>
            <p>{feature.caption }</p>
          </div>
    </>
  )
}

export default SingleFeature

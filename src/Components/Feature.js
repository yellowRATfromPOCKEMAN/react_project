import React from 'react'
import SingleFeature from './SingleFeature'

const Feature = () => {
  const feature={
    feature1 : {
      key:1,
      icon:'icofont-ambulance-cross',
      name: "Enriched pharmacy",
      caption:"abbdbdbdbdbd"
    },
    feature2 : {
      key:2,
      icon:'icofont-medical-sign-alt',
      name:"Enriched Medication",
      caption:"abbdbdbdbdbd"
    },
    feature3 : {
      key:3,
      icon:'icofont-stethoscope',
      name:"Enriched surgery",
      caption:"abbdbdbdbdbd"
    },
  }
  return (
    
    <div>
      <section className="Feautes section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>We Are Always Ready to Help You &amp; Your Family</h2>
            <img src="img/section-img.png" alt="#" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
         <SingleFeature feature={feature.feature1}/>
          {/* End Single features */}
        </div>
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <SingleFeature feature={feature.feature2}/>
          {/* End Single features */}
        </div>
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <SingleFeature feature={feature.feature3}/>
          {/* End Single features */}
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Feature

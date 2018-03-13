import React from 'react'


export default (content, component) => {

  const { callToActionButtons } = content.introSection

  return(
    <section className="section--landing-page--intro">

      <div className="row">
        <img src="/bringit-logo-landing-intro.png" className="logo logo--landing-intro" />
      </div>

      <h1 className="center-text"> The Future of Work </h1>

      <p className="center-text subtitle--landing-intro">
        BringIt is a talent marketplace that enables teams across IBM to
        crowdsource deliverables and find talent to deliver higher value
        outcomes to their clients.
      </p>

      <div className="row wrap call-to-action">
        {
          callToActionButtons.map(button => {
            const { buttonText, buttonLinkHref, subButtonText, buttonColor } = button
            return(
              <div className="call-to-action--action-item col-3 col-sm-10 col-md-5">
                <button className={`ui button full-width ${buttonColor || 'blue'}`}> { buttonText } </button>
                <p className="center-text"> { subButtonText } </p>
              </div>
            )
          })
        }
      </div>

      <div className="row">
        <i className="chevron circle down icon scroll-icon--landing-intro"></i>
      </div>

      <h1 className="center-text"> Get Ahead With BringIt </h1>
      <h3 className="center-text">
        Explore a feature to get started and
        learn how you can get ahead with BringIt
      </h3>

    </section>
  )
}

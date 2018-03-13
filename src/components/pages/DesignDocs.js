import React,{ Component } from 'react'
import mastermind from './../../mastermind'

class DesignDocsPage extends Component {
  render() {
    return(

      <div style={{ paddingTop: '80px' }}>
        <h1 className=""> BringIt Design Docs </h1>

        <section>
          <h2 className="">Button Styles</h2>

          <div className="row">
            <div className="col-3">
              <h3 className=""> Enabled </h3>
              <button className="full-width button--color--primary"> Primary Button </button>
            </div>
            <div className="col-3">
              <h3 className=""> Disabled </h3>
              <button className="full-width button--color--primary disabled"> Primary Button </button>
            </div>
            <div className="col-3">
              <h3 className=""> Enabled </h3>
              <button className="full-width button--color--secondary"> Secondary Button </button>
            </div>
            <div className="col-3">
              <h3 className=""> Disabled </h3>
              <button className="full-width button--color--secondary disabled"> Secondary Button </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <h3 className=""> Enabled </h3>
              <button className="full-width button--ghost"> Ghost Button <i className="plus circle icon" /> </button>
            </div>
            <div className="col-3">
              <h3 className=""> Disabled </h3>
              <button className="full-width button--ghost disabled"> Ghost Button <i className="plus circle icon" /> </button>
            </div>
            <div className="col-3">
              <h3 className=""> Enabled </h3>
              <button className="full-width button--color--secondary"> Backward </button>
            </div>
            <div className="col-3">
              <h3 className=""> Disabled </h3>
              <button className="full-width button--color--primary"> Forward </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <h3 className=""> Button with Icon Remove </h3>
              <button className="full-width button--color--primary"> Button Remove <i className="times circle icon" /> </button>
            </div>
            <div className="col-3">
              <h3 className=""> Button with Icon Add </h3>
              <button className="full-width button--color-primary"> Button Add <i className="plus circle icon" /> </button>
            </div>
            <div className="col-3">
              <h3 className=""> Button with Icon Remove </h3>
              <button className="full-width button--remove"> Button Remove <i className="times circle outline icon" /> </button>
            </div>
            <div className="col-3">
              <h3 className=""> Button with Icon Add </h3>
              <button className="full-width button--add"> Button Add <i className="plus icon" /> </button>
            </div>
          </div>


        </section>




      </div>
    )
  }
}


export default mastermind.connectStore(DesignDocsPage, [])

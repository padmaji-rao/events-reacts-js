import './index.css'

const ActiveStatusList = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeStatus} = props

  switch (activeStatus) {
    case ActiveStatusList.initial:
      return (
        <p className="initial-para">
          Click on an event, to view its registration details
        </p>
      )

    case ActiveStatusList.yetToRegister:
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="register-img"
          />
          <p>
            A live performance brings so much to your relationship with dance.
            Seeing dance live can often make you fall totally in love with this
            beautiful art form.
          </p>
          <button className="register-btn" type="button">
            Register Here
          </button>
        </>
      )

    case ActiveStatusList.registered:
      return (
        <>
          <img
            alt="registered"
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            className="success-img"
          />
          <h2 className="registered-para">
            You have already registered for the event
          </h2>
        </>
      )

    case ActiveStatusList.registrationsClosed:
      return (
        <>
          <img
            alt="registrations closed"
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            className="closed-img"
          />
          <h2 className="closed-head">Registrations Are Closed Now!</h2>
          <p className="closed-para">
            Stay tuned. We will reopen the registrations soon!
          </p>
        </>
      )

    default:
      return null
  }
}
export default ActiveEventRegistrationDetails

import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, activeId} = props
  const {imageUrl, name, location, registrationStatus, id} = eventDetails
  let clicked = ''
  if (id === activeId) {
    clicked = 'clicked'
  }
  const onEventClicked = () => {
    onClickEvent(registrationStatus, id)
  }

  return (
    <li className="event-container">
      <button className="img-btn" onClick={onEventClicked} type="button">
        <img alt="event" src={imageUrl} className={`event-img ${clicked}`} />
      </button>

      <p className="event-css">{name}</p>
      <p className="event-css-para">{location}</p>
    </li>
  )
}

export default EventItem

import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>You reservation has been confirmed.</h2>
      <p>You will receive an email wit all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;

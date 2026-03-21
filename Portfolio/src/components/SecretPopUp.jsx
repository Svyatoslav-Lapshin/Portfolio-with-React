import popUpPhoto from "../assets/418.jpg";

function SecretPopUp({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div id="popup-418" className="modal open">
      <div className="modal-content">
        <img src={popUpPhoto} alt="418" className="popUp-img" />

        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default SecretPopUp;

import Popup from './Popup';

function PopupWithForm({ name, title, isOpen, onClose, btnText, onSubmit, children, isValid, isLoading }) {

  return (
    <Popup
      name={name}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="popup__content">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          onSubmit={onSubmit}
        >
          <fieldset className="popup__box">
            {children}
            <button
              className="popup__button"
              type="submit"
              disabled={!isValid || isLoading}
            >
              {btnText}
            </button>
          </fieldset>
        </form>
      </div>
    </Popup >
  );
}

export default PopupWithForm;

import Popup from './Popup';
import successImg from '../images/success.svg';
import faultImg from '../images/fault.svg';

function InfoTooltip({ isOpen, onClose, success, message }) {
    return (
        <Popup
            name='tooltip'
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="popup__content">
                {success ? < img
                    className="popup__img-tooltip"
                    src={successImg}
                    alt="success"
                /> : < img
                    className="popup__img-tooltip"
                    src={faultImg}
                    alt="fault"
                />
                }
                <p className="popup__title">{message}</p>
            </div>

        </Popup >
    )
}

export default InfoTooltip
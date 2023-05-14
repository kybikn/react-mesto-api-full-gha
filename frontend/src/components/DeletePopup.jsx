import PopupWithForm from './PopupWithForm';
import useFormAndValidation from '../hooks/useFormAndValidation';

function DeletePopup({ isOpen, onClose, onDeletePopup, cardToDelete }) {
    const { isValid } = useFormAndValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onDeletePopup(cardToDelete);
    }

    return (
        <PopupWithForm
            name='delete'
            title='Вы уверены?'
            btnText='Да'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isValid={isValid}
        >
        </PopupWithForm>
    )
}

export default DeletePopup

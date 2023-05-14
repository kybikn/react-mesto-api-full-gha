import PopupWithForm from './PopupWithForm';
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useFormAndValidation from '../hooks/useFormAndValidation';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
    const currentUser = useContext(CurrentUserContext);
    const { values, errors, isValid, setValues, handleChange, resetForm } = useFormAndValidation();

    useEffect(() => {
        resetForm();
        setValues({
            name: currentUser.name,
            about: currentUser.about
        })
    }, [isOpen, currentUser, setValues, resetForm]);


    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: values['name'],
            about: values['about']
        });
    }

    function handleResetInputName() {
        setValues({ ...values, name: '' });
    }

    function handleResetInputAbout() {
        setValues({ ...values, about: '' });
    }

    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isValid={isValid}
            isLoading={isLoading}
            btnText={isLoading ? 'Сохранение...' : 'Сохранить'}
        >
            <label className="popup__label">
                <span
                    className="popup__input-close"
                    onClick={handleResetInputName}>
                    &times;
                </span>
                <input
                    className="popup__input"
                    value={values['name'] || ''}
                    // id="popup__input-name"
                    name="name"
                    type="text"
                    placeholder="Ваше имя"
                    onChange={handleChange}
                    minLength={2}
                    maxLength={40}
                    required
                />
                <span className="popup__input-error">{errors['name'] || ''}</span>
            </label>
            <label className="popup__label">
                <span
                    className="popup__input-close"
                    onClick={handleResetInputAbout}>
                    &times;
                </span>
                <input
                    className="popup__input"
                    value={values['about'] || ''}
                    // id="popup__input-about"
                    name="about"
                    type="text"
                    placeholder="Ваша профессия"
                    onChange={handleChange}
                    minLength={2}
                    maxLength={200}
                    required
                />
                <span className="popup__input-error">{errors['about'] || ''}</span>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup
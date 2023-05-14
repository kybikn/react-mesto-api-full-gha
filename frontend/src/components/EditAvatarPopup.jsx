import PopupWithForm from './PopupWithForm';
import { useEffect } from 'react';
import useFormAndValidation from '../hooks/useFormAndValidation';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
    const { values, errors, isValid, setValues, handleChange, resetForm } = useFormAndValidation();

    useEffect(() => {
        resetForm();
    }, [isOpen, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(values['link']);
    }

    function handleResetInputAvatar() {
        setValues({ link: '' });
    }

    return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            btnText={isLoading ? 'Сохранение...' : 'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isValid={isValid}
            isLoading={isLoading}
        >
            <label className="popup__label">
                <span
                    className="popup__input-close"
                    onClick={handleResetInputAvatar}>
                    &times;
                </span>
                <input
                    className="popup__input"
                    value={values['link'] || ''}
                    // id="popup__input-avatar"
                    name="link"
                    type="url"
                    placeholder="Ссылка на аватар"
                    onChange={handleChange}
                    minLength={2}
                    maxLength={500}
                    required
                />
                <span className="popup__input-error">{errors['link'] || ''}</span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup
import PopupWithForm from './PopupWithForm';
import { useEffect } from 'react';
import useFormAndValidation from '../hooks/useFormAndValidation';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
    const { values, errors, isValid, setValues, handleChange, resetForm } = useFormAndValidation();

    useEffect(() => {
        resetForm();
    }, [isOpen, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: values['name'],
            link: values['link']
        });
    }

    function handleResetInputPlace() {
        setValues({ ...values, name: '' });
    }

    function handleResetInputLink() {
        setValues({ ...values, link: '' });
    }

    return (
        <PopupWithForm
            name='place'
            title='Новое место'
            btnText={isLoading ? 'Сохранение...' : 'Создать'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isValid={isValid}
            isLoading={isLoading}
        >
            <label className="popup__label">
                <span
                    className="popup__input-close"
                    onClick={handleResetInputPlace}>
                    &times;
                </span>
                <input
                    className="popup__input"
                    value={values['name'] || ''}
                    // id="popup__input-place"
                    name="name"
                    type="text"
                    placeholder="Название"
                    onChange={handleChange}
                    minLength={2}
                    maxLength={40}
                    required
                />
                <span className="popup__input-error">{errors['name'] || ''}</span>
            </label >
            <label className="popup__label">
                <span
                    className="popup__input-close"
                    onClick={handleResetInputLink}>
                    &times;
                </span>
                <input
                    className="popup__input"
                    value={values['link'] || ''}
                    // id="popup__input-url"
                    name="link"
                    type="url"
                    placeholder="Ссылка на картинку"
                    onChange={handleChange}
                    minLength={2}
                    maxLength={500}
                    required
                />
                <span className="popup__input-error">{errors['link'] || ''}</span>
            </label>
        </PopupWithForm >
    )
}

export default AddPlacePopup
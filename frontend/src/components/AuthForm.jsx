function AuthForm({ formName, title, onSubmit, onChange, btnText, children, values, setValues, errors, isValid, }) {

    function handleResetInputEmail() {
        setValues({ ...values, email: '' });
    }

    function handleResetInputPassword() {
        setValues({ ...values, password: '' });
    }

    return (
        <div className="auth">
            <h2 className="auth__title">
                {title}
            </h2>
            <form
                className="auth__form"
                name={formName}
                onSubmit={onSubmit}
            >
                <fieldset className="auth__box">
                    <label className="auth__label">
                        <span className="auth__input-close"
                            onClick={handleResetInputEmail}>
                            &times;
                        </span>
                        <input
                            className="auth__input"
                            value={values.email || ""}
                            name="email"
                            type="email"
                            placeholder="Email"
                            minLength={3}
                            maxLength={40}
                            onChange={onChange}
                            required />
                        <span className="popup__input-error">{errors['email'] || ''}</span>
                    </label >
                    <label className="auth__label">
                        <span className="auth__input-close"
                            onClick={handleResetInputPassword}>
                            &times;
                        </span>
                        <input
                            className="auth__input"
                            value={values.password || ""}

                            name="password"
                            type="password"
                            placeholder="Пароль"
                            onChange={onChange}
                            minLength={6}
                            maxLength={20}
                            required />
                        <span className="popup__input-error">{errors['password'] || ''}</span>
                    </label >
                    <button
                        className="auth__button"
                        type="submit"
                        disabled={!isValid}
                    >{btnText}</button>
                </fieldset>
                {children}
            </form>
        </div >
    )
}

export default AuthForm;
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { useSelector } from "react-redux";
import { startRegisterWithEmailAndPass } from "../../actions/auth";

const RegisterScreen = () => {
  const { msgError } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password_2: "",
  });

  const { name, email, password, password_2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(startRegisterWithEmailAndPass(name, email, password));
    }
  };

  const validateForm = () => {
    if (name.trim().length <= 3) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password_2) {
      dispatch(setError("Passwords do not match"));
      return false;
    } else if (!validator.isStrongPassword(password)) {
      dispatch(setError("Password is not valid"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h1 className="auth__title">Alexander Restaurantes</h1>
      <h3 className="auth__subtitle">Registro</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          name="password_2"
          className="auth__input"
          value={password_2}
          onChange={handleInputChange}
        />
        <span className="auth__password-info">
          (Debe contener más de 8 caracteres, incluyendo minúscula, mayúscula,
          número y caracter especial)
        </span>
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Registrarse
        </button>
        <Link to="/auth/login" className="auth__new-account">
          ¿Ya estás registrado?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;

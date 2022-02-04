import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { starLoginWithGoogle, startLoginWithEmailAndPass } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

const LoginScreen = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const {email, password} = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    // dispatch(login(123456, 'Brayan'))
    dispatch(startLoginWithEmailAndPass(email, password))
  }

  const handleLoginWithGoogle = () => {
    dispatch(starLoginWithGoogle())
  }

  return (
    <>
      <h1 className="auth__title">Alexander Restaurantes</h1>
      <h3 className="auth__subtitle">Entrar</h3>
      <form onSubmit={handleLogin}>
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
        <button 
        type="submit"
        className="btn btn-primary btn-block disabled"
        disabled={loading}
        >Ingresar</button>
        <div className="auth__social" onClick={handleLoginWithGoogle}>
          <p className="auth__subtitle">Redes Sociales</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Ingresar con Google Account</b>
            </p>
          </div>
        </div>
        <Link
          to='/auth/register'
          className="auth__new-account"
        >
          ¿Nuevo por aquí?
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;

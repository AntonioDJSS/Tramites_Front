import React, { useState } from "react";

export const PasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showComprobarPassword, setShowComprobarPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleComprobarPasswordVisibility = () => {
    setShowComprobarPassword(!showComprobarPassword);
  };

  return { showPassword, showComprobarPassword, togglePasswordVisibility, toggleComprobarPasswordVisibility };
};

export const getPasswordStrengthClass = (strength) => {
    switch (strength) {
      case "Contraseña débil":
        return "text-red-500"; // Estilo para contraseñas débiles
      case "Contraseña segura":
        return "text-yellow-500"; // Estilo para contraseñas moderadas
      case "Contraseña fuerte":
        return "text-green-500"; // Estilo para contraseñas fuertes
      default:
        return ""; // Estilo predeterminado
    }
  };

export const calculatePasswordStrength = (password) => {
    // Verificar la longitud de la contraseña
    if (password.length < 8) {
      console.log("Contraseña es débil debido a la longitud.");
      return "Contraseña débil";
    }
  
    // Contadores para mayúsculas, minúsculas, números y caracteres especiales
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    let digitCount = 0;
    let specialCharCount = 0;
  
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    // Verificar cada carácter en la contraseña
    for (const char of password) {
      if (/[A-Z]/.test(char)) {
        uppercaseCount++;
      } else if (/[a-z]/.test(char)) {
        lowercaseCount++;
      } else if (/[0-9]/.test(char)) {
        digitCount++;
      } else if (specialChars.includes(char)) {
        specialCharCount++;
      }
    }
  
    // Determinar la fortaleza de la contraseña
    if (uppercaseCount >= 1 && lowercaseCount >= 1 && digitCount >= 1 && specialCharCount >= 1 || password.length >= 25) {
      console.log("Contraseña es fuerte debido a mayúsculas, minúsculas, números y caracteres especiales.");
      return "Contraseña fuerte";
    } else if (password.length >= 8 && uppercaseCount >= 1) {
      console.log("Contraseña es moderada debido a la longitud.");
      return "Contraseña segura";
    } else {
      console.log("Contraseña es débil por defecto.");
      return "Contraseña débil";
    }
  };

  export const formSubmit = async ({
    nombre,
    correo,
    password,
    comprobarPassword,
    setAlerta,
    navigate,
    axiosClient,
  }) => {
    // Realiza la lógica de handleSubmit aquí
    if ([nombre, correo, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son necesarios",
        error: true,
      });
      return;
    }
  
    if (!correo.includes('@')) {
      setAlerta({
        status: 'fail',
        message: "La contraseña debe tener al menos 8 caracteres",
        error: true,
      });
      return;
    }
  
    const correoValidate = 'iktanst.com'
    const divideCorreo = correo.split('@')
  
    console.log('dividiendo correo:', correo.split('@'))
  
    if (password.length < 8) {
      setAlerta({
        msg: "La contraseña debe tener al menos 8 caracteres",
        error: true,
      });
      return;
    }
  
    if (password !== comprobarPassword) {
      setAlerta({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }
  
    setAlerta({});
    try {
      await axiosClient.post("/auth/registrar", { nombre, correo, password });
      setAlerta({
        msg: "Usuario registrado correctamente, confirme su cuenta",
        error: false,
      });
    } catch (error) {
      setAlerta({ msg: error.response.data.errors[0].msg, error: true });
    }
  
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  
  
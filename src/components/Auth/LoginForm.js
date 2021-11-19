import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useFormik } from 'formik'; // sirve para manejar el estado formulario
import * as Yup from "yup"; // para las validaciones
import { userDB, userDetails } from '../../utils/userDB';

const LoginForm = () => {
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      // console.log(formValue);
      const { username, password } = formValue;
      (username !== userDB.username || password !== userDB.password)? setError('credenciales incorrectas') : console.log('login correcto');
    }
  })
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect= {false}
        value={formik.values.username}
        onChangeText = { (text) => formik.setFieldValue('username', text)} 
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        autoCapitalize="none"
        value={formik.values.password}
        style={styles.input}
        onChangeText = {(text) => formik.setFieldValue('password', text)} 
      />

      <View style={styles.btnLogin}>
        <Button title="Entrar" onPress={formik.handleSubmit}/>
      </View>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      {/* credenciales ambas son incorrectas */}
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}
// INICIAR LOS VALORES DEL FORMULARIO
const initialValues = () => {
  return {
    username: "",
    password: ""
  }
}

// objeto de validación para yup y formik
const validationSchema = () => ({
  username: Yup.string().required("El usuario es requerido"),
  password: Yup.string().required("La contraseña es requerida")
})

const styles = StyleSheet.create({
  btnLogin: {
    paddingHorizontal: 12
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20
  }
})

export default LoginForm
import { useState } from "react";
import { ScrollView , Text, StyleSheet, TextInput, Button} from "react-native";


export default function RegistrationScreen(){
const [formulario, setFormulario] = useState({
    nombre: 'prueba',
    apellido: 'test',
    correo: '',
    telefono: '',
    password: '',
    confirmarpassword: '',
});

const [errores, setErrores] = useState({
    nombre: 'prueba',
    apellido: 'test',
    correo: '',
    telefono: '',
    password: '',
    confirmarpassword: '',
});

const manejarCambio = (campo: string, valor: string) => {
    setFormulario((prevFormulario)=>({
        ...prevFormulario,
        [campo]: valor,
    }));
};

const validarFormulario = () =>{
    if(!formulario.nombre.trim)
};

const manejarRegistro = () =>{

};

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Registro</Text>
            <Text style={styles.label}>Nombre: </Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su nombre"
            value={formulario.nombre}
            onChangeText={(texto) =>{manejarCambio('nombre', texto)}}
            />

            <Text style={styles.label}>Correo Electronico: </Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su correo"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formulario.correo}
            onChangeText={(texto) =>{manejarCambio('correo', texto)}}
            />

            <Text style={styles.label}>Numero telefono: </Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su numero telefono"
            keyboardType="phone-pad"
            maxLength={8}
            value={formulario.telefono}
            onChangeText={(texto) =>{manejarCambio('telefono', texto)}}
            />

            <Text style={styles.label}>Contraseña: </Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            secureTextEntry
            value={formulario.password}
            onChangeText={(texto) =>{manejarCambio('password', texto)}}
            />

            <Text style={styles.label}>Confirmar Contraseña: </Text>
            <TextInput
            style={styles.input}
            placeholder="Confirme su contraseña"
            secureTextEntry
            value={formulario.confirmarpassword}
            onChangeText={(texto) =>{manejarCambio('confirmarpassword', texto)}}
            />

            <button title="Registrarse" onSubmit={manejarRegistro}/>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },

    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    }
});
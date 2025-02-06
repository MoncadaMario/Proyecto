import { useState } from "react";
import { ScrollView , Text, StyleSheet, TextInput, Button, Alert} from "react-native";


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
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    password: '',
    confirmarpassword: '',
});

const manejarCambio = (campo: string, valor: string) => {
    validarFormulario();
    setFormulario((prevFormulario)=>({
        ...prevFormulario,
        [campo]: valor,
    }));
};

const validarFormulario = () =>{
    let erroresTemp: any = {};
    
    if(!formulario.nombre.trim()) erroresTemp.nombre = "El nombre es invalido";
    if(!formulario.apellido.trim()) erroresTemp.apellido = "El apellido es invalido";
    if(!formulario.correo.includes('@')) erroresTemp.correo = "El correo es invalido";
    if(formulario.telefono.length < 8) erroresTemp.telefono = "El telefono es invalido";
    if(formulario.password.length < 4) erroresTemp.password = "Minimo 4 caracteres";
    if(formulario.password !== formulario.confirmarpassword) erroresTemp.confirmarpassword = "Contraseña no es igual";

    setErrores(erroresTemp);
};

const manejarRegistro = () =>{
    validarFormulario();
    if (Object.keys(errores).length===0){
        Alert.alert('Registro exitoso', `Bienvenido, ${formulario.nombre} ${formulario.apellido}`)
    }else{
        Alert.alert('Error','Por favor corrija los errores');
    }
};

    return(
        <ScrollView contentContainerStyle={styles.container}>
            
            <Text>Registro</Text>

            <Text style={styles.label}>Nombre: {formulario.nombre}</Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su nombre"
            value={formulario.nombre}
            onChangeText={(texto) =>{manejarCambio('nombre', texto)}}
            />
            {errores.nombre && <Text style={styles.error}>{errores.nombre}</Text>}

            <Text style={styles.label}>Apellido: </Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su apellido"
            value={formulario.apellido}
            onChangeText={(texto) =>{manejarCambio('apellido', texto)}}
            />
            {errores.apellido && <Text style={styles.error}>{errores.apellido}</Text>}

            <Text style={styles.label}>Correo Electronico: </Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su correo"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formulario.correo}
            onChangeText={(texto) =>{manejarCambio('correo', texto)}}
            />
            {errores.correo && <Text style={styles.error}>{errores.correo}</Text>}

            <Text style={styles.label}>Numero telefono: </Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su numero telefono"
            keyboardType="phone-pad"
            maxLength={8}
            value={formulario.telefono}
            onChangeText={(texto) =>{manejarCambio('telefono', texto)}}
            />
            {errores.telefono && <Text style={styles.error}>{errores.telefono}</Text>}

            <Text style={styles.label}>Contraseña: </Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            secureTextEntry
            value={formulario.password}
            onChangeText={(texto) =>{manejarCambio('password', texto)}}
            />
            {errores.password && <Text style={styles.error}>{errores.password}</Text>}

            <Text style={styles.label}>Confirmar Contraseña: </Text>
            <TextInput
            style={styles.input}
            placeholder="Confirme su contraseña"
            secureTextEntry
            value={formulario.confirmarpassword}
            onChangeText={(texto) =>{manejarCambio('confirmarpassword', texto)}}
            />
            {errores.confirmarpassword && <Text style={styles.error}>{errores.confirmarpassword}</Text>}

            <Button title="Registrarse" onPress={manejarRegistro}/>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
        margin: 10,
    },

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
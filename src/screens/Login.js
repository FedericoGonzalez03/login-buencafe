import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import logoBC from "../../assets/logoBC.png";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logoBC}></Image>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"#777"}
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor={"#777"}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity>
        <View style={styles.btnCont}>
          <Text style={styles.btnText}> Iniciar Sesión </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:60}}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.links}>¿No tienes cuenta?, Regístrate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
          navigation.navigate("ResetPass");
        }}>
        <Text style={styles.links}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <StatusBar style='dark-content'></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#999",
    borderWidth: 0.5,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "70%",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  btnCont: {
    position:"absolute",
    width:"60%",
    paddingVertical: 7,
    backgroundColor: "#f55",
    borderRadius: 6,
    marginBottom: 20,
    alignSelf:"center",
  },
  btnText: {
    position:"relative",
    width:"100%",
    color: "#fff",
    fontWeight: 700,
    textAlign:"center",
    fontSize: 17,
  },
  links: {
    color: "#048",
    fontSize: 14,
  },
});

import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import logoBC from "../../assets/logoBC.png";
import arrow from "../../assets/arrow.png";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logoBC}></Image>
      <TextInput
        placeholder="Nombre"
        placeholderTextColor={"#777"}
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Apellidos"
        placeholderTextColor={"#777"}
        style={styles.input}
      ></TextInput>
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
          <Text style={styles.btnText}> Registrarme </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigation.goBack} style={styles.backCont}>
        <Image style={styles.back} source={arrow}></Image>
      </TouchableOpacity>
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
    paddingHorizontal: 50,
    paddingVertical: 7,
    backgroundColor: "#f55",
    borderRadius: 6,
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 17,
  },
  backCont: {
    position: "absolute",
    top: 30,
    left: 0,
  },
  back: {
    width: 50,
    height: 50,
    opacity: 0.1,
  },
});

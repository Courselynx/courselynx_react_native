import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardTypeOptions, StyleProp, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  mulitline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  labelSytle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder = "",
  secureTextEntry = false,
  mulitline = false,
  keyboardType = "default",
  labelSytle = {},
  inputStyle = {},
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelSytle]}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#999"
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          multiline={mulitline}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconButton}
          >
            <Icon
              name={isPasswordVisible ? "eye" : "eye-slash"}
              size={22}
              color="#999"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    color: "#666",
    fontSize: 14,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#e0e0e0",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 45,
    minHeight: 45,
    padding: 10,
    color: "#111",
    fontWeight: "500",
    fontSize: 15,
  },
  iconButton: {
    padding: 10,
  },
});

export default InputField;

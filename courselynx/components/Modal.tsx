import {
  View,
  Modal as RNModal,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
} from "react-native";
import { BlurView } from "expo-blur";
import GestureRecognizer from "react-native-swipe-gestures";

interface ModalProps {
  onRequestClose: () => void;
  children?: React.ReactNode;
  text?: string;
  hasButtonYesNo?: boolean;
  onPressNo?: () => void;
  onPressYes?: () => void;
  modalStyle?: StyleProp<ViewStyle>;
}

const Modal: React.FC<ModalProps> = ({
  onRequestClose,
  children,
  text = "",
  hasButtonYesNo = false,
  onPressNo = () => { },
  onPressYes = () => { },
  modalStyle = {}
}) => {
  return (
    <BlurView
      intensity={15}
      style={styles.blur}
      experimentalBlurMethod="dimezisBlurView"
    >
      <GestureRecognizer
        style={{ flex: 1 }}
        onSwipeDown={onRequestClose}
      >
        <RNModal
          transparent={true}
          animationType="slide"
          onRequestClose={onRequestClose}
        >
          {/* Handles clicks to close modal on click outside of the modal */}
          <Pressable onPress={onRequestClose} style={{ flex: 1 }} />

          <View style={[styles.container, modalStyle]}>
            <View style={styles.bar} />

            {text != "" && (
              <Text style={styles.text}>{text}</Text>
            )}

            <View>
              {children}
            </View>

            {hasButtonYesNo && (
              <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.button} onPress={onPressNo} activeOpacity={0.7}>
                  <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={onPressYes} activeOpacity={0.7}>
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>

              </View>
            )}
          </View>

        </RNModal>
      </GestureRecognizer>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  blur: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(217, 217, 217, 0.05)",
    zIndex: 1,
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    minHeight: 100,
    flex: 1,
    backgroundColor: "rgba(45, 138, 251, 0.9)",
    borderRadius: 16,
    alignItems: "center",
    paddingBottom: 35,
  },
  bar: {
    width: 40,
    height: 3,
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 60,
  },
  button: {
    width: 100,
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "rgba(45, 138, 251, 1)",
    fontWeight: "500",
  },

});

export default Modal;

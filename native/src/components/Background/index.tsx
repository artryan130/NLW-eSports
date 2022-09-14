//rnbc => cria um arquivo do tipo index react native

import { ImageBackground } from "react-native";
import backgroundImg from "../../assets/background-galaxy.png";
import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.container}
      defaultSource={backgroundImg}
    >
      {children}
    </ImageBackground>
  );
}
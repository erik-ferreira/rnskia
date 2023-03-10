import { View, ActivityIndicator } from "react-native";

import { styles } from "./styles";

export function LoadIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

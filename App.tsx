import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FAB from './components/FAB';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>
        {count}
      </Text>

      <FAB
        label='-1'
        onPress={() => setCount(count - 1)}
        onLongPress={() => setCount(count - 10)}
        position='left'
      />

      <FAB
        label='reset'
        onPress={() => setCount(0)}
        position='center'
      />

      <FAB
        label='+1'
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(count + 10)}
        position='right'
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 120,
    fontWeight: 100,
  },
});

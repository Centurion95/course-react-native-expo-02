import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
  label: string;

  position?: 'left' | 'right' | 'center';

  //Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

// FAB = floating action buttom
export default function FAB({
  label,
  onPress,
  onLongPress,
  position = 'right',
}: Props) {

  return (
    <TouchableOpacity
      style={[
        styles.floatingButton,
        position === 'right' && styles.positionRight,
        position === 'left' && styles.positionLeft,
        position === 'center' && styles.positionCenter,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  positionRight: {
    right: 50,
  },

  positionLeft: {
    left: 50,
  },

  positionCenter: {
    left: '50%',
    marginLeft: -30,
  },

});

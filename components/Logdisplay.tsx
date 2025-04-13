import { Text, View } from 'react-native';

interface LogDisplayProps {
    log_message: string;
  }

export default function LogDisplay({ log_message }: LogDisplayProps) {
    return (
        <View>
            <Text>{log_message}</Text>
        </View>
    );
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headline:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red',
    },
    view1: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    view2: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    view3: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

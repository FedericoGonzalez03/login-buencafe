import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from './Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}
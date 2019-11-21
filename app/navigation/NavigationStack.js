import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreenContainer from "../screens/HomeScreen/HomeScreenContainer";

const RNApp = createStackNavigator(
  {
    Home: {
      screen: HomeScreenContainer,
      navigationOptions: { header: null, gesturesEnabled: false }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RNApp);


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pantallas/home';
import mapScreen from './pantallas/mapa';

const tab = createBottomTabNavigator();
function Mytabs (){
    return (
        <tab.Navigator>
            <tab.Screen name="Home" component={HomeScreen} />
            <tab.Screen name="Map" component={mapScreen} />
        </tab.Navigator>
    )
};

export default function Navigation() {
    return(
        <NavigationContainer>
            <Mytabs />
        </NavigationContainer>
    );
};
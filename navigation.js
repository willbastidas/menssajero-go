import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pantallas/home';
import mapScreen from './pantallas/mapa';
import { colores } from './estilos/colores';

const tab = createBottomTabNavigator();
function Mytabs (){
    return (
        <tab.Navigator initialRouteName='Home' screenOptions={{tabBarActiveTintColor: colores.mennsajeroBlue}}>
            <tab.Screen 
                name="Home" 
                component={HomeScreen} />
            <tab.Screen 
                name="Mapa" 
                component={mapScreen} 
                // options={{
                //     tabBarIcon : ({color, sizae}) => {

                //     },
                // }}
                />
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
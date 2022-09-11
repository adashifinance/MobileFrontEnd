const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UUSplash from "./screens/UUSplash";
import UUTransactionsDetails from "./screens/UUTransactionsDetails";
import UUTransactionsDetails1 from "./screens/UUTransactionsDetails1";
import UUTransactionsDetails2 from "./screens/UUTransactionsDetails2";
import UUSafePlan from "./screens/UUSafePlan";
import UUTargetPlan from "./screens/UUTargetPlan";
import UUTransactionsDetails3 from "./screens/UUTransactionsDetails3";
import UUTransactionsDetails4 from "./screens/UUTransactionsDetails4";
import UUSavings from "./screens/UUSavings";
import UURegularPlan from "./screens/UURegularPlan";
import AAddBank from "./screens/AAddBank";
import APasswordEdit from "./screens/APasswordEdit";
import APasswordEdit1 from "./screens/APasswordEdit1";
import APasswordEdit2 from "./screens/APasswordEdit2";
import APasswordEdit3 from "./screens/APasswordEdit3";
import AProfileEdit from "./screens/AProfileEdit";
import AFAQ from "./screens/AFAQ";
import AAddBank1 from "./screens/AAddBank1";
import AAddCard from "./screens/AAddCard";
import UUPlans from "./screens/UUPlans";
import UProfileEdit from "./screens/UProfileEdit";
import UUGetHelp from "./screens/UUGetHelp";
import UUCardsAndBank from "./screens/UUCardsAndBank";
import UUSettingsAccount from "./screens/UUSettingsAccount";
import AKYCVerified from "./screens/AKYCVerified";
import UUTransactionsDetails5 from "./screens/UUTransactionsDetails5";
import UUActivites from "./screens/UUActivites";
import UUDepositWithCards from "./screens/UUDepositWithCards";
import UUTransactionsDetails6 from "./screens/UUTransactionsDetails6";
import UUWithdraw from "./screens/UUWithdraw";
import UUWithdraw1 from "./screens/UUWithdraw1";
import AKYCVerified1 from "./screens/AKYCVerified1";
import APin from "./screens/APin";
import AKYCPersonal from "./screens/AKYCPersonal";
import ASignUp from "./screens/ASignUp";
import UULogin from "./screens/UULogin";
import UUActivites1 from "./screens/UUActivites1";
import UUDashboardNotification from "./screens/UUDashboardNotification";
import UUDepositBank from "./screens/UUDepositBank";
import UUWithdraw2 from "./screens/UUWithdraw2";
import UUDeposit from "./screens/UUDeposit";
import UUDashboard from "./screens/UUDashboard";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const SplashScreen = () => {
    return <UUSplash />;
  };
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="UUSplash"
              component={UUSplash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTransactionsDetails"
              component={UUTransactionsDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTransactionsDetails1"
              component={UUTransactionsDetails1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTransactionsDetails2"
              component={UUTransactionsDetails2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUSafePlan"
              component={UUSafePlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTargetPlan"
              component={UUTargetPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTransactionsDetails3"
              component={UUTransactionsDetails3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTransactionsDetails4"
              component={UUTransactionsDetails4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUSavings"
              component={UUSavings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UURegularPlan"
              component={UURegularPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AAddBank"
              component={AAddBank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="APasswordEdit"
              component={APasswordEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="APasswordEdit1"
              component={APasswordEdit1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="APasswordEdit2"
              component={APasswordEdit2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="APasswordEdit3"
              component={APasswordEdit3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AProfileEdit"
              component={AProfileEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AFAQ"
              component={AFAQ}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AAddBank1"
              component={AAddBank1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AAddCard"
              component={AAddCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUPlans"
              component={UUPlans}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UProfileEdit"
              component={UProfileEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUGetHelp"
              component={UUGetHelp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUCardsAndBank"
              component={UUCardsAndBank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUSettingsAccount"
              component={UUSettingsAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AKYCVerified"
              component={AKYCVerified}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTransactionsDetails5"
              component={UUTransactionsDetails5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUActivites"
              component={UUActivites}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUDepositWithCards"
              component={UUDepositWithCards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUTransactionsDetails6"
              component={UUTransactionsDetails6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUWithdraw"
              component={UUWithdraw}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUWithdraw1"
              component={UUWithdraw1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AKYCVerified1"
              component={AKYCVerified1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="APin"
              component={APin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AKYCPersonal"
              component={AKYCPersonal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ASignUp"
              component={ASignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UULogin"
              component={UULogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUActivites1"
              component={UUActivites1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUDashboardNotification"
              component={UUDashboardNotification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUDepositBank"
              component={UUDepositBank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUWithdraw2"
              component={UUWithdraw2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUDeposit"
              component={UUDeposit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UUDashboard"
              component={UUDashboard}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;

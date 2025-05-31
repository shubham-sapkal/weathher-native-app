# 📱 React Native Stack Navigation in Expo

This example demonstrates how to use **React Navigation Stack** in a traditional way within an **Expo** project — similar to React Native CLI style.

---

## ✅ Step 1: Install Dependencies

Open a terminal in your Expo project and run:

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

That's all — Expo handles linking for you.

---

## 📁 Folder Structure

```
/App.js
/screens
  ├── HomeScreen.js
  └── DetailsScreen.js
```

---

## 📄 App.js

This is the entry point that sets up the navigation stack:

```js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## 📄 screens/HomeScreen.js

```js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
```

---

## 📄 screens/DetailsScreen.js

```js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Details Screen</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
```

---

## 🚀 Run the App

Start your Expo development server:

```bash
npm start
```

Then run it on:

```bash
npm run android
# or
npm run ios
# or
npm run web
```

---

## 🧠 What This Teaches

- Traditional `NavigationContainer` + `createNativeStackNavigator` usage
- Navigating between screens using `navigation.navigate()`
- Going back using `navigation.goBack()`
- Organizing screens into a `/screens` folder

---

## ✅ Next Steps (Optional)

- Add **params** to screens:  
  ```js
  navigation.navigate('Details', { userId: 42 });
  ```

- Receive them in Details screen:  
  ```js
  route.params.userId
  ```

- Customize screen options:
  ```js
  <Stack.Screen
    name="Details"
    component={DetailsScreen}
    options={{ title: 'My Custom Title' }}
  />
  ```

---
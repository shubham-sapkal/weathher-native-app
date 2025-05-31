import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const BottomNavigation = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const getIconName = () => {
          switch (route.name) {
            default:
                return 'sun'
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            onPress={onPress}
            style={styles.tabButton}
          >
            <Icon
              name={getIconName()}
              size={20}
              color={isFocused ? '#2563EB' : '#6b7280'}
              style={styles.icon}
            />
            <Text style={[styles.label, isFocused && styles.labelFocused]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '15%',
    borderTopWidth: 1,
    paddingTop: 10,
    borderTopColor: '#e5e7eb',
    backgroundColor: '#fff',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    // marginBottom: 50
  },
  icon: {
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
  },
  labelFocused: {
    color: '#2563EB',
  },
});


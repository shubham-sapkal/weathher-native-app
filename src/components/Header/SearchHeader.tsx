import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCity } from '../../redux';


const cities = [
  { label: 'Mumbai', value:'Mumbai'  },
  { label: 'Pune', value: 'Pune' },
  { label: 'Delhi', value: 'Delhi' },
  { label: 'Bangalore', value: 'Bangalore' },
  { label: 'Hyderabad', value: 'Hyderabad' },
]



export const SearchHeader = ({ title, navigation }) => {
  
    // const [ selectedCityLocal, setSelectedCityLocal ] = useState(null);
  
    const selectedCity = useSelector( (state: any) => state.slice.selectedCity )

    const dispatch = useDispatch();

    return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.headerContainer} > {/* Placeholder for right space */}
        
           <Dropdown
            style={styles.dropdown}
            containerStyle={styles.dropdownContainer}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={cities}
            search
            labelField="label"
            valueField="value"
            placeholder="Select City"
            searchPlaceholder="Search..."
            value={selectedCity}
            onChange={item => {
              dispatch(setSelectedCity(item));
              console.log('Selected:', item);
            }}
          />

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: '#f8fafc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerContainer: {
        paddingRight: 8,
        // height: '10%',
        width: '40%',
    },
    dropdown: {
        height: 40,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    dropdownContainer: {
        borderRadius: 8,
    },
    placeholderStyle: {
        color: '#888',
        fontSize: 14,
    },
    selectedTextStyle: {
        color: '#000',
        fontSize: 14,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 14,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
});

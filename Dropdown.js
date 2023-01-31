import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Dropdown from 'react-native-customizable-array-dropdown';
import Arrow from './caret-down.png';

const App = () => {
  const data = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6'];
  const [selectedItem, setSelectedItem] = useState();
  return (
    <View style={styles.container}>
      <Text>Dropdown</Text>
      <View style={{marginTop: 20}}>
        <Dropdown
          data={data}
          setSelectedValue={setSelectedItem}
          initialTitle="Select One Option"
          mainView={{backgroundColor: 'purple', width: 200, height: 50}}
          titleStyle={{fontSize: 15}}
          dropdownContainer={{
            backgroundColor: 'skyblue',
            borderRadius: 4,
            height: 150,
          }}
          dropdownItemContainer={{
            alignItems: 'center',
            backgroundColor: 'pink',
          }}
          dropdownItemText={{color: 'white', marginTop: 5}}
          dropdownSelectedItemContainer={{backgroundColor: 'blue'}}
          dropdownSelectedItemText={styles.text}
          imagePath={Arrow}
          imageStyle={{backgroundColor: 'lightblue', borderRadius: 5}}
        />
      </View>
      <Text
        style={{...styles.text, marginTop: 20, color: 'black', fontSize: 20}}>
        Selected Name is: {selectedItem}{' '}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {color: 'pink', marginTop: 5},
});


import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { TabNavigator } from "react-navigation";
import { COLORS, SIZING } from "../../styles";
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import MultiSelect from "../../components/MultipleSelectInput";

var {height, width} = Dimensions.get('window');

const items = [{
  id: '1',
  name: 'Bench Press',
}, {
  id: '2',
  name: 'Leg Pess',
}, {
  id: '3',
  name: 'Biking',
}, {
  id: '4',
  name: 'Running',
}, {
  id: '5',
  name: 'Swimming',
}, {
  id: '6',
  name: 'Push Ups',
}, {
  id: '7',
  name: 'Sit Ups',
}, {
  id: '8',
  name: 'Pull Ups',
}, {
  id: '9',
  name: 'Hamstring Flexibility',
}];

let onSelectedItemsChange = selectedItems => {
    // do something with selectedItems
    console.log(selectedItems);
};

class AddActivity extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Add Accomplishment',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleSection}>
          <Text style={styles.titleSectionText}>
            Good work! What activity didbe you do?
          </Text>
        </View>
        <MultiSelect
          items={items}
          uniqueKey="id"
          fixedHeight={true}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={[]}
          selectText="Search for activities"
          searchInputPlaceholderText="Search Items..."
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          submitButtonColor="#CCC"
          submitButtonText="Submit"
          single={true}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBackground,
    width: width,
  },
  picker: {
    paddingLeft: 0,
    paddingBottom: 10
  },
  titleSection:{
    height: 150,
    padding: SIZING.mediumGutter,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  titleSectionText:{
    fontSize: 36
  }
});

export default AddActivity;

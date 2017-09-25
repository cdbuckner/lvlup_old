import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TabNavigator } from "react-navigation";
import { COLORS, SIZING } from "../../styles";
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');

class ActivityCard extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View>
          <View style={styles.upperDeckContainer}>
            <View style={styles.userContainer}>
              <View style={styles.userImageContainer}>
                <View style={styles.userImage}>
                </View>
                <View style={styles.userLevel}>
                  <Text>53</Text>
                </View>
              </View>
              <View style={styles.upperDeckText}>
                <Text style={styles.userName}>Stephanie Scapa</Text>
                <Text style={styles.activityDateTime}>September 22, 2017 at 8:10pm</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.cardMenuButton}>
              <View style={styles.cardMenuButtonInner}>
                <Icon size={24} name={'md-more'} color={'black'} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.mezzContainer}>
            <Text style={styles.primaryActivityText}>I ran a 9 minute mile!!</Text>
          </View>
          <View style={styles.lowerDeckContainer}>
            <TouchableOpacity style={styles.cardButton}>
              <View style={styles.cardButtonInner}>
                <Icon size={18} name={'ios-thumbs-up-outline'} color={'black'} />
                <Text style={styles.cardButtonText}>10</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardButton}>
              <View style={styles.cardButtonInner}>
                <Icon size={18} name={'ios-thumbs-down-outline'} color={'black'} />
                <Text style={styles.cardButtonText}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBackground,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: SIZING.mediumGutter,
  },
  upperDeckContainer: {
    width: width,
    paddingLeft: SIZING.mediumGutter,
    paddingRight: SIZING.mediumGutter,
    paddingTop: SIZING.mediumGutter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userImageContainer: {
    width: 45,
    marginRight: SIZING.mediumGutter
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primaryHighlight,
  },
  userLevel: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    backgroundColor: COLORS.primaryBackground,
    marginRight: SIZING.mediumGutter,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperDeckText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  userName: {
    fontSize: SIZING.p1,
    paddingBottom: 3
  },
  activityDateTime: {
    fontSize: SIZING.p2,
    color: '#666666'
  },
  mezzContainer: {
    width: width,
    paddingLeft: (SIZING.mediumGutter * 2) + 45,
    paddingRight: SIZING.largeGutter,
    paddingTop: SIZING.mediumGutter,
  },
  primaryActivityText: {
    fontSize: SIZING.h2
  },
  lowerDeckContainer: {
    paddingRight: SIZING.smallGutter,
    paddingLeft: (SIZING.mediumGutter) + 45,
    paddingTop: SIZING.mediumGutter,
    paddingBottom: SIZING.smallGutter,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  cardButton: {
    paddingLeft: SIZING.mediumGutter,
    paddingRight: SIZING.mediumGutter,
    paddingTop: SIZING.smallGutter,
    paddingBottom: SIZING.smallGutter,
    flex: 1
  },
  cardButtonInner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  cardButtonText: {
    fontSize: SIZING.p2,
    marginLeft: 4
  },
  cardMenuButton: {
    padding: SIZING.smallGutter,
  },
  cardMenuButtonInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ActivityCard;

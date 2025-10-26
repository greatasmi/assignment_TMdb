import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomIcon from './CustomIcon';
import {
  BORDERRADIUS,
  FONTSIZE,
  SPACING,
} from '../constant/theme/theme';
import {Colors} from '../constant/Colors'
import {Fontfamily} from '../constant/Fontfamily'
const AppHeader = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBG} onPress={() => props.action()}>
        <CustomIcon name={props.name} style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.header}</Text>
      <View style={styles.emptyContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: Colors.White,
    fontSize: FONTSIZE.size_24,
  },
  headerText: {
    flex: 1,
    fontFamily: Fontfamily.poppins_medium,
    fontSize: FONTSIZE.size_20,
    textAlign: 'center',
    color: Colors.White,
  },
  emptyContainer: {
    height: SPACING.space_20 * 2,
    width: SPACING.space_20 * 2,
  },
  iconBG: {
    height: SPACING.space_20 * 2,
    width: SPACING.space_20 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: Colors.Orange,
  },
});

export default AppHeader;

import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FONTSIZE, SPACING} from '../constant/theme/theme';
import CustomIcon from './CustomIcon';

import {Colors} from '../constant/Colors'
import {Fontfamily} from '../constant/Fontfamily'
const SettingComponent = (props: any) => {
  return (
    <View style={styles.container}>
      <View>
        <CustomIcon name={props.icon} style={styles.iconStyle} />
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.title}>{props.heading}</Text>
        <Text style={styles.subtitle}>{props.subheading}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
      <View style={styles.iconBG}>
        <CustomIcon name={'arrow-right'} style={styles.iconStyle} />
      </View>
    </View>
  );
};

export default SettingComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.space_20,
  },
  settingContainer: {
    flex: 1,
  },
  iconStyle: {
    color: Colors.White,
    fontSize: FONTSIZE.size_24,
    paddingHorizontal: SPACING.space_20,
  },
  iconBG: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: Fontfamily.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: Colors.White,
  },
  subtitle: {
    fontFamily: Fontfamily.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: Colors.WhiteRGBA15,
  },
});

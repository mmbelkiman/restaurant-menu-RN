import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface ILineSeparatorProps {
  withoutMargin?: boolean;
}

const LineSeparator: React.FC<ILineSeparatorProps> = ({withoutMargin}) => {
  return (
    <View
      style={withoutMargin ? styles.separatorWithoutMargin : styles.separator}
    />
  );
};

export default LineSeparator;

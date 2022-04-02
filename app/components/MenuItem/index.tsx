import React from 'react';
import {Text, View} from 'react-native';
import LineSeparator from '../LineSeparator';
import {IApiMenuItem} from '../../api/Menu';
import styles from './styles';

interface ILineSeparatorProps {
  item: IApiMenuItem;
  index: number;
}

const MenuItem: React.FC<ILineSeparatorProps> = ({item, index}) => {
  return (
    <View>
      <LineSeparator />

      <View style={styles.container}>
        <Text testID={`menu-item-title-${index}`} style={styles.name}>
          {item.name}
        </Text>
        <Text
          testID={`menu-item-description-${index}`}
          style={styles.description}>
          {item.description}
        </Text>
        <Text
          testID={`menu-item-price-${index}`}
          style={styles.price}>{`$ ${item.price}`}</Text>
      </View>
    </View>
  );
};

export default MenuItem;

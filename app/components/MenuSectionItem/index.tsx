import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IApiMenus} from '../../api/Menu';
import styles from './styles';

interface ILineSeparatorProps {
  index: number;
  item: IApiMenus;
  pressed: boolean;
  onPress(): void;
}

const MenuSectionItem: React.FC<ILineSeparatorProps> = ({
  index,
  item,
  pressed,
  onPress,
}) => {
  return (
    <TouchableOpacity
      testID={`menu-section-item-touchable-${index}`}
      style={styles.carouselContainer}
      onPress={() => onPress()}>
      <Text
        testID={`menu-section-item-text-${index}`}
        style={pressed ? styles.carouselItemSelected : styles.carouselItem}>
        {item.name.toUpperCase().slice(0, 11)}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuSectionItem;

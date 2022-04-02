import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LineSeparator from '../../components/LineSeparator';
import MenuItem from '../../components/MenuItem';
import MenuSectionItem from '../../components/MenuSectionItem';
import {IApiMenu, IApiMenuItem, IApiMenus, Menu} from '../../api/Menu';
import styles from './styles';

const Home = () => {
  type THomeStatus = 'Loading' | 'Render' | 'Error';
  const textTitle = 'Menu';

  const [menuItems, setMenuItems] = useState<Array<IApiMenuItem>>([]);
  const [carouselIndex, setCarouselIndex] = useState<number>(-1);
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [menus, setMenus] = useState<Array<IApiMenus>>([]);
  const [status, setStatus] = useState<THomeStatus>('Loading');

  const refCarousel = useRef<Carousel<any>>(null);

  useEffect(() => {
    Menu.get()
      .then((menu: IApiMenu) => {
        setRestaurantName(menu.name);
        setMenus(menu.menus);
        updateMenuItems(menu.menus[0], 0);
        setStatus('Render');
      })
      .catch(() => setStatus('Error'));
  }, []);

  const updateMenuItems = (item: IApiMenus, index: number): void => {
    refCarousel?.current?.snapToItem(index);
    setMenuItems(item?.items || []);
    setCarouselIndex(index);
  };

  const renderError = () => <Text>ERROR</Text>;
  const renderLoading = () => <ActivityIndicator size="large" />;
  const render = () => (
    <>
      <Text style={styles.title}>{restaurantName.toUpperCase()}</Text>
      <LineSeparator withoutMargin={true} />

      <Text style={styles.title}>{textTitle.toUpperCase()}</Text>
      <LineSeparator />

      <View>
        <Carousel
          keyExtractor={({name}) => name}
          horizontal
          ref={refCarousel}
          data={menus}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={110}
          renderItem={({item, index}: {item: IApiMenus; index: number}) => (
            <MenuSectionItem
              index={index}
              item={item}
              pressed={carouselIndex === index}
              onPress={() => updateMenuItems(item, index)}
            />
          )}
        />
      </View>

      <FlatList
        keyExtractor={({name}) => name}
        data={menuItems}
        renderItem={({item, index}) => <MenuItem item={item} index={index} />}
      />
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {status === 'Loading' && renderLoading()}
      {status === 'Render' && render()}
      {status === 'Error' && renderError()}
    </SafeAreaView>
  );
};

export default Home;

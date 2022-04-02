import 'react-native';
import React from 'react';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import {IApiMenus} from '../../app/api/Menu';
import MenuSectionItem from '../../app/components/MenuSectionItem';

describe('MenuItem', () => {
  const item: IApiMenus = {
    name: 'My Menus',
    items: [{name: 'item 1', price: 123, description: 'my Desc', url: ''}],
  };
  const handleOnPress = jest.fn();

  const getRender = (): RenderAPI =>
    render(
      <MenuSectionItem
        item={item}
        index={0}
        pressed={false}
        onPress={handleOnPress}
      />,
    );

  it('Render Touchable', async () => {
    const element = await getRender().getByTestId(
      'menu-section-item-touchable-0',
    );
    expect(element).toBeTruthy();
    fireEvent(element, 'press');
    expect(handleOnPress).toBeCalledTimes(1);
  });

  it('Render Text', async () => {
    const element = await getRender().getByTestId('menu-section-item-text-0');
    expect(element).toBeTruthy();
    expect(element.children.join()).toEqual(item.name.toUpperCase());
  });

  it('Jest snapshot', async () => {
    const json = await getRender().toJSON();
    expect(json).toMatchSnapshot();
  });
});

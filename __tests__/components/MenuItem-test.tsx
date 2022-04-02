import 'react-native';
import React from 'react';
import MenuItem from '../../app/components/MenuItem';
import {render, RenderAPI} from '@testing-library/react-native';
import {IApiMenuItem} from '../../app/api/Menu';

describe('MenuItem', () => {
  const item: IApiMenuItem = {
    name: 'My Menu Item',
    price: 123,
    description: 'My Menu Desc',
    url: '',
  };
  const getRender = (): RenderAPI => render(<MenuItem item={item} index={0} />);

  it('Render title', async () => {
    const element = await getRender().getByTestId('menu-item-title-0');
    expect(element).toBeTruthy();
    expect(element.children.join()).toEqual(item.name);
  });

  it('Render description', async () => {
    const element = await getRender().getByTestId('menu-item-description-0');
    expect(element).toBeTruthy();
    expect(element.children.join()).toEqual(item.description);
  });

  it('Render price', async () => {
    const element = await getRender().getByTestId('menu-item-price-0');
    expect(element).toBeTruthy();
    expect(element.children.join()).toEqual(`$ ${item.price}`);
  });

  it('Jest snapshot', async () => {
    const json = await getRender().toJSON();
    expect(json).toMatchSnapshot();
  });
});

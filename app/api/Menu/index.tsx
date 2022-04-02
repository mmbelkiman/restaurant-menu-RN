export interface IApiMenuItem {
  name: string;
  description: string;
  price: number;
  url: string;
}

export interface ILocation {
  lat: string;
  log: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface IApiMenu {
  id: string;
  name: string;
  description: string;
  phone: string;
  location: ILocation;
  operationDays: [];
  privateParking: boolean;
  currency: string;
  menus: Array<IApiMenus>;
}

export interface IApiMenus {
  name: string;
  items: Array<IApiMenuItem>;
}

export const Menu = {
  get: (): Promise<IApiMenu> => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return new Promise((resolve, reject) => {
      fetch('https://mcdonalds.trio.dev/menu', requestOptions)
        .then(response => response.json())
        .then((result: IApiMenu) => resolve(result))
        .catch(() => reject(undefined));
    });
  },
};

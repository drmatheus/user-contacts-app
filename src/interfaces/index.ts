export interface IUserData {
  name: string;
  email: string;
  id: string;
  createdAt: string;
}

export interface ICustomerData {
  id: string;
  name: string;
  createdAt: string;
  contacts: IContactsData[];
}

export interface IContactsData {
  id: string;
  type: string;
  contact: string;
  createdAt: string;
  updatedAt: string;
}

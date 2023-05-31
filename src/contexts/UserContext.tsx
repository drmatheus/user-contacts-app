import { createContext, useState } from "react";
import api from "../services/API";
import { toast } from "react-toastify";
import { FieldValues } from "react-hook-form";
import { IContactsData, ICustomerData, IUserData } from "../interfaces";

export interface ModalContextType {
  submitDeleteContact: () => Promise<void>;
  submitAttContact: (data: FieldValues) => Promise<void>;
  submitNewContact: (data: FieldValues) => Promise<void>;
  currentContact: IContactsData;
  setCurrentContact: React.Dispatch<React.SetStateAction<IContactsData>>;
  setCurrentCustomer: React.Dispatch<React.SetStateAction<ICustomerData>>;
  currentCustomer: ICustomerData;
  modalDelete: boolean;
  setModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  modalEdit: boolean;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  modalCreate: boolean;
  setModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
  submitAttCustomer: (data: FieldValues) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userData: IUserData | null;
  setUserData: React.Dispatch<React.SetStateAction<IUserData | null>>;
  customers: ICustomerData[] | null;
  setCustomers: React.Dispatch<React.SetStateAction<ICustomerData[] | null>>;
  getUserData: () => Promise<void>;
  submitNewCustomer: (data: FieldValues) => Promise<void>;
  submitAttUser: (data: FieldValues) => Promise<void>;
  submitDeleteCustomer: () => Promise<void>;
  modalDeleteCustomer: boolean;
  setModalDeleteCustomer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext({} as ModalContextType);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [currentContact, setCurrentContact] = useState({} as IContactsData);
  const [currentCustomer, setCurrentCustomer] = useState({} as ICustomerData);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalDeleteCustomer, setModalDeleteCustomer] =
    useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [customers, setCustomers] = useState<ICustomerData[] | null>(null);

  const getUserData = async () => {
    try {
      const { data: userDataAPI }: { data: IUserData } = await api.get(
        "users/"
      );
      setUserData(userDataAPI);
      const { data: custumersAPI }: { data: ICustomerData[] } = await api.get(
        "customer/"
      );
      setCustomers(custumersAPI);
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const submitDeleteContact = async (): Promise<void> => {
    try {
      await api.delete(`contact/${currentCustomer.id}/${currentContact.id}`);
      toast.success("Contact deleted");
      setModalDelete(false);
    } catch (e) {
      console.log(e);
      toast.error("Something go wrong");
    }
    getUserData();
  };

  const submitAttContact = async (data: FieldValues): Promise<void> => {
    try {
      await api.patch(
        `contact/${currentCustomer.id}/${currentContact.id}`,
        data
      );
      toast.success("Contact updated");
      setModalEdit(false);
    } catch (e) {
      console.log(e);
      toast.error("Something go wrong");
    }
    getUserData();
  };

  const submitNewContact = async (data: FieldValues): Promise<void> => {
    try {
      await api.post(`contact/${currentCustomer.id}`, data);
      toast.success("Contact created");
      setModalCreate(false);
    } catch (e) {
      console.log(e);
      toast.error("Something go wrong");
    }
    getUserData();
  };

  const submitAttCustomer = async (data: FieldValues): Promise<void> => {
    try {
      await api.patch(`customer/${currentCustomer.id}`, data);
      toast.success("Customer updated");
    } catch (e) {
      console.log(e);
      toast.error("Something go wrong");
    }
    getUserData();
  };

  const submitDeleteCustomer = async (): Promise<void> => {
    try {
      await api.delete(`customer/${currentCustomer.id}`);
      toast.success("Customer deleted");
    } catch (e) {
      console.log(e);
      toast.error("Something go wrong");
    }
    getUserData();
  };

  const submitNewCustomer = async (data: FieldValues): Promise<void> => {
    try {
      await api.post(`customer/`, data);
      toast.success("Customer Created");
    } catch (e) {
      console.log(e);
      toast.error("Something go wrong");
    }
    getUserData();
  };

  const submitAttUser = async (data: FieldValues): Promise<void> => {
    try {
      await api.patch(`users/`, data);
      toast.success("User data updated");
    } catch (e) {
      console.log(e);
      toast.error("Something go wrong");
    }
    getUserData();
  };

  return (
    <ModalContext.Provider
      value={{
        submitDeleteContact,
        submitAttContact,
        submitNewContact,
        currentContact,
        setCurrentContact,
        setCurrentCustomer,
        modalDelete,
        setModalDelete,
        modalEdit,
        setModalEdit,
        modalCreate,
        setModalCreate,
        submitAttCustomer,
        loading,
        setLoading,
        userData,
        setUserData,
        customers,
        setCustomers,
        getUserData,
        submitNewCustomer,
        submitAttUser,
        submitDeleteCustomer,
        modalDeleteCustomer,
        setModalDeleteCustomer,
        currentCustomer,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

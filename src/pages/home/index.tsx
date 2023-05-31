import { useContext, useEffect, useState } from "react";
import { LoadingScreen } from "../../components/loading";
import { Alert } from "../../components/alert";
import { useNavigate, useNavigation } from "react-router-dom";
import { Container, MainDiv } from "../../App";
import { UserCard } from "../../components/userCard";
import {
  ContactFormCreate,
  ContactFormEdit,
  CustomerFormCreate,
  DeleteContact,
  DeleteCustomer,
  UserFormEdit,
} from "../../components/modals";
import { ModalContext } from "../../contexts/UserContext";
import { Button } from "../../components/button";
import { StyledHeader } from "./style";
import { StyledModal } from "../../components/modals/style";
import { ICustomerData } from "../../interfaces";
import { Dropdown } from "../../components/dropdown";
import Cookies from "js-cookie";

export const Home = () => {
  const { customers, userData, loading, getUserData } =
    useContext(ModalContext);

  const [modalCustomer, setModalCustomer] = useState(false);
  const [modalUser, setModalUser] = useState(false);

  const {
    modalDelete,
    setModalDelete,
    modalEdit,
    setModalEdit,
    modalCreate,
    setModalCreate,
    setModalDeleteCustomer,
    modalDeleteCustomer,
  } = useContext(ModalContext);

  const navigate = useNavigate();
  useEffect(() => {
    getUserData();
  }, []);

  const modalOpenCloseCustomer = () => {
    setModalCustomer(!modalCustomer);
  };

  const modalOpenCloseUser = () => {
    setModalUser(!modalUser);
  };

  const modalOpenCloseDelete = () => {
    setModalDelete(!modalDelete);
  };

  const modalOpenCloseEdit = () => {
    setModalEdit(!modalEdit);
  };

  const modalOpenCloseCreate = () => {
    setModalCreate(!modalCreate);
  };
  const modalOpenCloseDeleteCustomer = () => {
    setModalDeleteCustomer(!modalDeleteCustomer);
  };
  if (loading) {
    return <LoadingScreen />;
  }

  if (!userData) {
    setTimeout(() => navigate("/login"), 2000);
    return (
      <Alert text="You are not authenticated. You will be redirected to the login page." />
    );
  }

  return (
    <MainDiv>
      <StyledHeader>
        <div>
          <h1>Schedule book</h1>
          <h2>Welcome, {userData.name}</h2>
        </div>

        <nav>
          <Dropdown>
            <Button
              text="Edit User"
              disabled={false}
              type="button"
              onClick={modalOpenCloseUser}
            />
            <Button
              text="New Customer"
              disabled={false}
              type="button"
              onClick={modalOpenCloseCustomer}
            />
            <Button
              text="Logout"
              disabled={false}
              type="button"
              onClick={() => {
                Cookies.remove("userContact@token");
                navigate("/login");
              }}
            />
          </Dropdown>
        </nav>
      </StyledHeader>
      <StyledModal isOpen={modalUser}>
        <UserFormEdit onCancel={modalOpenCloseUser} />
      </StyledModal>

      <StyledModal isOpen={modalCustomer}>
        <CustomerFormCreate
          onCancel={modalOpenCloseCustomer}
        ></CustomerFormCreate>
      </StyledModal>

      <Container>
        <ul className="vitrine">
          {customers?.map((customer: ICustomerData) => (
            <UserCard
              modalCreate={modalOpenCloseCreate}
              modalEdit={modalOpenCloseEdit}
              customer={customer}
              modalDelete={modalOpenCloseDelete}
              modalDeleteCustomer={modalOpenCloseDeleteCustomer}
            />
          ))}
        </ul>
      </Container>

      <StyledModal
        isOpen={modalDelete}
        onRequestClose={modalOpenCloseDelete}
        contentLabel="Delete Contact"
      >
        <DeleteContact onCancel={modalOpenCloseDelete} />
      </StyledModal>
      <StyledModal
        isOpen={modalDeleteCustomer}
        onRequestClose={modalOpenCloseDeleteCustomer}
        contentLabel="Delete Customer"
      >
        <DeleteCustomer onCancel={modalOpenCloseDeleteCustomer} />
      </StyledModal>
      <StyledModal
        isOpen={modalEdit}
        onRequestClose={modalOpenCloseEdit}
        contentLabel="Edit Contact"
      >
        <ContactFormEdit onCancel={modalOpenCloseEdit} />
      </StyledModal>

      <StyledModal
        isOpen={modalCreate}
        onRequestClose={modalOpenCloseCreate}
        contentLabel="Create Contact"
      >
        <ContactFormCreate onCancel={modalOpenCloseCreate} />
      </StyledModal>
    </MainDiv>
  );
};

export default Home;

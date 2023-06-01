import { ICustomerData } from "../../interfaces";
import {
  BsFillTrashFill,
  BsPencilSquare,
  BsTelephone,
  BsPlusCircleFill,
  BsCheckSquare,
  BsXCircle,
} from "react-icons/bs";
import { MdCopyAll, MdOutlineMailOutline } from "react-icons/Md";
import { StyledLi, StyledLiContact } from "./styles";
import { useContext, useState } from "react";
import { ModalContext } from "../../contexts/UserContext";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { toast } from "react-toastify";

export const UserCard = ({
  customer,
  modalDelete,
  modalEdit,
  modalCreate,
  modalDeleteCustomer,
}: {
  modalDelete: () => void;
  customer: ICustomerData;
  modalEdit: () => void;
  modalCreate: () => void;
  modalDeleteCustomer: () => void;
}) => {
  const { setCurrentContact, setCurrentCustomer } = useContext(ModalContext);

  const { submitAttCustomer } = useContext(ModalContext);

  const [isEditing, setIsEditing] = useState(false);

  const schemaContact = yup.object().shape({
    name: yup
      .string()
      .required("The name field is required")
      .max(20, "The name must be a maximum of 50 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schemaContact),
  });

  const handleSubmition = (data: FieldValues) => {
    if (isValid) {
      setIsEditing(false);
    }
    submitAttCustomer(data);
  };

  return (
    <StyledLi>
      <div className="user">
        <div>
          {!isEditing ? (
            <p>{customer.name}</p>
          ) : (
            <form onSubmit={handleSubmit(handleSubmition)}>
              <input
                className="customerName"
                defaultValue={customer.name}
                {...register("name")}
              />
              <button type="submit">
                <BsCheckSquare className="icon" />
              </button>
              <button onClick={() => setIsEditing(false)}>
                <BsXCircle className="icon" />
              </button>
              {errors.name && <span>{String(errors.name.message)}</span>}
            </form>
          )}
        </div>

        <div>
          <button
            onClick={() => {
              setCurrentCustomer(customer);
              modalCreate();
            }}
          >
            <BsPlusCircleFill className="icon" />
          </button>

          <button
            onClick={() => {
              setIsEditing(!isEditing);
              setCurrentCustomer(customer);
            }}
          >
            <BsPencilSquare className="icon" />
          </button>

          <button
            onClick={() => {
              setCurrentCustomer(customer);
              modalDeleteCustomer();
            }}
          >
            <BsFillTrashFill className="icon" />
          </button>
        </div>
      </div>
      <ul>
        {customer.contacts.map((contact) => {
          return (
            <StyledLiContact>
              <div>
                {contact.type == "phone" ? (
                  <BsTelephone className="icon" />
                ) : (
                  <MdOutlineMailOutline className="icon" />
                )}
                <span>{contact.contact}</span>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(contact.contact);
                    toast.info("Contact copied to clipboard successfully!");
                  }}
                >
                  <MdCopyAll className="icon" />
                </button>

                <button
                  onClick={() => {
                    setCurrentContact(contact);
                    setCurrentCustomer(customer);
                    modalEdit();
                  }}
                >
                  <BsPencilSquare className="icon" />
                </button>

                <button
                  onClick={() => {
                    setCurrentContact(contact);
                    setCurrentCustomer(customer);
                    modalDelete();
                  }}
                >
                  <BsFillTrashFill className="icon" />
                </button>
              </div>
            </StyledLiContact>
          );
        })}
      </ul>
    </StyledLi>
  );
};

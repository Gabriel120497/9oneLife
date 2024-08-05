import { createContext, useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  Timestamp,
  runTransaction,
  where,
  addDoc,
  getFirestore,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState();
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = useState(false);
  const openNewAppointment = (id) => {
    if (id) {
      setAppointment(appointments.filter((item) => item.id === id)[0]);
    } else {
      console.log(id, "no encontrado");
    }
    setIsNewAppointmentOpen(true);
  };

  const closeNewAppointment = () => {
    setIsNewAppointmentOpen(false);
  };

  useEffect(() => {
    const appointmentsRef = collection(db, "appoiments");
    getDocs(appointmentsRef).then((resp) => {
      setAppointments(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  const postData = (values, document) => {
    values.date = values.date._i ? values.date._i : values.date;
    values.dr_appoiment_time = values.dr_appoiment_time._i
      ? values.dr_appoiment_time._i
      : values.dr_appoiment_time;
    console.log("values", values);
    if (values.id) {
      console.log("values: el id existe");
      const documentRef = doc(db, document, values.id);
      updateDoc(documentRef, values);
    } else {
      console.log("values: el id no existe");
      delete values.id;
      addDoc(collection(db, document), values);
    }
    setAppointment();
    setIsNewAppointmentOpen(false);
  };

  const deleteAppointment = (document, id) => {
    console.log(id);
    const documentRef = doc(db, document, id);
    deleteDoc(documentRef);
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        setAppointments,
        postData,
        deleteAppointment,
        appointment,
        isNewAppointmentOpen,
        openNewAppointment,
        closeNewAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

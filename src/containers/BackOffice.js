import React, { useState, useEffect } from "react";
import axios from "axios";
import BackOfficeData from "../components/BackOfficeData.js";

const BackOffice = () => {
  const [simulations, setSimulations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:4001/backoffice/data")
      .then(response => {
        setSimulations(response.data);
      })
      .catch(error => {
        console.log(error.data.message);
      });
  };
  //On crée une foncion qui sera exécutée sur le clic du bouton Supprimer de la modal
  const deleteButtonAction = simulation => {
    //appel du back pour supprimer la simulation
    deleteSimulation(simulation._id);
    //copie de l'état Simulations
    let newSimulations = [...simulations];
    //suppression de la ligne
    newSimulations.splice(newSimulations.indexOf(simulation), 1);
    //mise à jour de l'état
    setSimulations(newSimulations);
  };

  //on appel le back pour supprimer la simulation
  const deleteSimulation = id => {
    axios
      .post("http://localhost:4001/backoffice/delete", { id: id })
      .then(response => {
        console.log("Simulation supprimée");
      })
      .catch(error => {
        console.log(error.data.message);
      });
  };

  return (
    <>
      <h2 className="margin-title">Bienvenue dans votre Espace</h2>
      <table>
        <thead>
          <tr>
            <th>N° de dossier</th>
            <th>Ville du bien</th>
            <th>Email de l'emprunteur</th>
            <th>Type de bien</th>
            <th>Etat du bien</th>
            <th>Budget total</th>
          </tr>
        </thead>
        <tbody>
          {simulations.map((simulation, index) => {
            return (
              <tr
                key={index}
                onClick={() => {
                  //récupération des infos de la ligne qui a été cliquée pour les envoyer à la modal
                  setModalData({ ...simulation });
                  //affichage de la modal
                  setShowModal(true);
                }}
              >
                <td>{simulation.fileNumber}</td>
                <td>{simulation.propertyCity}</td>
                <td>{simulation.borrowerEmail}</td>
                <td>{simulation.propertyType}</td>
                <td>{simulation.propertyCondition}</td>
                <td>{simulation.totalAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal ? (
        <BackOfficeData
          setShowModal={setShowModal}
          modalData={modalData}
          deleteButtonAction={deleteButtonAction}
        ></BackOfficeData>
      ) : (
        ""
      )}
    </>
  );
};

export default BackOffice;

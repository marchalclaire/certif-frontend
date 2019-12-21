import React from "react";

const BackOfficeLogIn = props => {
  return (
    <>
      <div className="modal">
        <span
          className="icon-close"
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          x
        </span>
        <div className="modal-content">
          <div className="modal-wrapper">
            <h2>Détails de la simulation</h2>
            <div>
              <span>Numéro de dossier: </span>
              <span>{props.modalData.fileNumber}</span>
            </div>
            <div>
              <span>Type de bien: </span>
              <span>{props.modalData.propertyType}</span>
            </div>
            <div>
              <span>Etat du bien: </span>
              <span>{props.modalData.propertyCondition}</span>
            </div>
            <div>
              <span>Usage du bien: </span>
              <span>{props.modalData.propertyUse}</span>
            </div>
            <div>
              <span>Situation actuelle de l'emprunteur: </span>
              <span>{props.modalData.borrowerCurrentSituation}</span>
            </div>
            <div>
              <span>Pays du bien: </span>
              <span>{props.modalData.propertyCountry}</span>
            </div>
            <div>
              <span>Ville du bien: </span>
              <span>{props.modalData.propertyCity}</span>
            </div>
            <div>
              <span>Montant estimé du bien: </span>
              <span>{props.modalData.propertyEstimatedAmount}</span>
              <span> €</span>
            </div>
            <div>
              <span>Montant estimé des travaux: </span>
              <span>{props.modalData.repairsEstimatedAmount}</span>
              <span> €</span>
            </div>
            <div>
              <span>Frais de notaire: </span>
              <span>{props.modalData.notaryCosts}</span>
              <span> €</span>
            </div>
            <div>
              <span>Budget total: </span>
              <span>{props.modalData.totalAmount}</span>
              <span> €</span>
            </div>
            <div>
              <span>Email de l'emprunteur: </span>
              <span>{props.modalData.borrowerEmail}</span>
            </div>

            <button
              className="margin-title"
              onClick={() => {
                props.deleteButtonAction(props.modalData);
                props.setShowModal(false);
              }}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackOfficeLogIn;

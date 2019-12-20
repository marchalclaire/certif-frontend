import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BackOffice = () => {
  return (
    <>
      <div>Bienvenue dans votre Espace</div>
      <table>
        <tbody>
          <tr>
            <th>N° de dossier</th>
            <th>Type de bien</th>
            <th>Etat du bien</th>
            <th>Usage du bien</th>
            <th>Situation actuelle de l'emprunteur</th>
            <th>Pays du bien</th>
            <th>Ville du bien</th>
            <th>Montant estimé du bien</th>
            <th>Montant estimé des travaux</th>
            <th>Frais de notaire</th>
            <th>Budget total</th>
            <th>Email de l'emprunteur</th>
          </tr>
          <tr>
            <td>1234</td>
            <td>house</td>
            <td>dvd</td>
            <td>dvssd</td>
            <td>hnnh</td>
            <td>sdxs</td>
            <td>ghbt</td>
            <td>xs</td>
            <td>tnf</td>
            <td>ghbt</td>
            <td>xs</td>
            <td>tnf</td>
          </tr>
          <tr>
            <td>1234</td>
            <td>house</td>
            <td>dvd</td>
            <td>dvssd</td>
            <td>hnnh</td>
            <td>sdxs</td>
            <td>ghbt</td>
            <td>xs</td>
            <td>tnf</td>
            <td>ghbt</td>
            <td>xs</td>
            <td>tnf</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BackOffice;

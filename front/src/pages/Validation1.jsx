import React, { useState } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import Validation1table from "./Validation1table";

function Validation1() {
  const [sidebarToggle] = useOutletContext();

  const [loading] = useState(false);

  const dataHeader = [
    {
      key: "type_demande",
      label: "Type de demande",
    },
    {
      key: "date_demande",
      label: "Date de demande",
    },
    {
      key: "agence",
      label: "Agence",
    },
    {
      key: "nom_client",
      label: "Nom",
    },
    {
      key: "prenom_client",
      label: "Prénom",
    },
    {
      key: "email",
      label: "E-mail",
    },
  ];

  const handleDelete = () => { };
  const data = [
    {
      type_demande: "Création",
      date_demande: "12/05/2021",
      agence: "5420015",
      nom_client: "DUPONT",
      prenom_client: "Jean",
      email: "dupon@gmail.com",
    },
    {
      type_demande: "Création",
      date_demande: "16/05/2021",
      agence: "5420015",
      nom_client: "ROBERT",
      prenom_client: "Marie",
      email: "robert@gmail.com",
    },
  ];
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />
        {/* Main Content */}
        <div className="mainCard">
          <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">Validation D'inscription</h1>
            </div>
          </div>
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <Validation1table
              loading={loading}
              dataHeader={dataHeader}
              data={data}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Validation1;

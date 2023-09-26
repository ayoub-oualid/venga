import React, { useState } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import Validation2table from "./Validation2table";

function Validation2() {
    const [sidebarToggle] = useOutletContext();

    const [loading] = useState(false);

    const dataHeader = [
        {
            key: "type_demande",
            label: "Type de demande",
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
        {
            key: "date_demande",
            label: "Date de demande",
        },
        {
            key: "validateur1",
            label: "Validateur 1",
        },
        {
            key: "dateValidation1",
            label: "Date de validation 1",
        },
        {
            key: "etat_inscription",
            label: "Etat d'inscription",
        },
        {
            key: "commentaire-validateur",
            label: "Commentaire du validateur",
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
            validateur1: "Jean",
            date_validation: "12/05/2021",
            etat_inscription: "En cours",
            commentaire_validateur: "En attente de validation",
        },
        {
            type_demande: "Création",
            date_demande: "16/05/2021",
            agence: "5420015",
            nom_client: "ROBERT",
            prenom_client: "Marie",
            email: "robert@gmail.com",
            validateur1: "Jean",
            date_validation: "12/05/2021",
            etat_inscription: "En cours",
            commentaire_validateur: "En attente de validation",
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
                            <h1 className="text-xl font-semibold text-gray-800">Validation Inscription 2</h1>
                        </div>
                    </div>
                    <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
                        <Validation2table
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

export default Validation2;

import React, { useState } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import PointsTable from "./PointsTable";

function Points() {
    const [sidebarToggle] = useOutletContext();
    const [loading] = useState(false);

    const dataHeader = [
        {
            key: "mois",
            label: "Mois"
        },
        {
            key: "debit",
            label: "Débit"
        },
        {
            key: "credit",
            label: "Crédit"
        },
        {
            key: "solde",
            label: "Solde"
        }
    ];
    const handleDelete = () => { };
    const data = [
        {
            mois: "05-23",
            debit: "1000",
            credit: "500",
            solde: "500"
        },
        {
            mois: "06-23",
            debit: "1000",
            credit: "500",
            solde: "500"
        },
        {
            mois: "07-23",
            debit: "1000",
            credit: "500",
            solde: "500"
        },
    ];

    return (
        <>
            <main className="h-full">
                <Navbar toggle={sidebarToggle} />

                {/* Main Content */}
                {/* a title and 3 input fields */}
                <div className="mainCard ">
                <h2 className="text-4xl font-bold tracking-tight text-red-800 sm:text-6xl">Points</h2>
                    <div className="border border-red-500 rounded-md p-4">
                        <h2 className="text-2xl font-bold tracking-tight text-red-800 mb-4">Identification</h2>
                        <form>
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <div className="flex justify-start gap-x-8">
                                                <div>
                                                    <label htmlFor="nom" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Nom
                                                    </label>
                                                    <div className="mt-2">
                                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                            <input
                                                                type="text"
                                                                name="nom"
                                                                id="nom"
                                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                                placeholder="Kenz"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="prenom" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Prenom
                                                    </label>
                                                    <div className="mt-2">
                                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                            <input
                                                                type="text"
                                                                name="prenom"
                                                                id="prenom"
                                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                                placeholder="Hicham"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <label htmlFor="iata" className="block text-sm font-medium leading-6 text-gray-900">
                                                Code IATA
                                            </label>
                                            <div className="mt-2">
                                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <input
                                                        type="text"
                                                        name="iata"
                                                        id="iata"
                                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                        placeholder="45622246"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="flex flex-col items-center justify-center h-full border-red-800 rounded-md">
                                                <h2 className="text-8xl font-bold text-red-800">45634</h2>
                                                <p className="text-6xl text-red-800 font-bold">Points</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
                    <PointsTable
                        loading={loading}
                        dataHeader={dataHeader}
                        data={data}
                        handleDelete={handleDelete}
                    />
                </div>
            </main>
        </>
    );
}

export default Points;

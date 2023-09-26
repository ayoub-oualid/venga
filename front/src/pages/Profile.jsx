/* eslint-disable import/first */
<script src="http://localhost:8097"></script>
import React, { useState } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPen } from "@fortawesome/free-solid-svg-icons";;
import ReactModal from 'react-modal';

function Profile() {
  const [sidebarToggle] = useOutletContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md flex justify-center">
            <form>
              {/* Form Default */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom_utilsateur" className="text-sm text-gray-600">
                    Nom utilsateur *
                  </label>
                  <input
                    id="nom_utilsateur"
                    type="text"
                    name="nom_utilsateur"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="A.kenz"
                  />
                </div>
                <div>
                  <label htmlFor="code_iata" className="text-sm text-gray-600">
                    Code IATA *
                  </label>
                  <input
                    id="code_iata"
                    type="text"
                    name="code_iata"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="5432001"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="text-sm text-gray-600">
                    Nom *
                  </label>
                  <input
                    id="nom"
                    type="text"
                    name="nom"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="Kenz"
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className="text-sm text-gray-600">
                    Prenom *
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    name="prenom"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="A."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-gray-600">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="a.kenz@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="civilite" className="text-sm text-gray-600">
                    Civilite
                  </label>
                  <select
                    id="civilite"
                    name="civilite"
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1">
                    <option value="Monsieur">Monsieur</option>
                    <option value="Madame">Madame</option>
                    <option value="Mademoiselle">Mademoiselle</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date_naissance" className="text-sm text-gray-600">
                    Date naissance
                  </label>
                  <input

                    id="date_naissance"
                    type="date"
                    name="date_naissance"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400"
                    placeholder="01/01/1990"
                  />
                </div>
                <div>
                  <label htmlFor="fonction" className="text-sm text-gray-600">
                    Fonction
                  </label>
                  <input

                    id="fonction"
                    type="text"
                    name="fonction"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="Directeur"
                  />
                </div>
                <div>
                  <label htmlFor="adresse" className="text-sm text-gray-600">
                    Adresse
                  </label>
                  <input

                    id="adresse"
                    type="text"
                    name="adresse"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="Rue 1"
                  />
                </div>
                <div>
                  <label htmlFor="code_postal" className="text-sm text-gray-600">
                    Code postal
                  </label>
                  <input

                    id="code_postal"
                    type="text"
                    name="code_postal"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="5432001"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="text-sm text-gray-600">
                    Mobile
                  </label>
                  <input

                    id="mobile"
                    type="text"
                    name="mobile"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="06 00 00 00 00"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="text-sm text-gray-600">
                    Telephone
                  </label>
                  <input

                    id="telephone"
                    type="text"
                    name="telephone"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="01 00 00 00 00"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-row gap-4">
                <button className="bg-red-800 border-red-800 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
                  <div>
                    <FontAwesomeIcon icon={faFloppyDisk} />
                  </div>
                  <span>Enregistrer</span>
                </button>
                <button className="text-red-800 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Annuler
                </button>
                <button className="text-red-800 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm" onClick={(event) => { setIsOpen(true); event.preventDefault(); }}>
                  <div>
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                  <span>Edit password</span>

                </button>
                <ReactModal
                  isOpen={isOpen}
                  contentLabel="Edit Password"
                  onRequestClose={() => setIsOpen(false)}
                >
                  {/*a card with rounded corners containg a form with 3 text inputs of type password and two buttons submit and close using bootstrap classes*/}
                  <div className="mainCard flex justify-center flex-shrink-1">
                    <div className="border border-gray-200 bg-white py-4 px-6 rounded-md flex justify-center">
                    
                      <form>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="form-group">
                          <label htmlFor="oldPassword" className="text-sm text-gray-600">Old Password</label>
                          <input type="password" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="oldPassword" placeholder="Old Password" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="newPassword" className="text-sm text-gray-600">New Password</label>
                          <input type="password" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="newPassword" placeholder="New Password" />
                        </div>
                        <div className="form-group" >
                          <label htmlFor="confirmPassword" className="text-sm text-gray-600">Confirm Password</label>
                          <input type="password" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="confirmPassword" placeholder="Confirm Password" />
                        </div>
                        <div className="mt-6 flex flex-row gap-4">
                        <button className="bg-red-800 border-red-800 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
                          <div>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                          </div>
                          <span>Enregistrer</span>
                        </button>
                        <button className="text-red-800 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                          Annuler
                        </button>
                        </div>
                        </div>
                      </form>
                      
                    </div>
                  </div>
                </ReactModal>

              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}


export default Profile;

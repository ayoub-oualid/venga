import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterIndex() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [agencyIata, setAgencyIata] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [agencyAddress, setAgencyAddress] = useState("");
  const [agencyCity, setAgencyCity] = useState("");
  const [agencyPhone, setAgencyPhone] = useState("");
  const [agencyFax, setAgencyFax] = useState("");
  const [agencyPostalCode, setAgencyPostalCode] = useState("");
  const [agencyEmail, setAgencyEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientSurname, setClientSurname] = useState("");
  const [clientBirthDate, setClientBirthDate] = useState("");
  const [clientFunction, setClientFunction] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientPostalCode, setClientPostalCode] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setError(false);
    console.log(agencyIata);
    console.log(agencyName);
    console.log(agencyAddress);
    console.log(agencyCity);
    console.log(agencyPhone);
    console.log(agencyFax);
    console.log(agencyPostalCode);
    console.log(agencyEmail);
    console.log(clientName);
    console.log(clientSurname);
    console.log(clientBirthDate);
    console.log(clientFunction);
    console.log(clientEmail);
    console.log(clientAddress);
    console.log(clientPostalCode);
    console.log(clientPhone);
    setLoading(true);
    navigate("/");
  };
  const registerImage =
    "https://edp.raincode.my.id/static/media/login.cc0578413db10119a7ff.png";
  return (
    <>
      <div className="flex min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full flex-col md:flex-row">
          {/* left */}
          <div className="md:bg-red-800 md:min-h-screen flex flex-wrap md:w-1/2">
            <div className="flex flex-col md:flex-1 items-center justify-center">
              <div className="loginWrapper flex flex-col w-full lg:px-36 md:px-8 px-8 md:py-8">
                {/* Login Header Text */}
                <div className="hidden md:block font-medium self-center text-xl sm:text-3xl text-gray-100">
                  Agency
                </div>

                {/* Sparator */}
                <div className="hidden md:block relative mt-10 h-px bg-gray-300">
                  <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    <span className="bg-white px-4 text-xs text-gray-500 uppercase">

                    </span>
                  </div>
                </div>

                {/* Register Form */}
                <div className="md:mt-10 mt-4">
                  
                    <div className="flex flex-col md:flex-row mb-6">
                      {/* Agency IATA */}
                      <div className="flex flex-col mb-6">
                        <label
                          htmlFor="agencyIata"
                          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
                        >
                          Agency IATA
                        </label>
                        <div className="relative">
                          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <input

                            id="agencyIata"
                            type="text"
                            name="agencyIata"
                            placeholder="Agency IATA"
                            onChange={(e) => setAgencyIata(e.target.value)}
                            value={agencyIata}
                            required
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-emerald-400"
                          />
                        </div>
                      </div>
                      {/* Agency Name */}
                      <div className="flex flex-col mb-6 pl-4">
                        <label
                          htmlFor="agencyName"
                          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
                        >
                          Agency Name
                        </label>
                        <div className="relative">
                          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <input

                            id="agencyName"
                            type="text"
                            name="agencyName"
                            placeholder="Agency Name"
                            onChange={(e) => setAgencyName(e.target.value)}
                            value={agencyName}
                            required
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-emerald-400"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-6">
                      {/* Agency Address */}
                      <div className="flex flex-col mb-6">
                        <label
                          htmlFor="agencyAddress"
                          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
                        >
                          Agency Address
                        </label>
                        <div className="relative">
                          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <input

                            id="agencyAddress"
                            type="text"
                            name="agencyAddress"
                            placeholder="Agency Address"
                            onChange={(e) => setAgencyAddress(e.target.value)}
                            value={agencyAddress}
                            required
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-emerald-400"
                          />
                        </div>
                      </div>
                      {/* Agency City */}
                      <div className="flex flex-col mb-6 pl-4">
                        <label
                          htmlFor="agencyCity"
                          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
                        >
                          Agency City
                        </label>
                        <div className="relative">
                          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <input
                            id="agencyCity"
                            type="text"
                            name="agencyCity"
                            placeholder="Agency City"
                            onChange={(e) => setAgencyCity(e.target.value)}
                            value={agencyCity}
                            required
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-emerald-400"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Agency Phone */}
                    <div className="flex flex-col md:flex-row mb-6">
                      <div className="flex flex-col mb-6">
                        <label

                          htmlFor="agencyPhone"
                          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
                        >
                          Agency Phone
                        </label>
                        <div className="relative">
                          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <input

                            id="agencyPhone"
                            type="text"
                            name="agencyPhone"
                            placeholder="Agency Phone"
                            onChange={(e) => setAgencyPhone(e.target.value)}
                            value={agencyPhone}
                            required
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-emerald-400"
                          />
                        </div>
                      </div>
                      {/* Agency Fax */}
                      <div className="flex flex-col mb-6 pl-4">
                        <label
                          htmlFor="agencyFax"
                          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
                        >
                          Agency Fax
                        </label>
                        <div className="relative">
                          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <input

                            id="agencyFax"
                            type="text"
                            name="agencyFax"
                            placeholder="Agency Fax"
                            onChange={(e) => setAgencyFax(e.target.value)}
                            value={agencyFax}
                            required
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-emerald-400"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-6">
                      {/* Agency Postal Code */}
                      <div className="flex flex-col mb-6">
                        <label
                          htmlFor="agencyPostalCode"
                          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
                        >
                          Agency Postal Code
                        </label>
                        <div className="relative">
                          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <input

                            id="agencyPostalCode"
                            type="text"
                            name="agencyPostalCode"
                            placeholder="Agency Postal Code"
                            onChange={(e) => setAgencyPostalCode(e.target.value)}
                            value={agencyPostalCode}
                            required
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-emerald-400"
                          />
                        </div>
                      </div>
                      {/* Agency Email */}
                      <div className="flex flex-col mb-6 pl-4">
                        <label
                          htmlFor="agencyEmail"
                          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
                        >
                          Agency Email
                        </label>
                        <div className="relative">
                          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-500">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </div>
                          <input

                            id="agencyEmail"
                            type="email"
                            name="agencyEmail"
                            placeholder="Agency Email"
                            onChange={(e) => setAgencyEmail(e.target.value)}
                            value={agencyEmail}
                            required
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-500 w-full py-2 focus:outline-none focus:border-emerald-400"
                          />
                        </div>
                      </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          
          <div className="flex flex-col md:flex-1 items-center justify-center">
            <div className="loginWrapper flex flex-col w-full lg:px-36 md:px-8 px-8 md:py-8">
              {/* Login Header Text */}
              <div className="hidden md:block font-medium self-center text-xl sm:text-3xl text-gray-800">
                Client
              </div>

              {/* Sparator */}
              <div className="hidden md:block relative mt-10 h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                  <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                  </span>
                </div>
              </div>


              {/* Register Form */}
              <div className="md:mt-10 mt-4">

                  <div className="flex flex-col md:flex-row mb-6">
                    {/* Client Name */}
                    <div className="flex flex-col mb-6">
                      <label
                        htmlFor="clientName"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                      >
                        Client Name
                      </label>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-500">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input

                          id="clientName"
                          type="text"
                          name="clientName"
                          placeholder="Client Name"
                          onChange={(e) => setClientName(e.target.value)}
                          value={clientName}
                          required
                          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-500 w-full py-2 focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>
                    {/* Client Surname */}
                    <div className="flex flex-col mb-6 pl-4">
                      <label
                        htmlFor="clientSurname"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                      >
                        Client Surname
                      </label>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-500">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input

                          id="clientSurname"
                          type="text"
                          name="clientSurname"
                          placeholder="Client Surname"
                          onChange={(e) => setClientSurname(e.target.value)}
                          value={clientSurname}
                          required
                          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-500 w-full py-2 focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row mb-6">
                    {/* Client Birth Date */}
                    <div className="flex flex-col mb-6">
                      <label
                        htmlFor="clientBirthDate"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                      >
                        Client Birth Date
                      </label>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-500">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input

                          id="clientBirthDate"
                          type="date"
                          name="clientBirthDate"
                          placeholder="Client Birth Date"
                          onChange={(e) => setClientBirthDate(e.target.value)}
                          value={clientBirthDate}
                          required
                          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-500 w-full py-2 focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>
                    {/* Client Function */}
                    <div className="flex flex-col mb-6 pl-4">
                      <label
                        htmlFor="clientFunction"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                      >
                        Client Function
                      </label>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-500">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input

                          id="clientFunction"
                          type="text"
                          name="clientFunction"
                          placeholder="Client Function"
                          onChange={(e) => setClientFunction(e.target.value)}
                          value={clientFunction}
                          required
                          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-500 w-full py-2 focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row mb-6">
                    {/* Client Email */}
                    <div className="flex flex-col mb-6">
                      <label
                        htmlFor="clientEmail"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                      >
                        Client Email
                      </label>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-500">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input

                          id="clientEmail"
                          type="email"
                          name="clientEmail"
                          placeholder="Client Email"
                          onChange={(e) => setClientEmail(e.target.value)}
                          value={clientEmail}
                          required
                          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-500 w-full py-2 focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>
                    {/* Client Address */}
                    <div className="flex flex-col mb-6 pl-4">
                      <label
                        htmlFor="clientAddress"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                      >
                        Client Address
                      </label>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-500">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input

                          id="clientAddress"
                          type="text"
                          name="clientAddress"
                          placeholder="Client Address"
                          onChange={(e) => setClientAddress(e.target.value)}
                          value={clientAddress}
                          required
                          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-500 w-full py-2 focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row mb-6">
                    {/* Client Postal Code */}
                    <div className="flex flex-col mb-6">
                      <label
                        htmlFor="clientPostalCode"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                      >
                        Client Postal Code
                      </label>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-500">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input

                          id="clientPostalCode"
                          type="text"
                          name="clientPostalCode"
                          placeholder="Client Postal Code"
                          onChange={(e) => setClientPostalCode(e.target.value)}
                          value={clientPostalCode}
                          required
                          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-500 w-full py-2 focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>
                    {/* Client Phone */}
                    <div className="flex flex-col mb-6 pl-4">
                      <label
                        htmlFor="clientPhone"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                      >
                        Client Phone
                      </label>
                      <div className="relative">
                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-500">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input

                          id="clientPhone"
                          type="text"
                          name="clientPhone"
                          placeholder="Client Phone"
                          onChange={(e) => setClientPhone(e.target.value)}
                          value={clientPhone}
                          required
                          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-500 w-full py-2 focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Button Cancel */}
                  <div className="flex w-full">
                    <button
                      disabled={loading}
                      type="cancel"
                      className="flex relative items-center mr-4 justify-center focus:outline-none text-red-800 text-sm border border-red-800 rounded-lg md:rounded md:py-2 py-3 w-full transition duration-150 ease-in"
                      onClick={() => {navigate("/auth/login");}}
                    >
                      <span className="mr-2 md:uppercase">
                        {loading ? "Processing...." : "Cancel"}
                      </span>
                    </button>
                    <button
                      disabled={loading}
                      type="submit"
                      className="flex relative items-center justify-center focus:outline-none text-white text-sm bg-red-800 rounded-lg md:rounded md:py-2 py-3 w-full transition duration-150 ease-in"
                    >
                      <span className="mr-2 md:uppercase">
                        {loading ? "Processing...." : "Register"}
                      </span>
                    </button>
                  </div>
                  


                
              </div>



              {/* End Register Link */}
            </div>
          </div>
        </div></form>
      </div>
      
    </>
  );
}

export default RegisterIndex;

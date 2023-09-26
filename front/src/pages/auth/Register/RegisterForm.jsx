import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterForm() {
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
    const [clientMobile, setClientMobile] = useState("");
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
        console.log(clientMobile);
        console.log(clientPhone);
        setLoading(true);
        navigate("/");
    };
    return (

        <>
            <div className="flex min-h-screen bg-red-800">
                
                <div className="flex w-full flex-col md:flex-row ">
                    <form onSubmit={handleSubmit} className="flex w-3/5 mx-auto">
                        <div className="items-center text-center flex flex-col relative justify-center mx-auto ">
                            
                                <h1 className="text-3xl text-gray-100 font-bold mb-12">Agency</h1>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-group">
                                        <label htmlFor="agencyIata" className="text-gray-100 font-semibold">Iata</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="agencyIata" placeholder="Iata" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="agencyName" className="text-gray-100 font-semibold">Name</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="agencyName" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="agencyAddress" className="text-gray-100 font-semibold">Address</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="agencyAddress" placeholder="Address" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="agencyCity" className="text-gray-100 font-semibold">City</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="agencyCity" placeholder="City" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="agencyPhone" className="text-gray-100 font-semibold">Phone</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="agencyPhone" placeholder="Phone" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="agencyFax" className="text-gray-100 font-semibold">Fax</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="agencyFax" placeholder="Fax" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="agencyPostalCode" className="text-gray-100 font-semibold">Postal Code</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="agencyPostalCode" placeholder="Postal Code" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="agencyEmail" className="text-gray-100 font-semibold">Email</label>
                                        <input type="email" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="agencyEmail" placeholder="Email" />
                                    </div>
                                    <div className="form-group hidden">
                                        <label htmlFor="agencyEmail" className="text-gray-100 font-semibold">Email</label>
                                        <input type="email" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1" id="agencyEmail" placeholder="Email" />
                                    </div>
                                
                            </div>

                        </div>
                        <div className="items-center text-center flex flex-col relative justify-center mx-auto">
                            
                                <h1 className="text-3xl text-gray-100 font-bold mb-12">Client</h1>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col mb-3">
                                    <div className="relative">
                                        <label htmlFor="clientName" className="text-gray-100 font-semibold">Name</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400" id="clientName" placeholder="Name" />
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="clientSurname" className="text-gray-100 font-semibold">Surname</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400" id="clientSurname" placeholder="Surname" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="clientBirthDate" className="text-gray-100 font-semibold">Birth Date</label>
                                        <input type="date" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400" id="clientBirthDate" placeholder="Birth Date" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="clientFunction" className="text-gray-100 font-semibold">Function</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400" id="clientFunction" placeholder="Function" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="clientEmail" className="text-gray-100 font-semibold">Email</label>
                                        <input type="email" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400" id="clientEmail" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="clientAddress" className="text-gray-100 font-semibold">Address</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400" id="clientAddress" placeholder="Address" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="clientPostalCode" className="text-gray-100 font-semibold">Postal Code</label>
                                        <input type="text" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400" id="clientPostalCode" placeholder="Postal Code" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="clientMobile" className="text-gray-100 font-semibold">Mobile</label>
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400" id="clientMobile" placeholder="Mobile" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="clientPhone" className="text-gray-100 font-semibold">Phone</label>
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400" id="clientPhone" placeholder="Phone" />
                                    </div>
                                </div>
                            
                        </div>

                    </form>
                </div >
            </div >
        </>
    );
}
export default RegisterForm;

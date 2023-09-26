import React, { useRef } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

function TicketList() {
    const [sidebarToggle] = useOutletContext();
    const fileInput = useRef(null);

    const handleUpload = (event) => {
        event.preventDefault();
        if (fileInput.current.files.length === 0) {
            console.log("No file selected!");
            return;
        }

        const file = fileInput.current.files[0];


        const formData = new FormData();
        formData.append('ticket.json', file);

        fetch('http://localhost:8080/ticket/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });

        // If you want to process the file in the frontend:
        console.log(file);
    };

    return (
        <>
            <main className="h-full">
                <Navbar toggle={sidebarToggle} />

                {/* Main Content */}
                <div className="mainCard">
                <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex h-screen justify-center items-center">
                <div class="min-h-screen flex items-center justify-center">
    <h1 class="text-5xl font-bold text-center">Tickets File</h1>
</div>

                    {/* File Upload */}
                    <form onSubmit={handleUpload} className="p-4 space-y-4">
                        <div className="flex items-center">
                            <input 
                                type="file" 
                                ref={fileInput} 
                                className="hidden"
                                id="fileUpload" 
                            />
                            <label 
                                htmlFor="fileUpload"
                                className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Choose File
                            </label>
                            <span className="ml-4">{fileInput.current?.files[0]?.name || "No file chosen"}</span>
                        </div>
                        <button 
                            type="submit" 
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        >
                            Upload
                        </button>
                    </form>
                </div>
            </div>
                </div>
            </main>
        </>
    );
}

export default TicketList;

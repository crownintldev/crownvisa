//@ts-nocheck
"use client";
import React, { useState } from "react";

const UploadFile = () => {
    const [file, setFile] = useState();
    const [uploadedFilePath, setUploadedFilePath] = useState(''); // State to store the uploaded file path

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(file);
        const data = new FormData();
        data.set("file", file);
        const response = await fetch("api/upload", {
            method: "POST",
            body: data,
        });
        const result = await response.json();
        console.log(result);
        if (result.success) {
            setUploadedFilePath(result.path); // Update state with the file path
            console.log(result.path);
        }
    };

    return (
        <main>
            <h1>Upload Images</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="file"
                    name="file"
                    onChange={(e) => setFile(e.target.files?.[0])}
                />
                <button type="submit">Upload Image</button>
            </form>
            {uploadedFilePath && <p>Uploaded File Path: {uploadedFilePath}</p>}
        </main>
    );
};

export default UploadFile;

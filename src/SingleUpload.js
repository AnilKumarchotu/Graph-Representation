import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import filter from './Images/filter.png'

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('images', selectedFile);

    fetch('https://react-node-host.vercel.app/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('File uploaded successfully:', data);
        if (data.imageUrl) {
          setUploadedImages(prevImages => [...prevImages, data.imageUrl]);
        }
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  };

  useEffect(() => {
    axios.get('https://react-node-host.vercel.app/getdata')
      .then((response) => {
        console.log('API response:', response.data);
        if (response.data.images && Array.isArray(response.data.images)) {
          setUploadedImages(response.data.images);
        } else {
          console.error('Data from API is not in expected format:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const options = [
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Dhanbad', label: 'Dhanbad' },
    { value: 'Varanasi', label: 'Varanasi' },
    { value: 'Ghazipur', label: 'Ghazipur' },
  ];

  const DropdownWithSearch = () => {
  }
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };


  return (
    <>

      <div style={{ position: 'absolute', top: '0', right: '0', margin: '10px' }}>
        <img
          src={filter}  // Ensure this is the correct path to your filter icon
          onClick={handleChange}
          options={options}  // Uncomment or define handleShow if needed
          className="mr_15 c_pointer"
          alt="icon"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          value={selectedOption}
          title="Show"
          style={{ width: '20px', height: '20px' }}
        />
      </div>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>

      <div>
        <label>View</label>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {uploadedImages.map((url, index) => (
            <img key={index} src={url} alt={`Uploaded ${index}`} style={{ width: '100px', height: '100px', margin: '5px' }} />
          ))}
        </div>
      </div>

      <div>
        <div>
          <h1>Data from API</h1>
          <pre>{uploadedImages}</pre>
        </div>
      </div>
    </>
  );
};

export default FileUpload;

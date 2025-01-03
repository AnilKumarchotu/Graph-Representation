import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, } from 'chart.js';
import { Button } from "bootstrap";
import PdfView from "./PdfView";
import records from "./records.json"

const RotateButton = () => {
  const [titleinput, settitleInput] = useState("");
  const [descinput, setdescInput] = useState("");
  const [tablemap, settablemap] = useState([]);
  const [delbtn, setdelBtn] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [amountData, setamountData] = useState()
  const [pdfBtn, setpdfBtn] = useState(false)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("todoList"));
    if (savedData) {
      settablemap(savedData);
    }
  }, []);

  useEffect(() => {
    if (tablemap.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(tablemap));
    }
  }, [tablemap]);

  const handleChange = (e) => {
    setamountData(e.target.value)
  }
  const handletitle = (e) => {
    settitleInput(e.target.value);
  };

  const handledesc = (e) => {
    setdescInput(e.target.value);
  };

  // Handle add button click
  const handleAdd = () => {
    const newData = {
      title: titleinput,
      description: descinput,
      selectCity: selectCity,
      amountData: amountData,
      selected: false, // Add a selected property to track if the item is selected for deletion
    };
    settablemap([...tablemap, newData]);
    settitleInput("");
    setdescInput("");
  };

  // Handle delete button click
  const handleDelete = () => {
    setdelBtn(!delbtn)
  };

  // Handle checkbox change
  const handleCheckboxChange = (index) => {
    const updatedItems = [...selectedItems];
    if (updatedItems.includes(index)) {
      updatedItems.splice(updatedItems.indexOf(index), 1); // Remove if already selected
    } else {
      updatedItems.push(index); // Add if not selected
    }
    setSelectedItems(updatedItems);
  };

  // Handle the deletion of selected items
  const handleDeleteSelected = () => {
    const newTablemap = tablemap.filter((_, index) => !selectedItems.includes(index)); // Filter out selected items
    settablemap(newTablemap);
    setSelectedItems([]); // Clear selected items
    setdelBtn(false); // Exit delete mode
  };

  const [selectCity, setselectCity] = useState([])
  const cities = [
    "Kolkata",
    "Delhi",
    "Mumbai",
    "Banglore",
    "Chennai",
  ]

  const handleCity = (e) => {
    setselectCity(e.target.value)
  }

  const gettodoData = JSON.parse(localStorage.getItem("todoList"))
  const amount = gettodoData.map((ele) => {
    return ele.amountData
  })
  const selectCities = gettodoData.map((ele) => {
    return ele.selectCity
  })

  const labels = selectCities
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Currency data",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: amount,
      },
    ],
  };

  const handlePdfBtn = () => {
    setpdfBtn(true)
  }

  const renderPdfComponent = () => {
    if (pdfBtn) {
      return <div><PdfView /></div>; // You can replace this with your actual PDF component
    }
    return null;
  };


  return (
    <>
      <div className="row">
        {/* <h2>To Do List</h2> */}
        <div className="col-sm-3 col-md-6" style={{ marginTop: "4px" }}>
          <div className="row" style={{ marginLeft: "5px" }}>
            <input
              placeholder="Title"
              value={titleinput}
              onChange={handletitle}
              style={{ marginRight: "10px", width: "60px" }}
            />

            <input
              placeholder="Description"
              value={descinput}
              onChange={handledesc}
              style={{ width: "500px" }}
            />

            <select className="form-control"
              style={{ width: "115px", marginLeft: "10px" }}
              value={selectCity}
              onChange={handleCity}
            >
              <option>Select</option>
              {cities && cities.map((ele) => (
                <option value={ele}>{ele}</option>
              ))}
            </select>

            <input value={amountData} onChange={handleChange} style={{ width: "80px", marginLeft: "10px" }} />

            <div style={{ marginTop: "10px", marginLeft: "110px" }}>
              {titleinput.length == 0 ? (
                <button style={{ marginRight: "20px" }} onClick={handleAdd} disabled>
                  Add
                </button>
              ) : (
                <button style={{ marginRight: "20px" }} onClick={handleAdd}>
                  Add
                </button>
              )}

              <button onClick={handleDelete} style={{ marginRight: "2px" }}>
                {delbtn ? "Cancel" : "Delete"}
              </button>
              {delbtn && (
                <button onClick={handleDeleteSelected}>Delete</button>
              )}
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-6">

          <table style={{ marginTop: "5px", width: "98%" }}>
            <thead style={{ border: "2px solid #1C6EA4" }}>
              <tr >
                <th style={{ width: "120px" }}>Sl no</th>
                <th style={{ width: "120px" }}>Title</th>
                <th style={{ width: "120px" }}>Description</th>
                <th style={{ width: "120px" }}>State</th>
                <th style={{ width: "120px" }}>Amount</th>
                {delbtn && <th style={{ width: "120px" }}>Select</th>}
              </tr>
            </thead>
            <tbody>
              {tablemap.map((todo, index) => (
                <tr key={index} style={{ border: "2px solid #1C6EA4" }}>
                  <td>{index + 1}</td>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>{todo.selectCity}</td>
                  <td>{todo.amountData}</td>
                  {delbtn && (
                    <td>
                      <FormCheckInput
                        type="checkbox"
                        checked={selectedItems.includes(index)}
                        onChange={() => handleCheckboxChange(index)} // Track selected checkboxes
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ width: "600px", height: "600px" }}>
        <Line data={data} />
      </div>

      <button onClick={handlePdfBtn} value={pdfBtn}>View Pdf</button>
      {renderPdfComponent()}

      {records.map(show => {
        return (
          <div key={show.id}>
            {show.id}
            {show.title}
            {show.age}
            {show.age === 25 ? <div>{show.Nickname}</div> : "No Nickname"}
          </div>
        )
      })
      }

    </>
  );
};

export default RotateButton;

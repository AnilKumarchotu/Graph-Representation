import React, { useEffect, useState, useRef } from 'react'
import App from './App'
import { Dropdown } from 'bootstrap'
import Dropdownmy from './Dropdownmy'
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type'

function Users() {

    const [regtitle, setregtitle] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [mobile, setMobile] = useState("")
    const [gender, setGender] = useState(false)
    const [userLists, setuserLists] = useState([])
    const [error, setError] = useState(false)
    const [querytext, setQuerytext] = useState("")
    const [hairColor, setHairColor] = useState("");
    const [address, setAddress] = useState("");
    // const [searchbutton, setsearchbutton] = useState(false)
    const formRef = useRef(null);
    const [isFormFilled, setIsFormFilled] = useState(false);

    const haircolor = [
        { value: 1, label: "Black" },
        { value: 2, label: "Brown" },
        { value: 3, label: "White" },
        { value: 4, label: "Dark" },
    ]

    const regtitlenm = (e) => {
        setregtitle(e.target.value)
    }
    const handleaddress = (e) => {
        setAddress(e.target.value)
    }
    const passwords = (e) => {
        setpassword(e.target.value)
    }
    const handleHaircolor = (e) => {
        setHairColor(e.target.label)
    }

    const handleFirstChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastChange = (e) => {
        setLastName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMobileChange = (e) => {
        setMobile(e.target.value)
    }

    const handleGenderChange = (e) => {
        console.log(e.target.value, "Hello")
        setGender(e.target.value)
    }

    const regJson = JSON.stringify({
        title: regtitle,
        fname: firstName,
        lname: lastName,
        email: email,
        password: password,
        phone: mobile,
        address: {
            street: address,
        },
        hair: hairColor,
        gender: gender
    })
    const registrationForm = async () => {
        try {
            const result = await axios.post(
                `http://localhost:3000/items/registeruser`, regJson,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        if (firstName === "") {
            setError(true)
            return;
        }
        if (lastName === "") {
            setError(true)
            return;
        }
        if (email === "") {
            setError(true)
            return;
        }
        if (mobile === "") {
            setError(true)
            return;
        }
        if (gender === false) {
            setError(true)
            return;
        }
        else {
            setError(false)
        }
        registrationForm()
        e.preventDefault();
        const newUser = {
            regtitle: regtitle,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            mobile: mobile,
            address: address,
            gender: gender,
            hairColor: hairColor
        };
        setuserLists([...userLists, newUser]);
        setregtitle("")
        setFirstName("");
        setLastName("");
        setEmail("");
        setpassword("")
        setMobile("");
        setGender("");
        setAddress("")
    }

    const handletext = (e) => {
        setQuerytext(e.target.value)
    }

    const handleSearchButtonClick = () => {
        if (querytext.trim() !== "") {
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(querytext)}`;
            window.location.href = googleSearchUrl;
        }
    }

    const [datas, setDatas] = useState([])
    const APIcall = () => {
        fetch("https://api.restful-api.dev/objects")
            .then((res) => res.json())
            .then(setDatas);
    }

    useEffect(() => {
        APIcall()
    }, [])

    console.log(datas, "testingpur")

    const filterData = datas.filter((datas) => datas.id != 5)
    // const mapping = datas.map((item)=>item.id)
    // console.log(mapping,"jsondatawith")
    console.log(filterData, "jsondatawith")

    const handletheCase = (datas) => {
        const mobile = "Apple AirPods"
        if (mobile) {
            const checking = datas.find((item) => item.name === mobile)
            if (checking) {
                console.log("Data is Found", checking)
            } else {
                console.log("Not Found")
            }

        }

    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click is outside the form div
            if (formRef.current && !formRef.current.contains(event.target)) {
                if (!isFormFilled) {
                    alert("First Fill the Form");
                }
            }
        };

        // Attach event listener to document
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isFormFilled]);

    const handleFormChange = (event) => {
        // Check if all fields are filled out (you may adjust this logic based on your form's specific requirements)
        const formValues = Array.from(formRef.current.elements).map(input => input.value.trim());
        const allFieldsFilled = formValues.every(value => value);
        setIsFormFilled(allFieldsFilled);
    };
    useEffect(() => {
        setIsFormFilled("")
    }, [isFormFilled])
    console.log(isFormFilled, "testingssss")

    const printStar = () => {
        let rows = 10;
        for (let i = 1; i <= rows; i++) {
            let spaces = ' '.repeat(rows - i);
            let stars = '*'.repeat(2 * i - 1);
            console.log(spaces + stars);
        }
    };
    printStar();
     
    return (

        <div ref={formRef} style={{ padding: "20px", border: "1px solid #ccc" }} onChange={handleFormChange}>
            <div className="search-container">
                <input type='text' onChange={handletext} value={querytext} placeholder='Search here' style={{ width: '200px', borderRadius: "10px" }}></input>
                <button onClick={handleSearchButtonClick} value="Search" style={{ borderRadius: "10px" }}>Search</button>
            </div>

            <div style={{
                outline: '2px solid black',
                outlineOffset: '10px',
                padding: '20px',
                borderRadius: '8px',
                width: 'max-content',
                margin: '0 auto',
            }}>
                <h1 style={{ marginBottom: "20px", textDecoration: 'underline' }}>Registration Form</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '18px', alignItems: 'center' }}>

                    <label style={{ width: '415px' }}>Title :</label>
                    <div style={{ marginRight: "215px" }}>
                        <input type="radio" value="Mr" id="Mr" name="title" onChange={regtitlenm} style={{ marginRight: '10px', transform: 'scale(1.5)' }} />Mr
                        <input type="radio" value="Mrs" id="Mrs" name="title" onChange={regtitlenm} style={{ marginLeft: '20px', transform: 'scale(1.5)', marginRight: '10px' }} />Mrs
                    </div>

                    <label style={{ width: '270px' }}>Enter First Name :</label>
                    <input
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={handleFirstChange}
                    />
                    {error && <span style={{ color: 'red' }}>This field is required</span>}

                    <label style={{ width: '270px' }}>Enter Last Name :</label>
                    <input
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={handleLastChange}
                    />
                    {error && <span style={{ color: 'red' }}>This field is required</span>}

                    <label style={{ width: '380px' }}>Mail Id :</label>
                    <input
                        placeholder="Enter Mail Id"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {error && <span style={{ color: 'red' }}>This field is required</span>}

                    <label style={{ width: '380px' }}>Password :</label>
                    <input
                        placeholder="Enter Password"
                        value={password}
                        onChange={passwords}
                    />
                    {error && <span style={{ color: 'red' }}>This field is required</span>}

                    <label style={{ width: '380px' }}>Mobile :</label>
                    <input
                        placeholder="Enter Mobile Number"
                        value={mobile}
                        onChange={handleMobileChange}
                    />
                    {error && <span style={{ color: 'red' }}>This field is required</span>}

                    <label style={{ width: '380px' }}>Address :</label>
                    <input
                        placeholder="Enter Address"
                        value={address}
                        onChange={handleaddress}
                    />

                    <label htmlFor="haircolor-dropdown" style={{ width: '340px' }}>Hair Color :</label>
                    <div style={{ marginRight: "260px" }}>
                        <Dropdownmy
                            id="haircolor-dropdown"
                            placeholder="Hair Color"
                            onChange={handleHaircolor}
                            value={haircolor}
                        />
                    </div>
                    <label style={{ width: '380px' }}>Gender :</label>
                    <div style={{ marginRight: "150px" }}>
                        <input type="radio" value="Male" id="male" name="gender" onChange={handleGenderChange} style={{ marginRight: '10px', transform: 'scale(1.5)' }} />Male
                        <input type="radio" value="Female" id="female" name="gender" onChange={handleGenderChange} style={{ marginLeft: '20px', transform: 'scale(1.5)', marginRight: '10px' }} />Female
                    </div>
                    {error.gender && <span style={{ color: 'red' }}>This field is required</span>}
                </div>

                <button style={{ marginTop: "15px" }} onClick={handleSubmit}>Submit</button>
            </div>

            {userLists.length === 0 ? (
                <p style={{ marginTop: "15px" }}>No User Found</p>
            ) : (
                <>
                    <h1 style={{ marginTop: "15px" }}>Users List :-</h1>
                    <table border={1}>
                        <thead>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Title</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>First Name</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Last Name</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Mail Id</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Password</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Mobile</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Address</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Gender</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>Hair Color</td>
                            </tr>
                        </thead>
                        <tbody>
                            {userLists.map((user, index) =>
                                <tr key={index}>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{user.regtitle}</td>

                                    <td style={{ border: '1px solid black', padding: '8px' }}>{user.firstName}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{user.lastName}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{user.email}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{user.password}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{user.mobile}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{user.address}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{user.gender}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{user.haircolor == 1 ? "Black" : user.haircolor == 2 ? "Brown" : user.haircolor == 3 ? "White" : user.haircolor == 4 ? "Dark" : ""}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            )}
            {datas.map((item) =>
                <label key={item.id}>
                    <td> Id Number:{item.id},</td>
                </label>

            )}
            <button onClick={() => handletheCase(datas)}>Click</button>

        </div>

    )
}

export default Users

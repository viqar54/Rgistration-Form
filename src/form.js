import React, { useEffect, useState } from 'react'

function Form() {
    const data = { name: "", Email: "", Password: "" };
    const [inputData, setInputData] = useState(data)
    const [flag, setflag] = useState(false)
    useEffect(() => {
        console.log("Registered")
    }, { flag })
    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!inputData.name || !inputData.Email || !inputData.Password) {
            alert("All fields are Mandatory")
        }
        else {
            setflag(true)

        }
    }
    return (

        <>

            <pre>{(flag) ? <h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully </h2> : ""}</pre>
            <form className='container' onSubmit={handleSubmit}>
                <div className='header'>
                    <h1>Registration Form</h1>
                </div>
                <div>
                    <input type='text' placeholder='Enter Your Name' name="name" value={inputData.name} onChange={handleData}></input>
                </div>

                <div>
                    <input type='text' placeholder='Enter Your Email' name='Email' value={inputData.Email} onChange={handleData} ></input>
                </div>
                <div>
                    <input type='text' placeholder='Enter Your Password' name='Password' value={inputData.Password} onChange={handleData}></input>
                </div>

                <div>
                    <button type='Submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form;
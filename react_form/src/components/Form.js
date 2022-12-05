import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import bgimg from '../assets/bg1.jpg';
import './styles.css';
import { useForm } from 'react-hook-form';
import { useState } from "react";

import QrReader from 'react-qr-scanner'
export default function Form() {



    const [selected, setSelected] = useState("environment");
    const [startScan, setStartScan] = useState(false);
    const [loadingScan, setLoadingScan] = useState(false);
    const [data, setData] = useState("");


    const{register,handleSubmit,watch,formState:{errors}} = useForm()
    const onSubmit = data => console.log(data);
    const data = [
        {Gears: 'Helmet', id:1},
        {Gears: 'Knee pad', id:2},
        {Gears: 'Elbow pad', id:3},
        {Gears: 'Reflector/light', id:4},
        {Gears: 'Gloves', id:5},
        {Gears: 'Bike kit', id:6}
    ]
    console.log(watch("firstname","lastname","address","mobile","start","end","bike"));
    const [options] = useState(data);
    
    
    

    const handleScan = async (scanData) => {
        setLoadingScan(true);
        console.log(`loaded data data`, scanData);
        if (scanData && scanData !== "") {
            console.log(`loaded >>>`, scanData);
            setData(scanData);
            setStartScan(false);
            setLoadingScan(false);
            // setPrecScan(scanData);
        }
    };
    const handleError = (err) => {
        console.error(err);
    };


    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        setStartScan(false);
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            setStartScan(false);
            modal.style.display = "none";
        }
    }


    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);


    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Welcome to BisikRenta</h2>
                    <span style={{ color: 'grey', fontSize: '15px' }}>register and rent bikes here.</span>

                    <form id="form" className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("firstname", { required: true, pattern: /^[A-Za-z\s]*$/, minLength: 2 })} placeholder='First name*' />
                        {errors.firstname ? (
                            <span>
                                {errors.firstname?.type === "required" && "This field is required."}
                                {errors.firstname?.type === "minLength" && "First Name should be 2 or more letters."}
                                {errors.firstname?.type === "pattern" && "Invalid Input!."}
                            </span>
                        ) : (' ')}



                        <input type="text" {...register("lastname", { required: true, pattern: /^[A-Za-z\s]*$/, minLength: 2 })} placeholder='Last name*' />
                        {errors.lastname ? (
                            <span>
                                {errors.lastname?.type === "required" && "This field is required."}
                                {errors.lastname?.type === "minLength" && "Last Name should be 2 or more letters."}
                                {errors.lastname?.type === "pattern" && "Invalid Input!."}
                            </span>
                        ) : (' ')}

                        <input type="text" {...register("address", { required: true, pattern: /^[^\s]+/ })} placeholder='Address*' />
                        {errors.address ? (
                            <span>
                                {errors.address?.type === "required" && "This field is required."}
                                {errors.address?.type === "pattern" && "Invalid Input!"}
                            </span>
                        ) : (' ')}


                        <input type="number" {...register("mobile", { required: true, pattern: /^([+]\d{2})?\d{11}$/ })} placeholder='(+63) Mobile number*' />

                        {errors.mobile ? (
                            <span>
                                {errors.mobile?.type === "required" && "This field is required."}
                                {errors.mobile?.type === "maxLength" && "Invalid number; must be ten digits"}
                                {errors.mobile?.type === "pattern" && "Please enter valid mobile number."}
                            </span>
                        ) : (' ')}
                        <select {...register("start", { required: true })} >
                            <option disabled={true} selected value="">
                                --Select starting station*--
                            </option>
                            <option>Roosevelt</option>
                            <option>Balintawak</option>
                            <option>Monumento</option>
                            <option>5th Avenue</option>
                            <option>R.Papa</option>
                            <option>Abad Santos</option>
                            <option>Bluementritt</option>
                            <option>Tayuman</option>
                            <option>Bambang</option>
                            <option>Doroteo Jose</option>
                            <option>Carriedo</option>
                            <option>Central Terminal</option>
                            <option>UN Avenue</option>
                            <option>Pedro Gil</option>
                            <option>Quirino</option>
                            <option>Vito Cruz</option>
                            <option>Gil Puyat</option>
                            <option>Libertad</option>
                            <option>EDSA</option>
                            <option>Baclaran</option>
                        </select>
                        {errors.start ? (
                            <span>{errors.start?.type === "required" && "This field is required."}</span>
                        ) : (' ')}

                        <select {...register("end", { required: true })} >
                            <option disabled={true} selected value="">
                                --Select ending station*--
                            </option>
                            <option>Roosevelt</option>
                            <option>Balintawak</option>
                            <option>Monumento</option>
                            <option>5th Avenue</option>
                            <option>R.Papa</option>
                            <option>Abad Santos</option>
                            <option>Bluementritt</option>
                            <option>Tayuman</option>
                            <option>Bambang</option>
                            <option>Doroteo Jose</option>
                            <option>Carriedo</option>
                            <option>Central Terminal</option>
                            <option>UN Avenue</option>
                            <option>Pedro Gil</option>
                            <option>Quirino</option>
                            <option>Vito Cruz</option>
                            <option>Gil Puyat</option>
                            <option>Libertad</option>
                            <option>EDSA</option>
                            <option>Baclaran</option>

                    </select>
                    {errors.end ? (
                        <span>{errors.end?.type==="required"&&"This field is required."}</span>
                    ):(' ')}

                    <input type="text" {...register("bike",{required:true,maxLength:10})} placeholder='Bike ID'/>
                    {errors.bike ? (
                        <span>
                            {errors.bike?.type==="required"&&"This field is required."}
                            {errors.bike?.type==="maxLength"&&"Max Length Exceed"}
                        </span>
                    ):(' ')}

                    <Multiselect {...register("Gears")} options={options} displayValue="Gears" placeholder='---Select Gears---'/>
   

                    <button className='btn' id="myBtn" onClick={() => {
                        setStartScan(!startScan);
                    }}>Scan QR Code</button>
                </div>
                <div className="col-2">
                    <img src={bgimg} alt="" />

                </div>
            </div>





            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p id="qr-message">Make sure the QR code is within the frame</p>
                    {startScan && (

                        <>
                            <QrReader
                                facingMode={selected}
                                delay={100}
                                onError={handleError}
                                onScan={handleScan}
                                style={{ width: "300px" }}
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

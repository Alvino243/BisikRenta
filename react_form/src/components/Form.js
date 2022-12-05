import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import bgimg from '../assets/bg1.jpg';
import{useForm} from 'react-hook-form';

export default function Form(){

    const{register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = data => console.log(data);
    const data = [
        {Gears: 'Helmet', id:1},
        {Gears: 'Knee pad', id:2},
        {Gears: 'Elbow pad', id:3},
        {Gears: 'Reflector/light', id:4},
        {Gears: 'Gloves', id:5},
        {Gears: 'Bike kit', id:6}
    ]
    //console.log(watch("username"));
    const [options] = useState(data);

    return(
        <section>
          <div className="register">
            <div className="col-1">
                <h2>Welcome to BisikRenta</h2>
                <span style={{color:'grey',fontSize:'15px'}}>register and rent bikes here.</span>

                <form id="form" className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("firstname",{required:true,pattern:/^[A-Za-z\s]*$/,minLength:2})} placeholder='First name*'/>
                       {errors.firstname ? (
                            <span>
                                {errors.firstname?.type==="required"&&"This field is required."}
                                {errors.firstname?.type==="minLength"&&"First Name should be 2 or more letters."}
                                {errors.firstname?.type==="pattern"&&"Invalid Input!."}
                            </span>
                        ):(' ')}
                            
                           

                    <input type="text" {...register("lastname",{required:true,pattern:/^[A-Za-z\s]*$/,minLength:2})} placeholder='Last name*'/>
                    {errors.lastname ? (
                        <span>
                            {errors.lastname?.type==="required"&&"This field is required."}
                            {errors.lastname?.type==="minLength"&&"Last Name should be 2 or more letters."}
                            {errors.lastname?.type==="pattern"&&"Invalid Input!."}
                        </span>
                    ):(' ')}

                    <input type="text" {...register("address",{required:true,pattern:/^[^\s]+/})} placeholder='Address*'/>
                    {errors.address ? (
                        <span>
                            {errors.address?.type==="required"&&"This field is required."}
                            {errors.address?.type==="pattern"&&"Invalid Input!"}
                        </span>
                    ):(' ')}


                    <input type="number" {...register("mobile",{required:true,pattern:/^([+]\d{2})?\d{11}$/})} placeholder='(+63) Mobile number*'/>

                    {errors.mobile ? (
                        <span>
                            {errors.mobile?.type==="required"&&"This field is required."}
                            {errors.mobile?.type==="maxLength"&&"Invalid number; must be ten digits"}
                            {errors.mobile?.type==="pattern"&&"Please enter valid mobile number."}
                        </span>
                    ):(' ')}
                    <select {...register("start",{required:true})} >
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
                        <span>{errors.start?.type==="required"&&"This field is required."}</span>
                    ):(' ')}
             
                    <select {...register("end",{required:true})} >
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

                    <Multiselect options={options} displayValue="Gears" placeholder='---Select Gears---'/>
                    

                    <button className='btn'>Sign In</button>
                </form>
            </div>
            <div className="col-2">
                <img src={bgimg} alt=""/>

            </div>
           </div>  
        </section>
    )
}

import React from 'react'

//useForm Hook
import { useForm } from "react-hook-form"

//import Component
import InputField from './InputField'

//import lucidicon
import { Mail,Phone,MapPin,UserRound,Briefcase,ChartScatter,UserStar  } from 'lucide-react';

function Form() {

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
        mode: "onChange",
        defaultValues: {
            serviceName: "",
            serviceType: "",
            contactPerson: "",
            email: "",
            phone: "",
            location: "",
            status: "",
            rating: "",
            lastUsed: "",
        }
    });

    // watches live changes
    const serviceName = watch("service_name_field");
    const serviceType = watch("service_type_field");
    const contactPerson = watch("contact_person_field");
    const email = watch("email_field");
    const phone = watch("phone_field");
    const location = watch("location_field");
    const status = watch("status_field");
    const rating = watch("rating_field")
    const lastUsed = watch("lastUsed_field");

    // console.log("serviceName==",serviceName)
    // console.log("serviceType==",serviceType)
    // console.log("contactPerson==",contactPerson)
    // console.log("email==",email)
    // console.log("phone==",phone)
    // console.log("location==",location)
    // console.log("status==",status)
    // console.log("rating==",rating)
    // console.log("lastUsed==",lastUsed)
    

    const onSubmit= (data) =>{
        console.log("hi");
    }

    return (
        <>
            <form className='max-h-max sm:w-4/5  sm:m-auto border border-red-600 sm:h-[650px] sm:overflow-y-auto sm:overflow-hidden  lg:w-96 h-[500px] '
                onSubmit={
                    handleSubmit(onSubmit)
                }
            >
                <p className='text-2xl font-semibold ml-2 tracking-wider sm:text-3xl sm:text-center md:text-4xl lg:text-2xl '>Add Vendor Details</p>
                <div className='flex flex-col p-1 relative sm:mt-7 '>
                    <InputField
                        type="text"
                        name="service_name"
                        placeholder="Xyz Pvt Ltd."
                        {...register("service_name_field", {
                            required: "Service Name is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,//
                                message: "Enter valid Service Name",
                            },
                        })}

                    icon={<Briefcase  />}
                    />
                    {
                        errors?.service_name_field && <span className='text-white text-sm w-full absolute -bottom-5 sm:text-base md:text-lg lg:text-sm'>{errors?.service_name_field?.message}</span>
                    }
                </div>

                <div className='flex mt-5 flex-col p-1 relative sm:mt-7'>
                    <InputField
                        type="text"
                        name="service_type"
                        placeholder="Service Name"
                        {...register("service_type_field", {
                            required: "Service Type is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,//
                                message: "Enter valid Service Type",
                            },
                        })}

                        // icon={}
                    />
                    {
                        errors?.service_type_field && <span className='text-white text-sm w-full absolute -bottom-5 sm:text-base md:text-lg lg:text-sm'>{errors?.service_type_field?.message}</span>
                    }
                </div>

                <div className=' mt-5 flex flex-col p-1 relative sm:mt-7 '>
                    <InputField
                        type="text"
                        name="contact_person"
                        placeholder="Deva Hole"
                        {...register("contact_person_field", {
                            required: "contact person name is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,//
                                message: "Enter valid contact person name",
                            },
                        })}

                        icon={<UserRound />}
                    />
                    {
                        errors?.contact_person_field && <span className='text-white text-sm w-full absolute -bottom-5 sm:text-base md:text-lg lg:text-sm'>{errors?.contact_person_field?.message}</span>
                    }
                </div>

                <div className='flex flex-col mt-5 p-1 relative  sm:mt-7'>
                    <InputField
                        type="email"
                        name="email_field"
                        placeholder="user@example.com"
                        {...register("email_field", {
                            required: "Email is Required ",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid email",
                            },
                        })}

                        icon={<Mail />}
                    />
                    {
                        errors?.email_field && <span className='text-white text-sm w-full absolute -bottom-5 sm:text-base md:text-lg lg:text-sm'>{errors?.email_field?.message}</span>
                    }
                </div>

                <div className='flex flex-col p-1 relative mt-9 sm:mt-7 '>
                    
                    <InputField
                        type="number"
                        name="phone_field"
                        placeholder="Enter Phone Number"
                        {...register("phone_field", {
                            required: "Phone Number is Required ",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid phone number",
                            },
                        })}

                        icon={<Phone  />}
                    />
                    {
                        errors?.phone_field && <span className='text-white text-sm w-full absolute -bottom-5 sm:text-base sm:-bottom-5 md:text-lg md:-bottom-6 lg:-bottom-5 lg:text-sm '>{errors?.phone_field?.message}</span>
                    }
                </div>

                <div className='flex flex-col p-1 relative mt-9 sm:mt-7 '>
                    
                    <InputField
                        type="text"
                        name="location"
                        placeholder="Enter Location"
                        {...register("location_field", {
                            required: "Location is Required ",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid location",
                            },
                        })}

                        icon={<MapPin />}
                    />
                    {
                        errors?.location_field && <span className='text-white text-sm w-full absolute -bottom-5 sm:text-base sm:-bottom-5 md:text-lg md:-bottom-6 lg:-bottom-5 lg:text-sm '>{errors?.location_field?.message}</span>
                    }
                </div>

                <div className='flex flex-col p-1 relative mt-9 sm:mt-7 '>
                    
                    <InputField
                        type="text"
                        name="status"
                        placeholder="Enter Status"
                        {...register("status_field", {
                            required: "Status is Required ",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid Status",
                            },
                        })}

                        icon={<ChartScatter  />}
                    />
                    {
                        errors?.status_field && <span className='text-white text-sm w-full absolute -bottom-5 sm:text-base sm:-bottom-5 md:text-lg md:-bottom-7 lg:-bottom-5 lg:text-sm '>{errors?.status_field?.message}</span>
                    }
                </div>

                <div className='flex flex-col p-1 relative mt-9 sm:mt-7 '>
                    
                    <InputField
                        type="number"
                        name="rating"
                        placeholder="Enter Rating"
                        {...register("rating_field", {
                            required: "Rating is Required ",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid Rating",
                            },
                        })}

                        icon={<UserStar  />}
                    />
                    {
                        errors?.rating_field && <span className='text-white text-sm w-full absolute -bottom-5 sm:text-base sm:-bottom-5 md:text-lg md:-bottom-6 lg:-bottom-5 lg:text-sm '>{errors?.rating_field?.message}</span>
                    }
                </div>


                <div className='flex flex-col p-1 relative mt-9 sm:mt-7 '>
                    
                    <InputField
                        type="text"
                        name="lastused"
                        placeholder="Enter last Used"
                        {...register("lastUsed_field", {
                            required: "Last Used is Required ",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid Last Used",
                            },
                        })}

                        // icon={<Mail />}
                    />
                    {
                        errors?.lastUsed_field && <span className='text-white text-sm w-full absolute -bottom-5 sm:text-base sm:-bottom-5 md:text-lg md:-bottom-6 lg:-bottom-5 lg:text-sm '>{errors?.lastUsed_field?.message}</span>
                    }
                </div>

                
            </form>
        </>
    )
}

export default Form
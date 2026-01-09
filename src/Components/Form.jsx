import React from 'react';
import { useForm } from "react-hook-form";

// Components
import InputField from './InputField';
import Label from './Label';
import Button from './Button';

// Icons
import { Mail, Phone, MapPin, UserRound, Briefcase, ChartScatter, UserStar } from 'lucide-react';

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm({
        mode: "onChange",
        defaultValues: {
            service_name_field: "",
            service_type_field: "",
            contact_person_field: "",
            email_field: "",
            phone_field: "",
            location_field: "",
            status_field: "",
            rating_field: "",
            lastUsed_field: "",
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const formFields = [
        { label: "Service Name", name: "service_name_field", placeholder: "Xyz Pvt Ltd.", type: "text", icon: <Briefcase />, pattern: /^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*$/ },
        { label: "Service Type", name: "service_type_field", placeholder: "Enter Service Type", type: "text", pattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/ },
        { label: "Contact Person", name: "contact_person_field", placeholder: "Deva Hole", type: "text", icon: <UserRound />, pattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/ },
        { label: "Email", name: "email_field", placeholder: "user@example.com", type: "email", icon: <Mail />, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/ },
        { label: "Phone Number", name: "phone_field", placeholder: "Enter Phone Number", type: "number", icon: <Phone />, pattern: /^\+?[1-9]\d{9,14}$/ },
        { label: "Location", name: "location_field", placeholder: "Enter Location", type: "text", icon: <MapPin />, pattern: /^[A-Za-z]+(?:[ ,][A-Za-z]+)*$/ },
        { label: "Status", name: "status_field", placeholder: "Enter Status", type: "text", icon: <ChartScatter />, pattern: /^(Active|Inactive)$/ },
        { label: "Rating", name: "rating_field", placeholder: "Enter Rating", type: "number", icon: <UserStar />, pattern: /^[1-5]$/ },
        { label: "Last Used", name: "lastUsed_field", placeholder: "YYYY-MM-DD", type: "text", pattern: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/ },
    ];

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-5
                max-w-lg sm:max-w-lg lg:max-w-xl
                w-full mx-auto p-4
                flex flex-col gap-6
                overflow-y-auto
                bg-white/10 backdrop-blur-md
                rounded-xl shadow-md
            "
        >
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
                Add Vendor Details
            </p>
            {formFields.map((field, index) => {
                const { label, name, placeholder, type, icon, pattern } = field;
                return <div key={index} className="flex flex-col relative">
                    <Label title={label} />
                    <InputField
                        type={type}
                        placeholder={placeholder}
                        icon={icon}
                        {...register(name, {
                            required: `${label} is required`,
                            pattern: {
                                value: pattern,
                                message: `Enter valid ${label}`
                            }
                        })}
                    />
                    {errors?.[name] && (
                        <span className="text-red-400 text-sm mt-1 block sm:text-base md:text-lg lg:text-sm">
                            {errors[name].message}
                        </span>
                    )}
                </div>
            })}

            <Button
                name="Add Vendor"
                type="submit"
                disabled={!isValid}
                className="!w-full !px-4 !py-2 !rounded-lg !mt-2"
            />
        </form>
    );
}

export default Form;

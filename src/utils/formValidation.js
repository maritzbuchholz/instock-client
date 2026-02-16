const emptyFieldError = (e, errors, newErrors) => {
    const eventElements = e.currentTarget.querySelectorAll("input");

    for (let i = 0; i < eventElements.length; i++) {
        const inputField = eventElements[i];
        if (!inputField.value && errors[inputField.name] !== undefined) {
                newErrors = {...newErrors, [inputField.name]: "empty"};
        };
    };
    return newErrors;
};

const validateEmail = (e, errors, newErrors) => {
    const emailAddress = e.currentTarget.querySelector("#email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailAddress) && errors["email"] !== undefined) {
        newErrors = {...newErrors, "email": "email"};
    } else if (emailPattern.test(emailAddress) && errors["email"] === "email") {
        newErrors = {...newErrors, "email": ""};
    };
    return newErrors;
};

export const submitChecker = (e, errors, setError) => {
    let newErrors = {...errors};
    newErrors = emptyFieldError(e, errors, newErrors);
    newErrors = validateEmail(e, errors, newErrors);
    setError(newErrors);
};

export const removeEmptyError = (e, errors, setError) => {
    let newErrors = {...errors};
    if (inputField.value === "empty" && errors[inputField.name] !== undefined) {
            newErrors = {...newErrors, [inputField.name]: ""};
        };
        
    setError(newErrors);
};



export const errorType = (errorState) => {
    if(!errorState){
        return
    }
    if(errorState === "empty"){
        return "This field is required";
    }
    if(errorState === "email"){
        return "Please provide a valid email";
    }
};
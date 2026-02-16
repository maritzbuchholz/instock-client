export const emptyFieldError = (e, errors, setError) => {
    const eventElements = e.currentTarget.querySelectorAll("input");
    let newErrors = {...errors};

    for (let i = 0; i < eventElements.length; i++) {
        const inputField = eventElements[i];
        if (!inputField.value && errors[inputField.name] !== undefined) {
                newErrors = {...newErrors, [inputField.name]: "empty"};
        };
    };

    setError(newErrors);
};

export const removeEmptyError = (e, errors, setError) => {
    let newErrors = {...errors};
    if (inputField.value === "empty" && errors[inputField.name] !== undefined) {
            newErrors = {...newErrors, [inputField.name]: ""};
        };
        
    setError(newErrors);
};

export const validateEmail = (e, errors, setError) => {
    console.log(e.currentTarget);
    const emailAddress = e.currentTarget.querySelector("#email").value;
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let newErrors = {...errors};

    if (!emailPattern.test(emailAddress) && errors["email"] !== undefined) {
        newErrors = {...newErrors, "email": "email"};
    } else if (emailPattern.test(emailAddress) && errors["email"] === "email") {
        newErrors = {...newErrors, "email": ""};
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
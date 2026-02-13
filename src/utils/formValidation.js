export const emptyFieldError = (e, errors, setError) => {
    const eventElements = e.currentTarget.querySelectorAll("input")
    console.log(eventElements);
    let newErrors = {...errors};

    for (let i = 0; i < eventElements.length; i++) {
        const inputField = eventElements[i];
        if (!inputField.value && errors[inputField.name] !== undefined) {
                newErrors = {...newErrors, [inputField.name]: "empty"}
        } else if (inputField.value && errors[inputField.name] !== undefined)
                newErrors = {...newErrors, [inputField.name]: ""}
        };

    setError(newErrors);
};
    


export const errorType = (errorState) => {
    if(!errorState){
        return
    }
    if(errorState){
        return "This field is required";
    }
};
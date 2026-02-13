export const fieldFilled = (array, arraySize) => {
    for (let i = 0; i < arraySize; i++) {
        if (!array[i].value){
            array[i]
        };
    };
};

export const errorType = (errorState) => {
    if(!errorState){
        return
    }
    if(errorState){
        return "This field is required";
    }
};
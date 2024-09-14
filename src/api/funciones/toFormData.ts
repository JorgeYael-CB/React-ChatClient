


export const toFormData = ( data: {[key:string]: any} ):FormData => {
    const form = new FormData();

    for( let key in data ){ // iteramos sobre las llaves del objeto
        if( data.hasOwnProperty(key) ){
            form.append(key, data[key]); // llave y valor
        }
    }

    return form;
}


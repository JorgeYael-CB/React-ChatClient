
export const getErrorsValidations = ( error?: string, errors?: { [key:string]: string[] } ): string[] => {
    if( error ){
        return [error];
    }

    if( !errors ){
        return ['Unexpected error, please try again later'];
    }

    let errorsString: string[] = [];

    for( let error in errors ){
        const arrayErrors: string[] = errors[error];
        const messages: string[] = arrayErrors.map( d => `${error}: ${d}` );
        errorsString.concat( messages );
    }


    return errorsString;
}

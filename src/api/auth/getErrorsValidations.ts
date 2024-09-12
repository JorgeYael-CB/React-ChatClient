
export const getErrorsValidations = ( errors: { [key:string]: string[] } ): string[] => {
    let errorsString: string[] = [];

    for( let error in errors ){
        const arrayErrors: string[] = errors[error];
        const messages: string[] = arrayErrors.map( d => `${error}: ${d}` );
        errorsString.concat( messages );
    }


    return errorsString;
}

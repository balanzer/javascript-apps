export const dateStringToDate = (dateString: string): Date => {
    //parse dates like 31/10/2024
    const dateParts = dateString.split("/").map((value: string): number => {
        return parseInt(value);
    })

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
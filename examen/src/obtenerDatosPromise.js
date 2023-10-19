
export const obtenerDatosPromise = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: 'datos importantes' });
        },2000);
    });
}
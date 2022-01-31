let is_ok = true;

const customFetch = (time, result) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            resolve(result);
        } else {
            reject("error");
        }
    });
}
export default customFetch;
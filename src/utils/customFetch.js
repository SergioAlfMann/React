let is_ok = true;

const customFetch = (time, result) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(result);
            } else {
                reject("error");
            }
        }, time);
    });
}
export default customFetch;
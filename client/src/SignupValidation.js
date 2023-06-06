function Validation(values) {
    let error = {}
    const email_patern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_patern = /^[a-zA-Z0-9]{8,}$/

    if (values.name === "") {
        error.name = "Empty"
    } else {
        error.name = ""
    }

    if (values.email === "") {
        error.email = "Empty"
    } else if (!email_patern.test(values.email)){
        error.email = "Email didn't match"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Empty"
    } else if (!password_patern.test(values.password)) {
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }
    return error;
}
export default Validation;
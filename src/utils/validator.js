const studentPass = pass => {
    const reqPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
    return reqPass.test(pass)
}
const studentEmail = studentEmail =>{
    const reqEmail = /^\S+@\S+\.\S+$/
    return reqEmail.test(studentEmail)
}
export {studentPass,studentEmail}
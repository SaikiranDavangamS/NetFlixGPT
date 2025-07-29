export const ValidateData = (email,password) => {
    const isEmailValidated = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValidated = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isEmailValidated){
        return "Email is not valid"
    }
    if(!isPasswordValidated){
        return "Password is not valid"
    }

    return null;

}
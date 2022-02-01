import validator from "validator"

export default class EmailValidation {
    validate(email: string): boolean {
        return validator.isEmail(email)
    }
}
/*
Header Comments:
Name: Jaden Parris, Nathaniel Mais
Student ID: 100774161 and <100843860>
Date of completion: Febuary 24th, 2024
*/

"use strict";
(function (core){


    class Contact {
        constructor(fullName = "", contactNumber = "", emailAddress = "") {
            this._fullName = fullName;
            this._contactNumber = contactNumber;
            this._emailAddress = emailAddress;
        }

        get fullName() {
            return this._fullName;
        }

        set fullName(value) {
            this._fullName = value;
        }

        get contactNumber() {
            return this._contactNumber;
        }

        set contactNumber(value) {
            this._contactNumber = value;
        }

        get emailAddress() {
            return this._emailAddress;
        }

        set emailAddress(value) {
            this._emailAddress = value;
        }

        toString() {
            return `FullName: ${this._fullName}\nContactNumber: ${this._contactNumber}\nEmailAddress: ${this._emailAddress}`;
        }

        serialize() {
            if (this._fullName !== "" && this._contactNumber !== "" && this._emailAddress !== "") {
                return `${this._fullName}, ${this._contactNumber}, ${this._emailAddress}`;
            }
            console.error("One or more of the contact properties are missing or invalid");
            return null;
        }

        deserialize(data) {
            let propertyArray = data.split(",");

            this._fullName = propertyArray[0];
            this._contactNumber = propertyArray[1];
            this._emailAddress = propertyArray[2];
        }
    }

    core.Contact = Contact;
})(core || (core ={}));


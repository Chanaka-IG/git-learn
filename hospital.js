class Person {
    constructor (name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class Doctor extends Person {
    constructor (name,age,gender,specoalization){
        super(name,age,gender)
        this.appointmentTime = [];
        this.specoalization = specoalization;
    }

    addAppointmentTime(time){
        this.appointmentTime.push (time);
    }
}

class Patient extends Person {
    constructor (name,age,gender){
        super (name,age,gender)
        this.medicalHistory = [];
    }
    addMedicalRecord(record){
        this.medicalHistory.push(record);
    }
}

class Appointments {
    constructor (doctor,patient,date,time,reason){
        this.doctor = doctor;
        this.patient = patient;
        this.date = date;
        this.time = time;
        this.reason = reason;
    }
    getSummary(){
        return `Appointment Summary:
        Doctor: ${this.doctor.name}
        Patient: ${this.patient.name}
        Date: ${this.date}
        Time: ${this.time}
        Reason: ${this.reason}`;
    }
}
class Hospital {
    constructor (name) {
        this.name = name;
        this.doctors = [];
        this.patients = [];
        this.appointmentTimes = [];
    }
    registerDoctor(doctor) {
        // code to register a doctor
    }   
    registerPatient(patient) {
        // code to register a patient
    }
    scheduleAppointment(doctor, patient, date, time, reason) {
        // code to schedule an appointment
    }
    getAppointmentByDoctor(doctorName) {

    }

}

const doc1 = new Doctor ("Dr. Smith","45","Male");
const pat1 = new Patient ("John Doe","30","Male");




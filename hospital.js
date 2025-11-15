class Person {
    constructor (name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class Doctor extends Person {
    constructor (name,age,gender,time,specialize){
        super(name,age,gender)
        this.appointmentTime = [];
        this.specialize = specialize;
    }

    addAppointmentTime(appointemt){
        this.appointmentTime.push (appointemt);
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
        this.appointments = [];
    }
    registerDoctor(doctor) {
        this.doctors.push(doctor);
    }   
    registerPatient(patient) {
        this.patients.push(patient);
    }
    scheduleAppointment(doctor, patient, date, time, reason) {
        const doc = this.doctors.find(d => d.name === doctor);
        const pat = this.patients.find(p => p.name === patient);
         if (!doc) {
            console.log(`Doctor ${doctor} not found.`);
            return;
        }
        if (!pat) {
            console.log(`Patient ${patient} not found.`);
            return;
         }
         const appointment  = new Appointments(doc,pat,date,time,reason)
         doc.addAppointmentTime(appointment);

        this.appointments.push(appointment);

        return appointment;
    
        }
    getAppointmentByDoctor(doctorName) {
        const docn = this.doctors.find (d => d.name === doctorName);
        if (!docn){
            console.log (`Doctor ${doctorName} not found.`);
            return;
        }
        return docn.appointmentTime;
    }

}

const hospital = new Hospital ("City Hospital");

const doc1 = new Doctor ("Dr. Smith","45","Male");
const doc2 = new Doctor ("Dr. Jane","38","Female");
const pat1 = new Patient ("John Doe","30","Male");
pat1.addMedicalRecord("Diagnosed with mild asthma");

hospital.registerDoctor (doc1);
hospital.registerDoctor (doc2);
hospital.registerPatient (pat1);

const app1 = hospital.scheduleAppointment ("Dr. Smith","John Doe","2023-10-15","10:00 AM","Regular Checkup");


console.log(app1.getSummary());
console.log("\nDoctor Smith's Appointments:");
console.log(hospital.getAppointmentByDoctor("Dr. Smith"));




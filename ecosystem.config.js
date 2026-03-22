module.exports = {
  apps : [
      {
        name   : "patient-service",
        script : "java -jar ./patient-service/target/Patient-Service-0.0.1-SNAPSHOT.jar",
        log_file: "./logs/patient-service.log",
        instances: 2,
      },
      {
        name   : "doctor-service",
        script : "java -jar ./doctor-service/target/doctor-service-0.0.1-SNAPSHOT.jar",
        log_file: "./logs/doctor-service.log",
        instances: 2,
      },
      {
        name   : "appointment-service",
        script : "java -jar ./appointment-service/target/appointment-service-0.0.1-SNAPSHOT.jar",
        log_file: "./logs/appointment-service.log",
        instances: 2,
      }
  ]
}

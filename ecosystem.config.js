module.exports = {
  apps : [
      // {
      //     name: "cloud-sql-auth-proxy",
      //     script: "./cloud-sql-proxy mediplus-project-491116:asia-southeast1:mysql-vm mediplus-project-491116:asia-southeast1:postgres-vm --private-ip",
      //     log_file: "./logs/cloud-sql-proxy.log",
      // },
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

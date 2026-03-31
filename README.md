# 🏥 Medi-Plus Services

---

The **Medi-Plus Services** repository contains the core domain microservices of the MediPlus system.  
It includes **Patient-Service**, **Doctor-Service**, and **Appointment-Service**, organized as Git submodules.

These services handle the business logic of the system and communicate with each other through REST APIs, while being managed centrally via the API Gateway and Service Registry.

---

## 👤 Student Information

- **Student Name:** Charith Mihiranga Siriwardana
- **Student Number:** 2301691075
- **Slack:** https://ijse-eca-hdse-69-70.slack.com/team/U0AHD5TQ4H5
- **GCP Project ID:** ts-2130-eca-gdse-491417

---

## 📖 About

This repository represents the **domain layer** of the MediPlus microservices architecture.  
Each service is designed following microservice principles such as **loose coupling**, **independent deployment**, and **single responsibility**.

- **Patient-Service** manages patient records and profile images
- **Doctor-Service** manages doctor details and specialization
- **Appointment-Service** handles appointment booking and integrates with other services

All services are integrated through:
- API Gateway (centralized routing)
- Service Registry (dynamic service discovery)
- Config Server (centralized configuration)

The use of **Git submodules** ensures modularity and easy management of each service independently.

---

## 🧩 Included Services

| Service              | Description                                      |
|---------------------|--------------------------------------------------|
| Patient-Service     | Manages patient records and profile pictures     |
| Doctor-Service      | Handles doctor information and specialization    |
| Appointment-Service | Manages appointment booking and scheduling       |

---

## 📁 Repository Structure

```bash
medi-plus-services/
├── patient-service/        # Patient microservice (submodule)
├── doctor-service/         # Doctor microservice (submodule)
├── appointment-service/    # Appointment microservice (submodule)
├── ecosystem.config.js 
├── pom.xml
└── README.md
```

---

## 🔗 Git Submodules

This repository uses **Git submodules** to manage individual microservices.

### Clone with submodules

```bash
git clone --recurse-submodules <your-repo-url>
```

### Initialize submodules (if already cloned)

```bash
git submodule update --init --recursive
```

---

## ⚙️ Service Overview

### 👤 Patient-Service
- Manages patient details and profile pictures
- Uses PostgreSQL for data persistence
- Supports file uploads (multipart/form-data)

### 🩺 Doctor-Service
- Manages doctor information and specialization
- Uses MongoDB for flexible data storage
- Enforces validation rules for doctor IDs

### 📅 Appointment-Service
- Handles appointment booking and scheduling
- Integrates with Patient-Service for enriched data
- Uses MySQL for relational data management

---

## 🚀 Getting Started

### 🔄 Startup Order

1. Config-Server
2. Service-Registry
3. API Gateway
4. Patient-Service
5. Doctor-Service
6. Appointment-Service

---

### ▶️ Run Each Service

Navigate into each service directory and run:

```bash
./mvnw spring-boot:run
```

---

## 🔗 Related Repositories

- Medi-Plus Platform (Config-Server, Service-Registry, API Gateway)
- Medi-Plus WebApp (Frontend application)

---

## 🚀 Overview

This repository provides the **core business services** of the MediPlus system, enabling a scalable, maintainable, and modular microservices architecture.

---
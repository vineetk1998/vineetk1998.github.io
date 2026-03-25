# Vineet Kumar
**Senior Software Engineer | Technical Leader | System Architect**

[LinkedIn: vineetkch](https://www.linkedin.com/in/vineetkch) | [GitHub: vineetk1998](https://github.com/vineetk1998)  
vinetchoudhary@gmail.com | +91 90019-36749

## Professional Summary
Results-driven software architect with 6+ years of experience designing and implementing scalable, high-performing distributed systems that solve complex business challenges. Led cross-functional engineering initiatives that scaled a vendor booking platform to 50,000+ monthly transactions with under 1% booking failures. Skilled in architecting service-based systems, implementing end-to-end observability, optimizing performance, and mentoring engineering teams while establishing best practices across organizations.

---

## Technical Skills
**Languages & Frameworks:** JavaScript/TypeScript, Node.js, Python, React.js, Express.js, Django, LangChain, LangGraph<br>
**Infrastructure & Cloud:** AWS (EC2, Lambda, S3, EKS, Bedrock, Polly, CloudWatch), Docker, Kubernetes, CI/CD (GitHub Actions)<br>
**Databases & Messaging:** MongoDB, PostgreSQL, Redis, Elasticsearch, BullMQ, Druid<br>
**Monitoring & Observability:** Elastic APM, Prometheus, Grafana, Kibana<br>
**Architecture & Patterns:** Service-Oriented Architecture, Event-Driven Architecture, Serverless Architecture, Distributed Systems, RESTful APIs

---

## Professional Experience

### myHQ

#### Senior Software Engineer <span style="float:right; font-weight:normal; font-style:italic">Apr 2022 – Jul 2025</span>

*Technical Leadership & System Architecture*
* Architected a factory-adapter-facade platform across 20+ vendor REST APIs with circuit breakers, retries, and automated outage detection—eliminating manual vendor management, enabling real-time inventory, and scaling to 50,000+ monthly transactions with under 1% booking failures.
* Built a config-driven, command-pattern health check service with pluggable modules—out-of-box periodicity, alerting, and dashboard—supporting API availability checks and conditional database query assertions across all internal and external services.
* Designed inventory systems for day passes (day-level) and meeting rooms (per-minute), mirroring vendor data for efficient paginated count queries, introduced geo-polygon locality search, integrated payment gateway end-to-end, and optimised high-volume operational listings—cutting listing p95 from 6s to under 600ms.
* Built a plug-and-play maker-checker platform using facade-command-factory patterns, where new operations onboard via a single interface—supporting 5+ types with role-based approval gates, pre-execution state validation, and an approval and audit dashboard—replacing email-based vendor management and processing 100s of monthly operations.

*Infrastructure & DevOps Excellence*
* Built GitHub Actions CI/CD pipelines across all application and infrastructure services with rolling deployments, health checks, and automated rollback—reducing deployment downtime from 2–3 incidents/week to near-zero.
* Instrumented Elastic APM with custom DB and cache spans and distributed tracing across vendor, external, and internal services, built Kibana dashboards, and optimized CloudWatch field indexing—surfacing failures and latency patterns, cutting log costs by 80%, and driving p95 under 1s.
* As sole DevOps engineer, deployed and maintained MongoDB (sharding, replica sets, PITR), Elasticsearch, Redis, and BullMQ with automated backup/restore testing—surviving production failovers with zero data loss.

*Security & Compliance Systems*
* Hardened security posture by enforcing CASL least-privilege at the repository layer, TLS across all inter-service communication, RBAC policies, and AWS Secrets Manager—addressing 90% of identified vulnerability surface.
* Established org-wide compliance foundations, enforcing PII-safe logging standards via ESLint across all services, building an automated PII redaction pipeline over all log files, and implementing IAM-gated access to sensitive logs—reducing PII data exposure by 95%.

*Engineering Culture & Mentorship*
* Influenced engineering practices across teams by introducing standardized design reviews, CI enforcement, and observability patterns—improving consistency and reducing defects by 25%.
* Mentored engineers on system design, tradeoffs, and failure modes, enabling independent ownership of critical services and 3 promotions to senior roles.
* Codified incident learnings into automated safeguards (runbooks, alerts, failure pattern detection), reducing repeat production issues.

---

### Cuebook

#### Lead Software Engineer <span style="float:right; font-weight:normal; font-style:italic">Apr 2021 – Mar 2022</span>
* Led a 4-person engineering team for the open-source release of CueObserve, a time-series anomaly detection product for SQL databases, achieving 200+ GitHub stars.
* Designed and implemented a robust cloud engineering system for automated scaling, improving maintainability by 2 grades and reducing operational overhead by 40%.
* Built CI/CD pipelines with GitHub Actions, increasing automated test coverage by 60% and reducing deployment time by 50%.
* Contributed to Spark based ELT pipelines over Apache Iceberg, enabling scalable lakehouse ingestion and transformation of 10M+ records/day via Zeppelin driven workflows.

#### Founding Software Engineer <span style="float:right; font-weight:normal; font-style:italic">Nov 2019 – Mar 2021</span>
* Designed innovative data query language (CueL) using multiple interdependent DAGs, reducing query complexity by 70% for end users.
* Architected a parallel anomaly detection service using AWS Lambda across 100M+ factor combinations, achieving 95% accuracy in automated root cause analysis.
* Implemented ElasticSearch & ranking algorithm based on user interaction patterns, metric importance, and configuration, improving search relevance by 80%.
* Developed K-Means Clustering-based AI Segmentation for automated smart analysis, reducing manual analysis time by 60%.

---

### Alpha Tech StartUp

#### Founder <span style="float:right; font-weight:normal; font-style:italic">May 2019 – Oct 2019</span>
* Led end-to-end product development of a SaaS ERP for educational institutions, onboarding 2 institutions and 1,000+ students in 6 months.
* Designed 7+ integrated scalable modules using ReactJS with Redux and Firebase, enabling real-time data sync.
* Managed complete product lifecycle using Agile, delivering MVP 20% ahead of schedule.

---

## Education
**National Institute of Technology, Patna**  
Bachelor of Technology (B.Tech), Information Technology  
*2015 – 2019*

---

## Projects & Open Source
**AI Sales Training Platform** *(myHQ Hackathon)* <span style="float:right; font-weight:normal; font-style:italic">2025</span>
* Led a team of 6, covering SOP ingestion, AWS Bedrock-driven course and quiz generation, a LangGraph-managed 4-stage buyer simulation (Discovery, Proposal, Objection Handling, Closing) driven by structured system prompts, and AWS Polly voice output.
* Architected the production roadmap: LangChain RAG for scalable retrieval, a local XGBoost model with SHAP-derived feature importances injected as structured prompt context for company-specific conversion signals, and optional fine-tuning for end-user model personalisation.

**CueObserve - Time-series Anomaly Detection** <span style="float:right; font-weight:normal; font-style:italic">2021</span>
* Led development of an open-source anomaly detection tool for SQL data warehouses.
* Implemented statistical models for outlier detection and root cause analysis.
* [GitHub Repository](https://github.com/cuebook/CueObserve)

**Food Safety Blockchain** <span style="float:right; font-weight:normal; font-style:italic">2019</span>
* Developed blockchain solution in Python to track food across supply chain stages.
* Implemented Flask API for third-party application integration.
* [GitHub Repository](https://github.com/vineetk1998/foodchain)

---

## Awards & Achievements
* Technical Excellence Award at myHQ for implementing system health check service (2023)
* [Published paper in ICACC](https://www.researchgate.net/publication/344001218_Ensuring_Food_Safety_Through_Blockchain) (2019)
* Idea accepted in National Innovation Foundation (2013)

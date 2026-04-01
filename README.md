# Vineet Kumar
**Senior Software Engineer | Technical Leader | System Architect**

[LinkedIn: vineetkch](https://www.linkedin.com/in/vineetkch) | [GitHub: vineetk1998](https://github.com/vineetk1998)  
vinetchoudhary@gmail.com | +91 90019-36749

## Professional Summary
Results-driven software architect with 6+ years of experience designing and implementing scalable, high-performing distributed systems that solve complex business challenges. Led cross-functional engineering initiatives that scaled a vendor booking platform to 50,000+ monthly transactions with under 1% booking failures. Skilled in architecting service-based systems, implementing end-to-end observability, optimizing performance, and mentoring engineering teams while establishing best practices across organizations.

---

## Technical Skills
**Languages & Frameworks:** Python, JavaScript/TypeScript, Node.js, React.js, Express.js, Django, LangChain, LangGraph<br>
**Infrastructure & Cloud:** AWS (EC2, Lambda, S3, EKS, Bedrock, Polly, CloudWatch), Docker, Kubernetes, CI/CD (GitHub Actions)<br>
**Databases & Messaging:** MongoDB, PostgreSQL, Redis, Elasticsearch, BullMQ, Druid<br>
**Monitoring & Observability:** Elastic APM, Prometheus, Grafana, Kibana<br>
**Architecture & Patterns:** Service-Oriented Architecture, Event-Driven Architecture, Serverless Architecture, Distributed Systems, RESTful APIs

---

## Professional Experience

### myHQ

#### Senior Software Engineer <span style="float:right; font-weight:normal; font-style:italic">Apr 2022 – Jul 2025</span>

*Technical Leadership & System Architecture*
* Owned vendor integration architecture across 20+ partner APIs, standardizing resilience and onboarding for a fragmented partner ecosystem. Chose a common adapter layer over one off integrations to improve maintainability and operational consistency. Cut onboarding time by 85%, reduced integration defects by 95%, and sustained under 1% booking failures across 50K+ monthly transactions.
* Owned production health visibility across internal and vendor systems. Prior monitoring was manual and reactive, so I built a config-driven synthetic monitoring platform with built-in auth, scheduling, retries, alerting, and dashboards. This shifted issue discovery from reactive to proactive, cutting MTTR from hours to minutes.
* Owned the shift from email-based vendor operations to a governed maker-checker platform, standardizing how approval workflows were added across teams. Supported 5+ operation types with role-based approvals, state validation, and auditability, processing 100s of monthly operations.

*Infrastructure & DevOps Excellence*
* Owned CI/CD pipelines across all application and infrastructure services with rolling deployments, health checks, and automated rollback—reducing deployment downtime from 3+ incidents/week to near-zero.
* Owned observability across vendor, external, and internal services, instrumenting Elastic APM with custom DB and cache spans, adding distributed tracing, and optimizing CloudWatch indexing. This exposed latency and failure patterns earlier, cut log costs by 80%, and brought p95 below 1s.
* Owned reliability of core data infrastructure as the sole DevOps engineer, operating MongoDB with sharding, replica sets, and PITR, alongside Elasticsearch, Redis, and BullMQ. Added automated backup and restore drills, enabling production failovers with zero data loss.

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

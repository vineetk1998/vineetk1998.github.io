# Vineet Kumar
**Senior Software Engineer | Technical Leader**

[linkedin.com/in/vineetkch](https://www.linkedin.com/in/vineetkch) | [github.com/vineetk1998](https://github.com/vineetk1998)  
vinetchoudhary@gmail.com | +91-9001936749

## Professional Summary
Senior full-stack engineer with 7+ years of ownership across product, platform, and the infrastructure behind them. At myHQ, ran the external vendor ecosystem connecting users to 20+ workspace providers, powering 50K+ monthly bookings on the product's primary supply path, alongside broader ownership of reliability, observability, and security org-wide. At Cuebook, owned the analytics and ML-driven anomaly detection engine powering the company's B2B SaaS offering, delivering automated root-cause analysis at 95% accuracy. Mentored 6+ engineers — 3 promoted to senior roles — and built engineering standards adopted company-wide.


---

## Technical Skills
**Languages & Frameworks:** Node.js, TypeScript/JavaScript, React.js, Python, Express.js, Django, LangChain, LangGraph<br>
**Infrastructure & Cloud:** AWS (EC2, Lambda, S3, EKS, Bedrock, Polly, CloudWatch), Docker, Kubernetes, CI/CD (GitHub Actions)<br>
**Databases & Messaging:** MongoDB, PostgreSQL, Redis, Elasticsearch, BullMQ, Celery, Druid<br>
**Monitoring & Observability:** Elastic APM, Prometheus, Grafana, Kibana<br>
**Architecture & Patterns:** Distributed Systems, Microservices, Event-Driven Architecture, RESTful APIs, System Design

---

## Professional Experience

### Independent

**Stack:** TypeScript, Node.js, Express, Next.js, PostgreSQL, Substrate/Polkadot API, Supabase, Cloudflare Workers

#### Independent Software Engineer *(self-directed product & infrastructure work)* <span style="float:right; font-weight:normal; font-style:italic">Jun 2025 – Present</span>
* Indexed the Avail blockchain's history — raw chain data decoded into several hundred GB of PostgreSQL — as a solo project (public on my GitHub), served through a REST API and a React/Next.js analytics dashboard. Ran a self-hosted full node when public RPC rate limits bottlenecked the multi-day backfills, which were built for crash-safe, checkpointed resume.
* Shipped and run Playlist Wrangler, a browser extension live on the Chrome, Firefox, and Edge stores, plus two production sites on Supabase and Cloudflare Workers under my studio, [naxatar.com](https://naxatar.com).

---

### myHQ

**Stack:** TypeScript, Node.js, Express.js, AWS (EC2, Lambda, S3, Bedrock, Polly, CloudWatch), Docker, MongoDB, Redis, Elasticsearch, BullMQ, Elastic APM, Kibana, CI/CD

#### Senior Software Engineer <span style="float:right; font-weight:normal; font-style:italic">Apr 2022 – Jul 2025</span>

*Technical Leadership & System Architecture*
* Owned vendor integration architecture across 20+ partner APIs, standardizing resilience and onboarding for a fragmented partner ecosystem. Chose a common adapter layer over one-off integrations to improve maintainability and operational consistency. Cut onboarding time by 85%, reduced integration defects by 95%, and sustained under 0.1% booking failures across 50K+ monthly transactions.
* Owned production health visibility across internal and vendor systems. Prior monitoring was manual and reactive, so I built a config-driven synthetic monitoring platform with built-in auth, scheduling, retries, alerting, and dashboards. This shifted issue discovery from reactive to proactive, cutting MTTR from hours to minutes.
* Led the shift from email-based vendor operations to a governed maker-checker platform, standardizing how approval workflows were added across teams. Supported 5+ operation types with role-based approvals, state validation, and auditability, processing 1000s of monthly operations.

*Infrastructure & DevOps*
* Owned CI/CD pipelines across all application and infrastructure services with rolling deployments, health checks, and automated rollback, reducing deployment downtime from 3+ incidents/week to near-zero.
* Owned observability across vendor, external, and internal services, instrumenting Elastic APM with custom DB and cache spans, adding distributed tracing, and optimizing CloudWatch indexing. This exposed latency and failure patterns earlier, cut log costs by 80%, and brought p95 below 1s.
* Owned reliability of core data infrastructure as the sole DevOps engineer, operating MongoDB with sharding, replica sets, and PITR, alongside Elasticsearch, Redis, and BullMQ. Added automated backup and restore drills, enabling production failovers with zero data loss.

*Security & Compliance*
* Hardened security by enforcing CASL least-privilege at the repository layer, TLS across all inter-service communication, RBAC policies, and AWS Secrets Manager, addressing 90% of identified vulnerability surface.
* Established org-wide compliance foundations, enforcing PII-safe logging standards via ESLint across all services, building an automated PII redaction pipeline over all log files, and implementing IAM-gated access to sensitive logs, reducing PII data exposure by 95%.

*Engineering Culture & Mentorship*
* Influenced engineering practices across teams by introducing standardized design reviews, CI enforcement, and observability patterns, improving consistency and reducing defects by 25%.
* Mentored engineers on system design, tradeoffs, and failure modes, enabling independent ownership of critical services and 3 promotions to senior roles.
* Codified incident learnings into automated safeguards (runbooks, alerts, failure pattern detection), reducing repeat production issues.

---

### Cuebook

**Stack:** Python, Django, JavaScript/TypeScript, React.js, AWS (EC2, Lambda, S3), EKS, Kubernetes, Docker, PostgreSQL, Redis, Celery, Elasticsearch, Druid, Prometheus, Grafana, CI/CD

#### Lead Software Engineer <span style="float:right; font-weight:normal; font-style:italic">Apr 2021 – Mar 2022</span>
* Led the 4-engineer open-source release of CueObserve (SQL-native anomaly detection), choosing self-hostable over managed for lightweight adoption, earning 200+ GitHub stars.
* Designed and implemented a cloud engineering system for automated scaling, improving maintainability by 2 grades and reducing operational overhead by 40%.
* Built CI/CD pipelines with GitHub Actions, increasing automated test coverage by 60% and reducing deployment time by 50%.
* Contributed to Spark-based ELT pipelines over Apache Iceberg, enabling scalable lakehouse ingestion and transformation of 10M+ records/day via Zeppelin-driven workflows.

#### Founding Software Engineer <span style="float:right; font-weight:normal; font-style:italic">Nov 2019 – Mar 2021</span>
* Designed CueL, a DAG-based query planner covering the three analyst workflows (top-N, comparison, time-series), cutting query complexity by 70% versus hand-written SQL.
* Architected a parallel anomaly detection service in Python over Django REST and Celery, fanning work to AWS Lambda to process 10M+ time-series evaluations daily, achieving 95% accuracy in automated root cause analysis.
* Implemented Elasticsearch & ranking algorithm based on user interaction patterns, metric importance, and configuration, improving search relevance by 80%.
* Developed k-means clustering-based segmentation of metrics for automated analysis, reducing manual analysis time by 60%.

---

### Alpha Tech StartUp

#### Founder <span style="float:right; font-weight:normal; font-style:italic">May 2019 – Oct 2019</span>
* Founded and built a SaaS ERP for educational institutions (React, Redux, Firebase), onboarding 2 institutions and 1,000+ students in 6 months.

---

## Education
**National Institute of Technology, Patna**  
Bachelor of Technology (B.Tech), Information Technology  
*2015 – 2019*

---

## Projects & Open Source
#### AI Sales Training Platform *(myHQ Hackathon)* <span style="float:right; font-weight:normal; font-style:italic">2025</span>
**Stack:** LangChain, LangGraph, AWS Bedrock, AWS Polly, XGBoost, SHAP
* Led a team of 6, covering SOP ingestion, AWS Bedrock-driven course and quiz generation, a LangGraph-managed 4-stage buyer simulation (Discovery, Proposal, Objection Handling, Closing) driven by structured system prompts, and AWS Polly voice output.
* Architected the production roadmap: LangChain RAG for scalable retrieval, a local XGBoost model with SHAP-derived feature importances injected as structured prompt context for company-specific conversion signals, and optional fine-tuning for end-user model personalisation.

#### CueObserve - Time-series Anomaly Detection <span style="float:right; font-weight:normal; font-style:italic">2021</span>
* Open-source anomaly detection for SQL data warehouses, 200+ GitHub stars — [github.com/cuebook/CueObserve](https://github.com/cuebook/CueObserve)


---

## Awards & Achievements
* Technical Excellence Award at myHQ for implementing system health check service (2023)
* Published [*Ensuring Food Safety Through Blockchain*](https://www.researchgate.net/publication/344001218_Ensuring_Food_Safety_Through_Blockchain) in ICACC (2019)

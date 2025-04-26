import driivz from "../../assets/driivz_logo.jpeg";
import ariel from "../../assets/ariel_logo.jpeg";
import consist from "../../assets/consist_logo.jpeg";
import iitc from "../../assets/iitc_college_logo.jpeg";
import ngSoft from "../../assets/ngSoft_logo.jpeg";
import cloudZone from "../../assets/cloudzone_logo.jpeg";

const ResumeApi = [
  {
    id: 1,
    category: "education",
    title: "Mathematics and Computer Science",
    year: "(B. sc.) Ariel University (2014 - 2017)",
    desc: "Bachelor of Computer Science and mathematics",
    logo: ariel
  },
  {
    id: 2,
    category: "education",
    title: "Devops And AWS solutions Architect",
    year: "IITC (2023)",
    description: "800+ hours of hands-on lab and best practice projects crafting using latest CI/CD tools and methodologies.",
    logo: iitc,
    list: [
      'Wrote automation scripts in Python & Shell (Bash).', 'Configured & Monitored AWS resources and services ensuring optimal cloud infrastructure.', 'Deployed and monitored infrastructure using Ansible and Terraform.', 'Set up CI/CD Pipeline using Jenkins and GitHub Actions.', 'Set up Docker images, enhancing automation and speeding up deployment processes.', 'Deployed scaled and managed Kubernetes clusters.', 'Effectively monitoring using Grafana and Prometheus.'
    ]
  },
  {
    id: 3,
    category: "experience",
    role: "Cloud Operations Engineer",
    title: "CloudZone",
    logo: cloudZone,
    description: "The leading multi-cloud reseller in Israel",
    year: "(2024 - present)",
    list: [
      "Operated and maintained AWS cloud infrastructure, ensuring availability, scalability, and performance across multiple accounts and regions.",
      "Automated provisioning, deployment, and configuration of AWS services using CloudFormation, Terraform, and AWS CLI.",
      "Managed EC2, S3, RDS, Lambda, CloudFront, VPC, and IAM configurations to support production and development environments.",
      "Implemented and maintained monitoring solutions using Amazon CloudWatch, CloudTrail, and third-party integrations like Datadog.",
      "Handled incident management, troubleshooting AWS services issues, and performing root cause analysis to prevent recurrence.",
      "Developed and enforced AWS security best practices, including IAM policies, encryption (KMS), VPC security groups, and resource access control."
    ]
  },
  {
    id: 4,
    category: "experience",
    role: "Software Engineer",
    title: "Driivz",
    logo: driivz,
    description: "End-to-end EV Charging and Energy Management Solution",
    year: "(2021 - 2023)",
    list: [
      "Developed a scalable, web-based enterprise dashboard application from scratch using Angular, TypeScript, NGRX, RXJS, and LESS, integrating multiple 3rd-party libraries for enhanced functionality.",
      "Designed and implemented core SaaS features based on microservices architecture, focusing on scalability, resilience, and performance optimization.",
      "Led efforts to build and maintain production-grade CI/CD pipelines using Git, Webpack, Jenkins, Karma, and Jasmine, ensuring fast, reliable, and automated deployments.",
      "Introduced Docker containerization to streamline development, testing, and production environments, significantly reducing environment drift and deployment issues.",
      "Supported Kubernetes (K8s) deployments on AWS and on-premise clusters, contributing to operational excellence and improving system scalability and reliability.",
      "Created and maintained advanced build automation systems using Gulp, integrating static analysis tools like ESLint to enforce code quality and consistency.",
      "Collaborated closely with DevOps and cloud teams to optimize AWS cloud resources, enhance deployment strategies, and implement Infrastructure-as-Code best practices.",
      "Championed initiatives for engineering excellence by continuously improving development workflows, build systems, deployment automation, and monitoring practices."
    ]
  },
  {
    id: 5,
    category: "experience",
    role: "FullStack Engineer",
    title: "NGSoft",
    logo: ngSoft,
    year: "(2019 - 2021)",
    list: [
      "Built large-scale, high-volume web applications from the ground up using Angular (v7–v10), focusing on scalability, maintainability, and performance under heavy traffic conditions.",
      "Developed secure, scalable REST APIs using Node.js, TypeScript, and MongoDB, applying security best practices and ensuring operational resilience.",
      "Designed, developed, tested, and deployed reusable application components with a focus on high availability, cloud scalability, and fault tolerance.",
      "Collaborated closely with leadership, product managers, UX designers, and architects to prioritize technical solutions aligned with business goals and operational requirements.",
      "Integrated cloud-native practices into application design, including API security, scalable database management, and resilient architecture patterns.",
      "Maintained and optimized existing codebases, handled advanced debugging, and tackled complex architecture and infrastructure challenges to meet evolving customer needs.",
      "Improved deployment efficiency and production reliability by introducing best practices around CI/CD pipelines, automated testing, and cloud infrastructure optimization (AWS-based hosting and MongoDB cloud services)."
    ]
  },
  {
    id: 6,
    category: "experience",
    role: "Integration Developer",
    title: "Consist",
    logo: consist,
    year: "(2018 - 2019)",
    list: ['Development, integration and system optimization of a leading CCM system, using vanila Js.',
      'Conducting research according to customer needs and developing interfaces and solutions for the system according to customer requirements.',
      'QA and system analysis and real-time troubleshooting.',
      'Maintenance of existing code according to changes of system and customer requirements.'],
  },
]

export default ResumeApi

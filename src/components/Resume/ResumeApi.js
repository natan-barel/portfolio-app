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
  },
  {
    id: 4,
    category: "experience",
    role: "Software Engineer",
    title: "Driivz",
    logo: driivz,
    description: "End-to-end EV Charging and Energy Management Solution",
    year: "(2021 - 2023)",
    list: ['Development of complex and scalable web-based large enterprise application from scratch in Angular with Typescript, NgRx, RxJS and LESS.', 'Design and implement core features of SaaS application based on microservices.', 'Design, develop, test and deploy reusable features and core components, with an emphasis on scalability, performance and visual quality.', 'Create and maintain an advanced production ready build system using Gulp and ESlint configurations.', 'Create a CI/CD process utilizing Git, Webpack, Jenkins, Karma, Jasmine, Docker, K8s on AWS and on-premise – key driver for engineering excellence through constant improvement in processes, tools, and practices.']
  },
  {
    id: 5,
    category: "experience",
    role: "FullStack Engineer",
    title: "NGSoft",
    logo: ngSoft,
    year: "(2019 - 2021)",
    list: ['Build large-scale, high-volume complex web applications from scratch using framework such as Angular (7-10)',
      'Development of Secure REST API with NodeJs , Typescript and MongoDB.',
      'Design, develop, test and deploy high traffic reusable features and components, with an emphasis on scalability and performance that drove complex web applications.',
      'Translate product & business requirements into working solutions, working closely with company leadership, product managers, UX designers to architect, prioritize and deliver great software experience.',
      'Maintenance of existing code and projects, debugging, integrating and tackling hard technical problems some at the architecture level, some at the code level and come up with solutions, according to customer needs.']
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

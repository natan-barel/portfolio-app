import proj1 from "../../assets/tf-project-1-architecture-diagram.png";
import proj2 from "../../assets/prometheus-observability-stack-architecture-diagram.png";
import proj3 from "../../assets/Fault-Tolerant-Web-Hosting-on-Kubernetes.png";
import proj4 from "../../assets/Single-Deployment-Using-Helm-and-K8s.png";
import proj5 from "../../assets/Deploy-a-Flask-Application-over-AWS-Using-Elastic-Beanstalk.png"


const ProjectCardData = [
  {
    imgsrc: proj1,
    title: "AWS - Terraform Project 1",
    text: "Setup jenkins on Amazon-linux EC2 instance (under VPC) using Terraform and Ansible",
    repo: "https://github.com/natan-barel/Terraform-Project-1/",
    view: "",
  },
  {
    imgsrc: proj2,
    title: "AWS - Prometheus Observability Stack Using Docker",
    text: "Prometheus, Grafana & Alert Manager using Terraform, Docker and Docker Compose",
    repo: "https://github.com/natan-barel/prometheus-observability-stack",
    view: "",
  },
  {
    imgsrc: proj3,
    title: "Fault-Tolerant Web Hosting on Kubernetes",
    text: "Containerize and deploy a fault-tolerant Web Application using Docker and Kubernetes",
    repo: "https://github.com/natan-barel/Fault-Tolerant-Web-Hosting-on-Kubernetes",
    view: ""
  },
  {
    imgsrc: proj4,
    title: "Single Deployment Using Helm and K8s",
    text: "Containerize and deploy a Web Application over a Kubernetes cluster using Helm chart",
    repo: "https://github.com/natan-barel/Single-Deployment-Using-Helm-and-K8s",
    view: ""
  },
  {
    imgsrc: proj5,
    title: "AWS - Deploy a Flask Application over AWS Using Elastic Beanstalk",
    text: "deployment of an e-learning course catalog website (Flask application) using the AWS Elastic Beanstalk",
    repo: "https://github.com/natan-barel/Deploy-a-Flask-Application-over-AWS-Using-Elastic-Beanstalk"
  }
];

export default ProjectCardData;

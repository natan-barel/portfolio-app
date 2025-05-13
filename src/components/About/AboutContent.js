import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../../assets/react1.jpg";
import React2 from "../../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h1>Who Am I?</h1>
        <p>
          I’m a Cloud Operations and DevOps Engineer from Israel, with a B.Sc. in Computer Science and over 6 years of hands-on experience in software development, cloud infrastructure, and automation.
        </p>
        <p>
          My career began in full-stack and backend development, where I built scalable web applications and secure APIs using modern JavaScript frameworks like Angular and backend technologies like Node.js and MongoDB. This strong foundation in backend engineering enables me to build cloud-native systems that are both resilient and developer-friendly.
        </p>
        <p>
          Over time, I transitioned into DevOps and Cloud Engineering, where I now focus on designing, automating, and operating robust cloud environments — primarily on AWS.
        </p>
        <p>
          I bring a versatile technical stack that spans JavaScript, TypeScript, Node.js, Python, Bash, MongoDB, Kubernetes, Terraform, Ansible, and CI/CD tools like Jenkins and GitHub Actions. Whether deploying to the cloud or managing infrastructure as code, I strive to build systems that are stable, scalable, and easy to maintain.
        </p>
        <p>
          I work daily with AWS services, automating provisioning using CloudFormation and Terraform, managing workloads across EC2, Lambda, S3, RDS, and VPC, and integrating observability with CloudWatch, CloudTrail, and Datadog. I also write Python-based Lambda functions for automation and operational tooling.
        </p>
        <p>
          I’m passionate about clean architecture, automation, and improving software delivery through collaborative DevOps practices. I enjoy bridging the gap between development and operations to help teams move faster with confidence.
        </p>
        <p>
          I’m always exploring new technologies and best practices to stay ahead in an ever-evolving cloud landscape. If you’re building something impactful and need a cloud-savvy engineer who understands both code and infrastructure, I’d love to connect.
        </p>
        <p>
          Feel free to reach out to me via the contact form or connect with me on LinkedIn. I’m excited to learn more about your projects and how I can contribute.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="about-right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

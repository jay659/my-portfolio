import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";

import kubernetes from "images/kubernetes.svg";
import terraform from "images/terraform.svg";
import aws from "images/aws.svg";
import docker from "images/docker.svg";
import python from "images/python.svg";

const Skillsdata = [
  {
    id: 1,
    name: "AWS",
    icon: aws,
    shadowColor: "shadow-orange-600",
    isimage: true,
    
  },
  {
    id: 2,
    name: "Kubernetes",
    icon: kubernetes,
    shadowColor: "shadow-blue-700",
    isimage: true,
  },
  {
    id: 3,
    name: "Docker",
    icon: docker,
    shadowColor: "shadow-blue-600",
    isimage: true,
  },
  {
    id: 4,
    name: "Terraform",
    icon: terraform,
    shadowColor: "shadow-purple-500",
    isimage: true,
  },
  {
    id: 5,
    name: "Python",
    icon: python,
    shadowColor: "shadow-blue-500",
    isimage: true,
  },
  {
    id: 6,
    name: "JavaScript",
    icon: faJsSquare,
    shadowColor: "shadow-yellow-500",
    iconColor: "text-yellow-500",
  },
  {
    id: 7,
    name: "React",
    icon: faReact,
    shadowColor: "shadow-blue-500",
    iconColor: "text-blue-500",
  },
  {
    id: 8,
    name: "Node.js",
    icon: faNodeJs,
    shadowColor: "shadow-green-500",
    iconColor: "text-green-500",
  },
  
 
  {
    id: 9,
    name: "GitHub",
    icon: faGithub,
    shadowColor: "shadow-gray-500",
    iconColor: "text-gray-500",
  },
  {
    id: 10,
    name: "HTML",
    icon: faHtml5,
    shadowColor: "shadow-orange-600",
    iconColor: "text-orange-600",
    
  },
  {
    id: 11,
    name: "CSS",
    icon: faCss3Alt,
    shadowColor: "shadow-blue-600",
    iconColor: "text-blue-600",
  },
  {
    id: 12,
    name: "Bootstrap",
    icon: faBootstrap,
    shadowColor: "shadow-purple-500",
    iconColor: "text-purple-500",
  },


  
];
export default Skillsdata;

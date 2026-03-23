// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Chatify"
//               description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Bits-0f-C0de"
//               description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Editor.io"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Plant AI"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ✅ ONLY ORIGINAL 6 PLACEHOLDER IMAGES (koi new pics upload karne ki zarurat nahi)
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          All 11 professional projects from your CV with live links (using
          placeholder images for now)
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. MaxChat */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MaxChat – Communication Application"
              description="Real-time communication platform built with React.js, Twilio APIs, and SignalR. Developed inbound, outbound, and group calling modules with seamless audio/video integration."
              ghLink="#"
              demoLink="https://communication.mremind.com/"
            />
          </Col>

          {/* 2. MaxChart */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MaxChart – Healthcare Management System"
              description="Healthcare management system using React.js. Implemented Patient Module with full CRUD operations, document upload, provider assignment, and enhanced patient management features."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* 3. UHS Web & Mobile Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="UHS Web & Mobile Application"
              description="Web & mobile app built with React.js and React Native. Developed complete Allergies Module including add, update, delete, and record linking functionality."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* 4. MIS */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MIS – Management Information System"
              description="Enterprise Management Information System (Project Lead). Managed Administration Module and designed scalable ERP architecture."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* 5. Lottery Khel */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Lottery Khel – Game App"
              description="Multi-game application developed with React Native & React.js. Built frontend architecture, authentication, coin system, and payment integration."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* 6. GinERP */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="GinERP – Enterprise Resource Planning System"
              description="ERP system using React.js. Developed real-time Dashboard, dynamic tab navigation, scalable Settings Module, and REST API integration."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* 7. Point of Sale (POS) System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Point of Sale (POS) System"
              description="Complete POS solution with real-time sales dashboard, dynamic billing module, reports, and fast checkout workflow."
              ghLink="#"
              demoLink="https://afsar.up.railway.app/#/"
            />
          </Col>

          {/* 8. Distribution Management System (DMS) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Distribution Management System (DMS)"
              description="Responsive DMS with inventory overview, Purchase, Sales, and dynamic tables with real-time backend integration."
              ghLink="#"
              demoLink="https://afsar.up.railway.app/#/"
            />
          </Col>

          {/* 9. AK Painting Services */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AK Painting Services"
              description="Professional business website for painting services with modern UI/UX, SEO optimization, and contact forms."
              ghLink="#"
              demoLink="https://akpaintingservices.com/"
            />
          </Col>

          {/* 10. Adil Cooling Center */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Adil Cooling Center"
              description="Professional business website for cooling & AC services with responsive design, SEO, and service portfolio."
              ghLink="#"
              demoLink="https://adilcoolingcenter.com/"
            />
          </Col>

          {/* 11. Riyadh Cooling Services */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Riyadh Cooling Services"
              description="Modern business website for cooling services with clean UI/UX, SEO optimization, and contact integration."
              ghLink="#"
              demoLink="https://riyadhcooling.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

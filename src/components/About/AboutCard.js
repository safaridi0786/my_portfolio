// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi everyone! I’m <span className="purple">Soumyajit Behera</span>{" "}
//             from <span className="purple">Bhubaneswar, India</span>.
//             <br />
//             I’m currently working as a{" "}
//             <span className="purple">Software Developer</span> at{" "}
//             <span className="purple">Juspay</span>.
//             <br />I hold an Integrated M.Sc. (IMSc) in{" "}
//             <span className="purple">Mathematics and Computing</span> from{" "}
//             <span className="purple">BIT Mesra</span>.
//             <br />
//             <br />
//             Outside of coding, I love engaging in activities that keep me
//             creative and inspired:
//           </p>

//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Games 🎮
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Writing Tech Blogs ✍️
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Traveling and Exploring New Places 🌍
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//             "Strive to build things that make a difference!"{" "}
//           </p>
//           <footer className="blockquote-footer">Soumyajit</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Suleman Ahmad Ali</span>{" "}
            from{" "}
            <span className="purple">Dera Ghazi Khan, Punjab, Pakistan</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Senior Frontend Developer</span> in
            Pakistan with 3+ years of experience.
            <br />I hold an{" "}
            <span className="purple">
              MCS - Master of Computer Science
            </span>{" "}
            from <span className="purple">Ghazi University</span> (2021-2023)
            and <span className="purple">BSc Computer Science</span> from{" "}
            <span className="purple">Bahauddin Zakariya University</span>{" "}
            (2018-2021).
            <br />
            <br />
            Innovative and results-driven Frontend Developer specialized in
            React.js, React Native, JavaScript (ES6+), and modern frontend
            frameworks. Experienced in integrating real-time communication using
            Twilio APIs and SignalR, developing reusable UI components, and
            optimizing application performance.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing game apps with React Native
            </li>
            <li className="about-activity">
              <ImPointRight /> Building business websites & digital marketing
              with Canva
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating healthcare & ERP management systems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build scalable, responsive applications that make a real
            difference!"{" "}
          </p>
          <footer className="blockquote-footer">Suleman Ahmad Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

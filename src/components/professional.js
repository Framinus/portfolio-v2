import React, { Component } from 'react';
import ProfessionalRole from './professionalRole';
import '../style/professional.css';

export default class Professional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roles: [
        {
          title: "Global Manager of Technical Support at HelloSign, a Dropbox company",
          description: "Led a team of subject matter experts that supported our integrations (Salesforce, Zapier, HubSpot), beta products (HelloWorks), and did discovery on advanced technical issues. I worked daily with product and engineering to prioritize bugs and deliver solutions to our customers",
          techStack: "Salesforce, Zapier, Jira, Confluence, Postman",
          imageUrl: "/images/global_image.jpeg",
          imageAlt: "globe with lines connecting major cities"
        },
        {
          title: "API Support Engineer at HelloSign",
          description: "Supported our customers connecting to our API in six different programming languages, helped them add our embedded app to their frontend JavaScript, worked directly with customers and sales on implementation planning, made code changes to the Sales Demo website, and created bug reports with the Engineering team.",
          techStack: "Apex, C#, JavaScript, Node, PHP, Python, Ruby",
          imageUrl: "/images/routes.png",
          imageAlt: "",
        },
        {
          title: "Full Stack Developer at Nuclo",
          description: "Built out a secure dashboard for the internal operations team with customer and transaction data. Created a full test suite for the React Native app used by Leñahoy customers.",
          techStack: "React, React Native, Jest, AWS (Lambda, DynamoDB, Cognito)",
          imageUrl: "/images/nuclo.png",
          imageAlt: "Nuclo logo",
        }
      ]
    }
  }

      render() {
        return (
          <section className="professional-container">
            <div className ="professional-text">
              <h2>Professional Experience</h2>
                {this.state.roles.map((role, index) => {
                  return (
                    <ProfessionalRole
                    key={index}
                    title={role.title}
                    imageUrl={role.imageUrl}
                    imageAlt={role.imageAlt}
                    description={role.description}
                    techStack={role.techStack}
                    />
                  );
                })}
            </div>
          </section>
        );
    }
}

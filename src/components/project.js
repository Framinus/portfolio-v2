import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import '../style/project.css';


export default function Project(props) {
  return (
    <section className="project-container">
      <Card className="card-container">
        <CardMedia>
          <img
            className="project-image"
            src={props.imageurl}
            alt={props.imagealt}
          />
        </CardMedia>
        <CardTitle title={props.title} subtitle={props.subtitle} />
        <CardText>
          {props.description}
        </CardText>
        <CardActions>
          <a href={props.livelink}>
            <RaisedButton
              label="Live"
              secondary={true}
            />
          </a>
          <a href={props.gitlink}>
            <RaisedButton
              label="GitHub"
              secondary={true}
            />
          </a>
        </CardActions>
      </Card>
    </section>
  );
}

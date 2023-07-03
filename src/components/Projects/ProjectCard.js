import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCard({
  imgPath, title, description, ghLink, isBlog, demoLink,
}) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub />
          {' '}
          {' '}
          {isBlog ? 'Blog' : 'GitHub'}
        </Button>

        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: '10px' }}
          >
            <CgWebsite />
            {' '}
            {' '}
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  isBlog: PropTypes.bool.isRequired,
  demoLink: PropTypes.string,
};

ProjectCard.defaultProps = {
  demoLink: '', // Provide a default value for demoLink prop
};

export default ProjectCard;

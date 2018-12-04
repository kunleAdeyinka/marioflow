import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="catd-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur officiis rerum sit deserunt totam expedita saepe velit excepturi ipsam, odit corrupti doloribus illo recusandae obcaecati. Fuga est reiciendis animi?</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Robin Hood</div>
                <div>Date Created Goest Here</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails

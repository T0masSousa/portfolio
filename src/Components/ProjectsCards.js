//IMPORT
import React from 'react';

//CSS
import '../index.css';

//FUNçÃO A EXPORTAR
const ProjectsCards = () => {

    //ARRAY DE OBJETOS COM A INFORMAçÂO
  const projects = [
    {
      title: 'Chronos',
      image: require('../Imgs/Projects/Chronos.png'),
      description: "In collaboration with three classmates, we created an immersive application that illustrates key moments in human evolution from the Big Bang to the present day. This project was a challenge to apply our newly acquired JavaScript skills and was inspired by RTP's show, UAU. We utilized libraries such as particles.js for dynamic backgrounds and animate on scroll.js for engaging scrolling effects.",    
      languages: ['JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'Top Indian Movies',
        image: require('../Imgs/Projects/Top_Indian_Movies.png'),
        description: "In this solo project, I developed a secure website for listing and filtering Indian movies from a provided database. The site features user registration and login mechanisms with password hashing for security. I implemented a feedback system to notify users of their actions, such as adding or deleting a favorite. I took measures to prevent SQL Injections and other potential security risks. This project enhanced my understanding of code organization, particularly the division between static and dynamic files.",
        languages: ['PHP', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'The Evolution Of Life',
        image: require('../Imgs/Projects/The_Evolution_Of_Life.png'),
        description: "In a Challenge Based Learning context, my team partnered with Planetário do Porto to create an interactive game for visitors. The game, designed to entertain visitors while they wait for their session, involves progressing through different planets and altering their atmospheres to support life. Features include a lab for element combination and deconstruction, a marketplace for item trading, and a user registration and login system with avatar selection. We also developed a back-office for admins to access game statistics, manage database entities, and ensure the app's functionality.",
        languages: ['PHP', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'Musix',
        image: require('../Imgs/Projects/Musix.png'),
        description: "In this recent project, I leveraged my newly acquired React skills to create a web app that combines my passions for coding and music. Users can search for songs by name or artist, and the app fetches song data from Spotify's Web API. If users opt for lyrics, the app uses a CORS server to request data from the Genius API. For videoclips, it uses the Spotify data to request from the YouTube Data API and displays the most viewed playable video. I integrated Google Firestore for user authentication and data storage, enabling users to add and remove favorite songs. The app also provides feedback on user actions such as saving or removing favorites, login errors, and API request errors.",
        languages: ['React', 'CSS'],
    },
  ];

  //INTERFACE
  return (

    <div className="container">

      <h1 className="text-center my-5 text-white">Here are all of my projects</h1>

      <div className="row">

        {projects.map((project, index) => (

          <div className="col-12 mb-5" key={index}>

            <div className="card bg-transparent text-white outlineCards px-4">

                <div className='row'>
                    
                    <div className='col-md-4 d-flex align-items-center'>
                        
                        <img src={project.image} className="card-img-top mx-auto" alt={project.title} />
                    
                    </div>

                    <div className='col-md-8'>

                        <div className="card-body">

                            <h5 className="card-title mb-3 colorTitle" style={{fontSize: '1.2rem'}}>{project.title}</h5>

                            <p className="card-text" style={{fontStyle:'italic',fontSize: '0.8rem'}}>

                                {project.languages.map((language, index) => (

                                    <span key={index} className="mr-2">{language} </span>

                                ))}
                            </p>

                            <p className="card-text">{project.description}</p>
                        </div>

                    </div>  
                </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;
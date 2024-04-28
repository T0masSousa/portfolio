//IMPORT
import React from 'react';

//FUNçÃO A EXPORTAR
const ProjectsCards = () => {

    //ARRAY DE OBJETOS COM A INFORMAçÂO
  const projects = [
    {
      title: 'Chronos',
      image: '../Imgs/Projects/Chronos.png',
      description:"In this project, me and 3 other class mates were challenged to make an imersive experience combining our recently acquired Javascript knowledge and also one of RTP's shows called UAU. We,as a group, decided we would create an application that would show the start of Human Evolution all since the Big Bang until the current days showing strategic moments in our history.",
      languages: ['JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'Top Indian Movies',
        image: '../Imgs/Projects/Top_Indian_Movies.png',
        description:'This project was one of my favorite ones to make. I worked alone on this one. The objective was to create a website that was capable of listing Indian Movies from a provided database. Then, that listing could be changed according to some filter applied like gender, year or even name. In addition to that it also required to have a register and login mecanism that would make of use of features like password hashing to prevent attacks. I loved to make this project because I was able to introduce features like, for example, a feedback mecanism that would let the user know when he added or deleted a favorite. Besides that, I really loved being able to make this work while making it as secure as possible preventing SQL Injections or eventual loopholes that could lead to database damages. Finally, I really understood how can we make use of strategies like dividing our code into static files and dinamic files, that change according to some type of user action',
        languages: ['PHP', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'The Evolution Of Life',
        image: '../Imgs/Projects/The_Evolution_Of_Life.png',
        description:"This project was born on a CBL (Challenge Based Learning) context and we had a deal with an exterior entity, Planetário do Porto. We were challenged to create something that their visitors could use to entertain themselves while waiting for a session in their dome. My team decided we would try to make a little game, and so we did. We made a game were the user would have to progress trough and  the conditions of each planet for it«s atmosphere to support life by combining elements. He'd have access to a Lab were he could combine or deconstruct elements, he would see the planet he was currently in along side the dirt plots and what would be stored in them and also a small market where he could trade items with other players. Here, each player would set their own price or item he'd want in return. As it is obvious by know he also had a register and login system that was completed with availability for avatar choosing. Finally, we made a back-office as well. There, the admin would be able to get some statistics on important information regarding the game and it's player and they would also have direct access to the database's entities to be able to erase, update or add data to them. Of course that here he made sure that and admin could only edit specific tables without endangering the functioning of the app itself.",
        languages: ['PHP', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'Musix',
        image: '../Imgs/Projects/Musix.png',
        description: "This is my most recent big project. Here I had just learnt about React and the way we can use it and how it works. My professor told my class that we could make whatever we wanted as long as it showed use of at least 2 APIs with React. With this, I decided to join two of my passions, those being coding and listening to music. I had the ideia to make a WEB App, where users can search for a song using it's name or name joined by artist's name. After the input, the app will react out to Spotify's WEB API and will retrieve that song so that the user can listen to it. It will have by know stored that data. In case the user selected to option to get the lyrics for the song he just searched for, the app, would use it's own CORS Server and make a request to Genius API, retrieve the link to the song lyrics. In addition, if the user wanted the song's videoclip, th app would use the Spotify fetched data to make a requeste to Youtube Data API. Then the app would filter these results and show an iframe containing the video from the results that had the most views and that could be played within the website. Finally, I added Google Firestore's service to support user logins via email and password or even Google Sign In or Google Sign Up methods. Firestore allowed me to create a relational logic for my data storage. This means that, when a user selected he would like to add a favorite song, the app would go get his id, knowing that this is only possible after a login, and it would save the song's details alongide his ids. This information would then be displayed dinamically on is favorites page from which he could also remove favorites. Finally this app, also had a feedback mecanism that would accompany the user letting him know when a favorite was saved, or removed, when he missed a login or was already registered or even when the API request encountered an error. ",
        languages: ['React', 'CSS'],
    },
  ];

  return (
    <div className="container">

      <h1 className="text-center my-5">Here are all of my projects</h1>

      <div className="row">

        {projects.map((project, index) => (

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>

            <div className="card">

              <img src={project.image} className="card-img-top" alt={project.title} />

              <div className="card-body">

                <h5 className="card-title mb-3">{project.title}</h5>

                <p className="card-text fw-bold">

                  {project.languages.map((language, index) => (

                    <span key={index} className="mr-2">{language}</span>

                  ))}
                </p>

                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;
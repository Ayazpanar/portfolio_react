/* eslint-disable react/prop-types */
import ProjectCard from "./ProjectCard";
import eventBanner from "../../assets/EventBanner.png";
import musicBanner from "../../assets/MusicBanner.png";
import weatherBanner from "../../assets/WeatherBanner.png";
import notesBanner from "../../assets/NotesBanner.png";

const Projects = ({ theme }) => {
  return (
    <div
      id="Projects"
      className={`p-10 md:p-24 transition-colors duration-300 ${
        theme ? "bg-white text-black" : "bg-[#171d32] text-white"
      }`}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-20 justify-center">
        <ProjectCard
          title="Event Management System"
          main="A web application Which is My BSc(CA & IT) Final Year Project for simplifying Event Management System developed using HTML, CSS and Javascript as a Front-end and for Back-end PHP and MySQL as the Database."
          image={eventBanner}
          demoLink=""
          codeLink="https://github.com/Ayazpanar/RoyalEvent.git"
          theme = {theme}
        />
        <ProjectCard
          title="Music App"
          main="This project is a Spotify-like web application developed using JavaScript and ReactJS integrated with Spotify API. Features include: song search, play, and playlist management."
          image={musicBanner}
          demoLink="https://ap-music-app.netlify.app/"
          codeLink="https://github.com/Ayazpanar/music-application.git"
          theme = {theme}
        />
        <ProjectCard
          title="Notes App"
          main="This project is a simple notes application developed using HTML, Bootstrap, and JavaScript. Users can create, edit, and delete notes, which are stored in the local storage of the web browser."
          image={notesBanner}
          demoLink="https://aps-notes.netlify.app/"
          codeLink="https://github.com/Ayazpanar/notes.git"
          theme = {theme}
        />
        <ProjectCard
          title="Weather App"
          main="This is a small weather application project built using ReactJS and REST API."
          image={weatherBanner}
          demoLink="https://ap-weather-app.netlify.app/"
          codeLink="https://github.com/Ayazpanar/weather-app.git"
          theme = {theme}
        />
      </div>
    </div>
  );
};

export default Projects;

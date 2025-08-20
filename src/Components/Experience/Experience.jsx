import PropTypes from "prop-types";
import { Briefcase, MapPin, Calendar, Link2 } from "lucide-react";

const Experience = ({ theme }) => {
  const EXPERIENCE = [
    {
      id: "1",
      company: "Encora Inc",
      position: "Frontend Developer Intern",
      duration: "Jan 2025 - Jun 2025",
      location: "Ahmedabad, India",
      description: [
        "Worked on React and Next.js projects focusing on UI performance and UX enhancements.",
        "Collaborated with Agile teams and followed industry practices.",
      ],
      projects: [
        {
          name: "Digital Voices",
          summary:
            "An admin deshboard for Digital Voices marketing agency for managing its campaigns, Creators and Clients. Its an AI powered application which mainly developed using Javascript and React like web technologies",
          tech: [
            "Javascript",
            "React",
            "Redux",
            "Tailwind CSS",
            "ANT Design",
            "REST API",
          ],
        },
        {
          name: "ASTM International",
          summary:
            "ASTM Internatinal wbsite, which delivers access to 12,000+ technical standards and resources. Involved in implementing scalable front-end components, optimizing performance for high-traffic access to standard documents, and integrated secure APIs for standards search and content delivery.",
          tech: [
            "Typescript",
            "Next.js",
            "SASS",
            "Bootstrap",
            "Jest",
            "ContentStack SDK",
            "REST API",
          ],
          link: "https://www.astm.org",
        },
      ],
    },
  ];

  return (
    <div id="Experience" className="px-4">
      <h1 className="text-4xl font-bold text-center mb-16">Work Experience</h1>

      <div
        className={`max-w-4xl mx-auto rounded-xl p-6 shadow-md ${
          theme ? "bg-gray-100 text-black" : "bg-slate-950 text-white"
        }`}
      >
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.id}
            className="my-8 p-5 rounded-xl border border-gray-300 dark:border-slate-700"
          >
            <div className="flex items-center gap-2 text-2xl font-semibold mb-1">
              <Briefcase className="w-5 h-5 text-blue-500" />
              <span>{exp.company}</span>
            </div>

            <div className="ml-7 text-lg font-medium">{exp.position}</div>

            <div className="ml-7 mt-1 text-sm text-gray-500 flex flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="ml-10 mt-4 list-disc space-y-2 text-sm leading-relaxed">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Project Section */}
            {exp.projects && (
              <div className="ml-10 mt-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  Key Projects:
                </h4>
                <ul className="space-y-4">
                  {exp.projects.map((proj, i) => (
                    <li
                      key={i}
                      className={`p-4 rounded-md ${
                        theme ? "bg-blue-100" : "bg-slate-800"
                      }`}
                    >
                      <a href={proj.link} target="blank">
                        <h5 className="font-bold text-blue-500 flex gap-1 flex-nowrap">
                          {proj.name} {proj.link && <Link2 />}
                        </h5>
                      </a>
                      <p className="text-sm mt-1">{proj.summary}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {proj.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`text-xs px-2 py-1 rounded-full font-medium ${
                              theme
                                ? "bg-blue-200 text-blue-900"
                                : "bg-blue-900 text-blue-200"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

Experience.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Experience;

import Project from "./project";

import projectsData from "./projects.json"

export default function Projects() {
    const featuredProjects = projectsData.filter(project => project.featured);
    const otherProjects = projectsData.filter(project => !project.featured);

    return (
        <div className="bg-gray-900 min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here's a showcase of my recent work, featuring full-stack applications, 
                        creative coding projects, and innovative solutions to real-world problems.
                    </p>
                </div>
                <div className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {
                            featuredProjects.map((project, index) => (
                                <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                    <Project {...project} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                    {
                        otherProjects.length > 0 && (
                            <div>
                                <div className="text-center mb-12">
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        Other Projects
                                    </h3>
                                    <p className="text-gray-400">
                                        Additional projects and experiments I've worked on
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {otherProjects.map((project, index) => (
                                        <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                            <Project {...project} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    }
            </div>
        </div>
    );
}
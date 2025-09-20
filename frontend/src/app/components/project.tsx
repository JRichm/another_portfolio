"use client"

import { useState } from "react"
import { ExternalLink, Github, Play, Code } from "lucide-react"

interface ProjectProps {
    name: string;
    description: string;
    skills: string[];
    demo_video: string;
    repo: string;
    link: string;
    image: string;
    featured: boolean;
}

export default function Project({
  name,
  description,
  skills,
  demo_video,
  repo,
  link,
  image,
  featured,
}: ProjectProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Placeholder image if none provided or error loading
  const displayImage = image && !imageError ? image : `https://via.placeholder.com/400x240/1f2937/9ca3af?text=${encodeURIComponent(name)}`;

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={displayImage}
          alt={name}
          className={`w-full h-48 object-cover transition-transform duration-300 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          onError={() => setImageError(true)}
        />
        {/* Featured overlay */}
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
              Featured
            </span>
          </div>
        )}
        
        {/* Hover overlay for quick actions */}
        <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-3">
            {link && (
              <button className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                <ExternalLink className="w-4 h-4 text-gray-700" />
              </button>
            )}
            {demo_video && (
              <button className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                <Play className="w-4 h-4 text-gray-700" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title and Featured Tag */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {name}
          </h3>
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {/* Skills/Technologies */}
        {skills && skills.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {skills.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-150"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 4 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-500">
                  +{skills.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex space-x-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors duration-150"
              >
                <ExternalLink className="w-4 h-4 mr-1.5" />
                Live Demo
              </a>
            )}
            
            {demo_video && (
              <a
                href={demo_video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100 transition-colors duration-150"
              >
                <Play className="w-4 h-4 mr-1.5" />
                Demo
              </a>
            )}
          </div>

          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-150"
            >
              <Github className="w-4 h-4 mr-1.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
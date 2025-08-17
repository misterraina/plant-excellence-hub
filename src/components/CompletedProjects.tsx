import { Card, CardContent } from "@/components/ui/card";

import amarya from "@/assets/projects/AmaryaEmp.jpeg"
import future from "@/assets/projects/FutureHeights.webp"
import nirwana from "@/assets/projects/NirwanaSq.png"
import regal from "@/assets/projects/RegalHeights.webp"

const CompletedProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Amayra Emporio",
      image: amarya,
      description: "Premium residential complex with modern amenities"
    },
    {
      id: 2,
      name: "Future Heights",
      image: future,
      description: "High-rise residential towers with panoramic views"
    },
    {
      id: 3,
      name: "Nirwana Square One",
      image:  nirwana,
      description: "Commercial and retail complex in prime location"
    },
    {
      id: 4,
      name: "Regal Heights",
      image: regal,
      description: "Luxury residential development with premium finishes"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Completed Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our expertise through successfully delivered construction projects across various sectors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
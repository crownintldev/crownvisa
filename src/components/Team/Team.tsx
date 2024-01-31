import { teams } from "@/constants/constants";
import TeamComp from "./TeamComp";

const Team = () => {
  return (
    <div className="py-8 px-4 container mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 bg-white antialiased">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
          Our <span className="text-[#fe720f]">team</span>
        </h2>
        <p className="font-light  sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and
          elements built with the utility classNamees from Tailwind
        </p>
      </div>
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teams.map((team, index) => (
          <div key={index}>
            <TeamComp
              image={team.image}
              alt={team.alt}
              title={team.title}
              description={team.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

// app/team/page.js

import TeamCard from "@/app/components/ui/team-card";
import ActivityCard from "@/app/components/ui/activity-card";


interface TeamCardProps {
    image: string;
    name: string;
    email: string;
    phone: string;
}
const TeamPage: React.FC<TeamCardProps> = () => {
  const committeeMembers = [
    {
      image: "/BTB-Chairman.jpg",
      name: "Boniface Mwangi-Chairman",
      email: "borntobuildcbo@gmail.com",
      phone: "+254 794395755",
    },
    {
      image: "/Margaret Ndegwa-Coordinator.jpeg",
      name: "Margaret Ndegwa-Coordinator",
      email: "borntobuildcbo@gmail.com",
      phone: "+254 794395755",
    },
    {
      image: "/Achieng-Treasurer.jpeg",
      name: "Eunice Achieng Otieno -Treasurer",
      email: "borntobuildcbo@gmail.com",
      phone: "+254 794395755",
    },
    // Add other members similarly
    {
      image: "/BTB-ViceChair.jpg",
      name: "Mercy Kimani - ViceChair",
      email: "borntobuildcbo@gmail.com",
      phone: "+254 794395755",
    },
    {
      image: "/BTB-Secretary.jpeg",
      name: "Canory Juma Nyongesa - Secretary",
      email: "borntobuildcbo@gmail.com",
      phone: "+254 794395755",
    },

    {
      image: "/BTB-ViceSecretary.jpg",
      name: "Monicah Gitau - Vice Secretary",
      email: "borntobuildcbo@gmail.com",
      phone: "+254 794395755",
    },
    {
      image: "/NancyKamau-Counsellor.jpg",
      name: "Nancy Kamau - Counsellor",
      email: "borntobuildcbo@gmail.com",
      phone: "+254 794395755",
    },
  ];

  // Add other members similarly

  const activities = [
    {
      eventNature:
        "Please view our Program above for List of Community Needs identified in Kiambu County.",
      venue:
        "Events are all over Kiambu County depending on identified needs. See Activity Zone here below for relevant photos",
    },
    {
      eventNature:
        "We also organize Fundraising Charity Events from time to time to support the program. See our website for details.",
      venue:
        "Announced in Brochures we distribute before the Events. You can view details in our website as well",
    },
    // Add other activities similarly
  ];

  return (
    <div className="py-8 px-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Team</h1>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {committeeMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            email={member.email}
            phone={member.phone}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Activities</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            eventNature={activity.eventNature}
            venue={activity.venue}
          />
        ))}
      </div>
    </div>
  );
};
export default TeamPage;

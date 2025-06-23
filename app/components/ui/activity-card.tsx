// components/ActivityCard.js

type ActivityCardProps = {
  eventNature: string;
  venue: string;
};

const ActivityCard = ({ eventNature, venue }: ActivityCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-64">
      <h3 className="text-xl font-bold mb-2">{eventNature}</h3>
      <p className="text-gray-600">Venue: {venue}</p>
    </div>
  );
};

export default ActivityCard;

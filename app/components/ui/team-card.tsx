import Image from "next/image";
type TeamCardProps = {
  image: string;
  name: string;
  email: string;
  phone: string;
};

const TeamCard = ({ image, name, email, phone }: TeamCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-64 text-center">
      <Image
        src={image}
        alt={name}
        width={128}
        height={128}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-1">
        Email:{" "}
        <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
          {email}
        </a>
      </p>
      <p className="text-gray-600">
        Phone:{" "}
        <a href={`tel:${phone}`} className="text-blue-500 hover:underline">
          {phone}
        </a>
      </p>
    </div>
  );
};

export default TeamCard;

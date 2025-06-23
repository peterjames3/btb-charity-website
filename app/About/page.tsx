// app/about/page.js

const AboutPage = () => {
  return (
    <div className="py-8 px-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Born to Build CBO is driven by a passion for empowering the community
        and alleviating poverty. Our mission is to create a society free from
        suffering, where everyone is loved and given hope to realize their full
        potential.
      </p>
      <h2 className="text-2xl font-bold mb-4">Motto</h2>
      <p className="text-lg mb-6">Unity is strength.</p>
      <h2 className="text-2xl font-bold mb-4">Vision</h2>
      <p className="text-lg mb-6">
        To nurture a community free of poverty and suffering, where people feel
        valued and empowered to achieve their full potential.
      </p>
      <h2 className="text-2xl font-bold mb-4">Mission</h2>
      <p className="text-lg mb-6">
        To empower and uplift the less fortunate in our community by mobilizing
        resources to address their day-to-day needs.
      </p>
      <h2 className="text-2xl font-bold mb-4">Core Values</h2>
      <ul className="list-disc list-inside text-lg space-y-2 mb-6">
        <li>Honoring God</li>
        <li>Openness</li>
        <li>Integrity</li>
        <li>Accountability</li>
        <li>Inclusivity</li>
        <li>Teamwork</li>
        <li>Trustworthiness</li>
        <li>Truthfulness</li>
        <li>Patience</li>
        <li>Professionalism</li>
      </ul>
    </div>
  );
};

export default AboutPage;

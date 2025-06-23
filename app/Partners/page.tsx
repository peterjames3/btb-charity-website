// app/partners/page.js

const PartnersPage = () => {
  return (
    <div className="py-8 px-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Partners</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Born to Build CBO recognizes that no single organization can fully
        eradicate poverty and hunger. Collaborative efforts are essential in
        delivering sustainable solutions and impactful change.
      </p>

      <div className="space-y-8">
        {/* Strategic Partnerships */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Strategic Partnerships</h2>
          <p className="text-lg text-gray-700 mb-4">
            Born to Build CBO actively collaborates with government agencies,
            NGOs, civil society groups, and relief organizations that share a
            commitment to serving humanity. These partnerships help mobilize
            resources, conduct risk assessments, and implement poverty
            alleviation programs.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Ministry of Labour and Social Protection</li>
            <li>National Disaster Management Authority</li>
            <li>County and National Government Agencies</li>
            <li>Non-Governmental Organizations (NGOs)</li>
            <li>Civil Society Groups</li>
            <li>Relief Agencies Supporting Humanitarian Causes</li>
          </ul>
        </section>

        {/* Shared Vision */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Shared Vision and Commitment
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our efforts align with <strong>Kenya&apos;s Vision 2030</strong>,
            working toward a future free from poverty, hunger, and human
            suffering. Together with our partners, we aim to create a
            sustainable and empowered community where every individual has
            access to essential resources and opportunities.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PartnersPage;

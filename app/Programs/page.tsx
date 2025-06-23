// app/programs/page.js

const ProgramsPage = () => {
  return (
    <div className="py-8 px-4 container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Program</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Born to Build CBO is committed to impactful initiatives that uplift
        vulnerable communities and address pressing challenges.
      </p>

      <div className="space-y-8">
        {/* Projects Background */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Projects Background</h2>
          <p className="text-lg text-gray-700 mb-4">
            Recent floods have devastated food crops, leaving families
            struggling with food insecurity. Many children face increased school
            dropouts due to hunger-related hardships. To combat this, we
            mobilize resources to provide essential food items.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Cereals:</strong> Maize, rice, beans, cowpeas
            </li>
            <li>
              <strong>Cooking essentials:</strong> Cooking oil and other basic
              commodities
            </li>
          </ul>
        </section>

        {/* Clothing and Beddings */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Clothing and Beddings</h2>
          <p className="text-lg text-gray-700 mb-4">
            Economic hardships prevent families from buying clothes and warm
            beddings, increasing health risks. Our CBO restores dignity by
            distributing:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Clothing:</strong> Men’s, women’s, and children’s wear
            </li>
            <li>
              <strong>Beddings:</strong> Blankets, duvets, bedsheets, pillows,
              mattresses
            </li>
          </ul>
        </section>

        {/* Sanitary Towels & Hygiene Products */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Sanitary Towels and Hygiene Products
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            To safeguard dignity and hygiene among female students and women in
            the community, we provide:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Sanitary towels (pads):</strong> Ensuring girls can attend
              school without interruption
            </li>
            <li>
              <strong>Hygiene products:</strong> Soaps, detergents, and other
              cleaning essentials
            </li>
          </ul>
        </section>

        {/* Monetary Support */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Monetary Support</h2>
          <p className="text-lg text-gray-700 mb-4">
            Financial aid helps supplement essential needs, including:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Perishable commodities (vegetables, milk products)</li>
            <li>Education (school fees assistance)</li>
            <li>Medical aid (hospital bill support)</li>
            <li>Business startups (financial independence empowerment)</li>
          </ul>
        </section>

        {/* Moral Support & Mentorship */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Moral Support & Mentorship
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our trained counselors offer psychosocial mentorship to uplift and
            empower vulnerable individuals, helping them integrate into society
            with confidence.
          </p>
        </section>

        {/* Target Beneficiaries */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Target Beneficiaries</h2>
          <p className="text-lg text-gray-700 mb-4">
            Born to Build CBO serves various vulnerable groups, including:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Elderly individuals</li>
            <li>Orphans and widows/widowers</li>
            <li>Persons living with disabilities (PwDs)</li>
            <li>Destitute individuals and street children</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProgramsPage;

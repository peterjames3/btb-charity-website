import Image from "next/image";
// app/donations/page.js

const DonationsPage = () => {
  return (
    <div>
      <div className="py-8 px-4 container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Support Us</h1>
        <div className="text-lg text-gray-700 mb-8 text-center">
          <h2>
            Born to Build CBO is dedicated to uplifting vulnerable communities
            through impactful programs. Your donations can help us bring hope
            and resources to those in need.
          </h2>

          <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
            <Image
              src="/LipaNaPaybill.jpeg"
              alt="Paybill Number"
              width={200}
              height={200}
            />
            <Image
              src="/LipaNaKCB.jpeg"
              alt="Mpesa Account Number"
              width={220}
              height={200}
            />
          </div>
        </div>
        <h1 className="text bg-cyan-500 font-bold">
          {" "}
          LIPA NA MPESA: PAYBILL NUMBER 400200 ACCOUNT NUMBER 848224
        </h1>
        <div className="space-y-8">
          {/* Why Donate Section */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Why Donate?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Your contributions help us sustain essential programs, including:
            </p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Food distribution for families affected by hunger.</li>
              <li>Clothing and bedding donations to restore dignity.</li>
              <li>
                Sanitary products and hygiene essentials for women and students.
              </li>
              <li>Educational assistance and school fee subsidies.</li>
              <li>Medical aid for critical health challenges.</li>
              <li>
                Support for business startups to achieve economic independence.
              </li>
            </ul>
          </section>

          {/* How to Donate Section */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">How to Donate?</h2>
            <p className="text-lg text-gray-700 mb-4">
              We offer several convenient ways to contribute:
            </p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Online donations through borntobuild.vercel.app</li>
              <li>
                In-kind donations like food, clothing, and hygiene products.
              </li>
              <li>Direct financial contributions to our organization.</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              To donate or partner with us, please reach out:
            </p>
            <ul className="list-inside text-lg space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-blue-500 hover:underline"
                >
                  borntobuilbcbo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-5">
                Phone:{" "}
                <a
                  href="tel:+254700123456"
                  className="text-blue-500 hover:underline"
                >
                  +254 794395755
                </a>
                or
                <a
                  href="tel:+254715380244"
                  className="text-blue-500 hover:underline"
                >
                  +254715380244
                </a>
              </li>
              <li>Visit: borntobuild.vercel.app</li>
            </ul>
            https://borntobuild.vercel.app/
          </section>
        </div>
      </div>
    </div>
  );
};
export default DonationsPage;

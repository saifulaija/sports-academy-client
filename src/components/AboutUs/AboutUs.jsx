
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Co-Founder & CEO',
      email: 'john@example.com',
      phone: '+123456789',
      image: 'https://i.ibb.co/8YQyW6K/md.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Co-Founder & CMO',
      email: 'jane@example.com',
      phone: '+987654321',
      image: 'https://i.ibb.co/NsxZ3BP/md1.jpg',
    },
    {
      name: 'Michael Johnson',
      role: 'Marketing Manager',
      email: 'michael@example.com',
      phone: '+1122334455',
      image: 'https://i.ibb.co/zNZ0VMz/md2.jpg',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">About Spots Academy</h1>
          <p className="text-lg">Your Trusted Source for Quality Sports Equipment</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-300">
            Founded in 20XX, Spots Academy is a leading sports equipment retailer dedicated to enhancing your athletic performance. We offer a wide range of top-quality products to help you reach your full potential in sports and fitness.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className=" border p-4 rounded-lg shadow-md text-center">
                <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-3" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="flex justify-center mt-4">
                  <a href={`mailto:${member.email}`} className="text-white hover:underline">
                    <FaEnvelope />
                  </a>
                  <a href={`tel:${member.phone}`} className="text-white hover:underline ml-4">
                    <FaPhone />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            Our mission is to equip athletes with the best sports gear, ensuring they perform at their best. We're committed to providing outstanding customer service and helping you achieve your sporting goals.
          </p>
        </section>

      
      </div>
    </div>
  );
};

export default AboutUsPage;

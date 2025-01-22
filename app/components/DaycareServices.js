export default function DaycareServices() {
  const feeStructure = [
    {
      age: '6 to 12 months',
      description: '1 year',
      fee: '₹1200',
      period: 'per month/hour'
    },
    {
      age: '12 to 18 months',
      description: '1 to 1.5 years',
      fee: '₹1000',
      period: 'per month/hour'
    },
    {
      age: '18 months to 8 years',
      description: '1.5 to 8 years',
      fee: '₹800',
      period: 'per month/hour'
    },
    {
      age: '8 years and above',
      description: '8+ years',
      fee: '₹600',
      period: 'per month/hour'
    }
  ];

  const complementaryServices = [
    {
      title: '5 Hours Stay Benefit',
      description: 'One meal complementary (snack or dal rice) as per requirements',
      icon: '🍱',
      color: 'bg-purple-50'
    },
    {
      title: '7+ Hours Stay Benefit',
      description: 'Two meals complementary (snack and dal rice)',
      icon: '🍽️',
      color: 'bg-pink-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Daycare Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing a safe, nurturing, and engaging environment for your child with flexible hours and comprehensive care services.
          </p>
        </div>

        {/* Fee Structure Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6">
            <h3 className="text-2xl font-bold text-white text-center">Fee Structure</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Age Group</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {feeStructure.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-800 font-medium">{item.age}</td>
                    <td className="px-6 py-4 text-gray-600">{item.description}</td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-purple-600">{item.fee}</span>
                      <span className="text-gray-600 ml-1">{item.period}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Complementary Services */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Complementary Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complementaryServices.map((service, index) => (
              <div
                key={index}
                className={`${service.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>Contact Us for Enrollment</span>
            <span className="ml-2 text-xl">👋</span>
          </a>
        </div>
      </div>
    </section>
  );
} 
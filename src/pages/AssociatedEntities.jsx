import React from 'react';

const AssociatedEntities = () => {
  const entities = [
    {
      id: 1,
      name: 'MLA Group',
      image: '/images/Associated Entities/MLA Group.jpg',
      description: 'Sample text about MLA Group will be added here. This section will contain detailed information about the company, its services, and its role in our network.',
      color: 'blue'
    },
    {
      id: 2,
      name: 'Agarwal Sales Corporation',
      image: '/images/Associated Entities/Agrawal coal sales corporation.jpg',
      description: 'Sample text about Agarwal Sales Corporation will be added here. This section will contain detailed information about the company, its services, and its role in our network.',
      color: 'primary'
    },
    {
      id: 3,
      name: 'Asha Enterprises',
      image: '/images/Associated Entities/asha Enterprises.jpg',
      description: 'Sample text about Asha Enterprises will be added here. This section will contain detailed information about the company, its services, and its role in our network.',
      color: 'blue'
    },
    {
      id: 4,
      name: 'Akshat Fuels Pvt. Ltd.',
      image: '/images/Associated Entities/akshat fuels.jpg',
      description: 'Sample text about Akshat Fuels Pvt. Ltd. will be added here. This section will contain detailed information about the company, its services, and its role in our network.',
      color: 'primary'
    },
    {
      id: 5,
      name: 'Manoj Road Lines',
      image: '/images/Associated Entities/manoj road lines.jpg',
      description: 'Sample text about Manoj Road Lines will be added here. This section will contain detailed information about the company, its services, and its role in our network.',
      color: 'blue'
    }
  ];

  const getColorClasses = (color) => {
    if (color === 'blue') {
      return {
        iconBg: 'bg-blue-500',
        cardBorder: 'border-blue-200',
        cardHover: 'hover:border-blue-400',
        iconContainer: 'bg-blue-50',
        textColor: 'text-blue-600',
        badgeBg: 'bg-blue-50'
      };
    }
    return {
      iconBg: 'bg-primary-600',
      cardBorder: 'border-primary-200',
      cardHover: 'hover:border-primary-400',
      iconContainer: 'bg-primary-50',
      textColor: 'text-primary-600',
      badgeBg: 'bg-primary-50'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Associated Entities
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our network of trusted partners and associated companies working together to deliver excellence
          </p>
        </div>
      </div>

      {/* Entities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Associated Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the companies that form our trusted network of business partners
          </p>
        </div>

        {/* Entities Grid */}
        <div className="space-y-8">
          {entities.map((entity, index) => {
            const colors = getColorClasses(entity.color);
            
            return (
              <div
                key={entity.id}
                className={`group relative bg-white rounded-2xl border-2 ${colors.cardBorder} ${colors.cardHover} overflow-hidden transition-all duration-300 hover:shadow-xl`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Card Content */}
                <div className="flex flex-col md:flex-row items-start gap-6 p-8">
                  {/* Image */}
                  <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-40 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={entity.image} 
                      alt={entity.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Entity Number */}
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`text-sm font-semibold ${colors.textColor} ${colors.badgeBg} px-3 py-1 rounded-full`}>
                        Entity {entity.id}
                      </span>
                    </div>

                    {/* Entity Name */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {entity.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {entity.description}
                    </p>

                    {/* Placeholder Notice */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 italic">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Content to be updated</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.iconBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary-600 to-blue-700 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
          
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">
              Want to Learn More?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Get in touch with us to know more about our associated entities and partnership opportunities
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociatedEntities;

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'VisaBird helped me find my dream job in Munich. The platform made it easy to identify companies that sponsor visas, saving me countless hours of research.',
      author: 'A Software Engineer',
      country: 'Germany',
      flag: '🇩🇪',
      role: 'Now working at Celonis, Munich',
    },
    {
      quote:
        "As a finance professional, finding visa sponsorship opportunities was challenging until I discovered VisaBird. The platform's comprehensive database was invaluable.",
      author: 'A Banking Analyst',
      country: 'Netherlands',
      flag: '🇳🇱',
      role: 'Now at ING, Amsterdam',
    },
    {
      quote:
        "The community-driven approach of VisaBird is what sets it apart. Real experiences shared by people who've been through the process make it trustworthy.",
      author: 'A Developer',
      country: 'Sweden',
      flag: '🇸🇪',
      role: 'Working at Klarna, Stockholm',
    },
    {
      quote:
        "I was able to find multiple companies willing to sponsor my visa in Ireland. The platform's filtering options made it easy to narrow down opportunities.",
      author: 'A Marketing Manager',
      country: 'Ireland',
      flag: '🇮🇪',
      role: 'Based at Ryan Air, Dublin',
    },
    {
      quote:
        "VisaBird's transparency about visa sponsorship policies helped me make informed decisions about my career move. Highly recommended!",
      author: 'A Product Designer',
      country: 'Netherlands',
      flag: '🇳🇱',
      role: 'Now in the Netherlands',
    },
    {
      quote:
        'What impressed me most was that VisaBird is completely free. No hidden fees, no premium features - just pure value for job seekers like me.',
      author: 'A Business Analyst',
      country: 'Germany',
      flag: '🇩🇪',
      role: 'Working in Berlin',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from professionals who found their dream jobs abroad through VisaBird
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 h-full flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-quote-left text-indigo-600 dark:text-indigo-400"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white flex items-center">
                    <span className="mr-2">{testimonial.flag}</span>
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic flex-grow">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

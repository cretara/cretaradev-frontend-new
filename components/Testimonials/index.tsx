import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO at TechCorp",
      company: "TechCorp Solutions",
      content: "Working with this developer was exceptional. The enterprise system delivered exceeded our expectations in both functionality and performance. The attention to detail and architectural decisions were outstanding.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Project Manager",
      company: "Government Digital Services",
      content: "The digital transformation project was completed ahead of schedule and under budget. The solution has significantly improved our citizen services and internal workflows. Highly professional and reliable.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "CEO",
      company: "FinTech Innovations",
      content: "Our mobile banking application has received excellent user feedback. The security implementation and user experience design were perfect. I would definitely work with this team again.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 4,
      name: "David Thompson",
      position: "IT Director",
      company: "Healthcare Plus",
      content: "The healthcare management system has transformed our operations. Patient satisfaction has increased dramatically, and our staff efficiency has improved by 40%. Excellent work on compliance requirements.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section
      id="testimonials"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Client Feedback
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px]">
                What Clients Say
              </h2>
              <p className="text-base font-medium leading-relaxed text-body-color">
                Testimonials from satisfied clients who have worked with me on various projects.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div
                className="wow fadeInUp mb-10 rounded-md bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8"
                data-wow-delay=".1s"
              >
                <div className="mb-5 flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="mb-8 border-l-2 border-primary pl-5 text-base font-medium italic leading-relaxed text-body-color">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-[50px] w-[50px] overflow-hidden rounded-full">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-body-color">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-body-color">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

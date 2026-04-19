import Link from 'next/link';
import { Credential } from "@/types/credential";

const Credentials = () => {
  const cretaraCredentials: Credential[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-cloud-practitioner",
      iconSrc: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
    },
    {
      title: "AWS Cloud Quest: Networking - Training Badge",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-networking-training-badge",
      iconSrc: "https://images.credly.com/images/6bf3f80e-4cba-4b4c-bf45-85aec42233ff/blob"
    },
    {
      title: "AWS Cloud Quest: Data Analytics - Training Badge",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-data-analytics-training-badge",
      iconSrc: "https://images.credly.com/images/530be67d-1ce0-46d4-8a36-3f277d5687bc/blob"
    },
    {
      title: "AWS Cloud Quest: Generative AI Architect - Training Badge",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-generative-ai-architect-training-ba",
      iconSrc: "https://images.credly.com/images/e3f85edd-57d4-4585-9311-7b99b3bc7a75/blob"
    },
    {
      title: "AWS Cloud Quest: Generalist AI Practitioner - Training Badge",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-generalist-ai-practitioner-training",
      iconSrc: "https://images.credly.com/images/15fa08e6-ca73-4fa3-94ed-c36f7f157313/blob"
    },
    {
      title: "AWS Cloud Quest: Machine Learning - Training Badge",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-machine-learning-training-badge",
      iconSrc: "https://images.credly.com/images/0bbd6fa0-937a-4933-9581-d25dd860bb33/blob"
    },
    {
      title: "AWS Cloud Quest: Solutions Architect - Training Badge",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-solutions-architect-training-badge",
      iconSrc: "https://images.credly.com/images/320bfb8f-e722-41b9-a70a-c3fb07402981/blob"
    },
    {
      title: "AWS Cloud Quest: Security - Training Badge",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-security-training-badge",
      iconSrc: "https://images.credly.com/images/ea344df5-1074-410e-b359-ded4ea3574a7/blob"
    },
    {
      title: "AWS Cloud Quest: Serverless Developer - Training Badge",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-serverless-developer-training-badge",
      iconSrc: "https://images.credly.com/images/9246c572-2b5e-4b3a-9fae-e87b3c1bf681/blob"
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner - Training Badge",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-cloud-practitioner-training-badge",
      iconSrc: "https://images.credly.com/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob"
    },
    {
      title: "AWS Partner: Technical Accredited - Training Badge",
      description: "Amazon Web Services Training and Certification",
      linkHref: "https://www.credly.com/org/amazon-web-services/badge/aws-partner-technical-accredited-training-badge",
      iconSrc: "https://images.credly.com/images/8f006312-3154-45bf-a845-4a043641e83c/blob"
    }
  ];
  return (
    <section
      id="credentials"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28 text-white dark:text-black"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-3text-gray-900 animate-fade-in-up text-black dark:text-white">Credentials</h2>
        <p className="text-xl text-indigo-600 mb-12 max-w-3xl mx-auto tracking-wider text-black dark:text-white">Showcasing my professional achievements and certifications.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          
          {cretaraCredentials.map((credential, index) => (
            <div 
              key={credential.linkHref} 
              className="bg-white p-8 rounded-xl shadow-2xl transition duration-500 transform hover:scale-[1.03] hover:shadow-indigo-300/50 border border-gray-100 flex flex-col items-center text-center group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered appearance effect
            >
                {/* Background overlay for hover effect */}
                <div className="absolute inset-0 bg-indigo-50/50 opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none"></div>

                {/* Placeholder for the actual badge image (Replicating Credly's look) */}
                <img
                    src={credential.iconSrc}
                    alt={`${credential.title} Badge`}
                    className="w-32 h-auto mb-6 object-contain group-hover:scale-[1.02] transition duration-500"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{credential.title}</h3>
                <p className="text-sm text-indigo-600 mb-4 border-b pb-2 border-gray-100">Issued by {credential.description}</p>
                <div className="w-full flex justify-center relative z-10 pt-2 text-black">
                    <Link
                        href={credential.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2 border border-indigo-300 text-sm font-medium rounded-full shadow-md text-black dark:text-white dark:bg-white hover:bg-indigo-50 transition duration-150"
                    >
                        View Credential
                    </Link>
                </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Credentials;
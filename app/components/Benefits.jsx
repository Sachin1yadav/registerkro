const benefitsData = [
    {
      title: "Unleash Flexibility",
      description:
        "Work from anywhere in India with a prestigious virtual address.",
    },
    {
      title: "Simplify Operations",
      description:
        "Get a mailing address, access GST registration, and enjoy streamlined services.",
    },
    {
      title: "Boost Credibility",
      description:
        "Project a professional image and attract top talent nationwide.",
    },
  ];
  
  const Benefits = () => (
    <section className="flex justify-around mt-8">
      {benefitsData.map((benefit, index) => (
        <div key={index} className="bg-white rounded-lg p-8 w-1/3 text-center shadow-md">
          <h2 className="text-xl font-bold">{benefit.title}</h2>
          <p className="mt-2">{benefit.description}</p>
        </div>
      ))}
    </section>
  );
  
  export default Benefits;
  
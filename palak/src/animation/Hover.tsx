import AnimationCard from "../components/AnimationCard";

const Hover = () => {
  return (
    <div className="mt-48 flex gap-8 justify-center">
      <p className="text-center text-4xl font-semibold mb-20 px-5 py-20 w-full md:w-1/3">
        Shipments through Website made easy
      </p>

      <div className="flex gap-8">
        <AnimationCard
          title="Monthly payment options"
          description="Choose an easy way to finance with convenient monthly payment options."
        />
        <AnimationCard
          title="Monthly payment options"
          description="Choose an easy way to finance with convenient monthly payment options."
        />
      </div>
    </div>
  );
};

export default Hover;

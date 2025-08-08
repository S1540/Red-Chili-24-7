import ChefParticles from "./ChefParticles";

export default function MeetOurChef() {
  return (
    <div className="relative  w-full h-[750px] bg-zinc-700">
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        <ChefParticles />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">Meet Our Chef</h1>
        <p className="max-w-lg text-center text-gray-300">
          Discover the culinary genius behind our mouthwatering dishes. Fresh
          ingredients, expert skills, and a passion for flavor.
        </p>
      </div>
    </div>
  );
}

export default function StarryBackground() {
  return (
    <div className="relative h-[1000px] w-[1000px] overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-blue-950">
      {/* Stars container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Small twinkling stars */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1px 1px at 20px 30px, white, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, white, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, white, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, white, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, white, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, white, rgba(0,0,0,0))",
            backgroundRepeat: "repeat",
            animation: "twinkle 4s linear infinite",
          }}
        />

        {/* Larger stars with glow */}
        <div
          className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white"
          style={{
            boxShadow:
              "0 0 10px 2px rgba(255,255,255,0.4), 0 0 20px 4px rgba(255,255,255,0.2)",
          }}
        />
        <div
          className="absolute top-1/3 left-2/3 h-2 w-2 rounded-full bg-white"
          style={{
            boxShadow:
              "0 0 10px 2px rgba(255,255,255,0.4), 0 0 20px 4px rgba(255,255,255,0.2)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/3 h-2 w-2 rounded-full bg-white"
          style={{
            boxShadow:
              "0 0 10px 2px rgba(255,255,255,0.4), 0 0 20px 4px rgba(255,255,255,0.2)",
          }}
        />

        {/* Bottom row of colorful glowing orbs */}
        <div className="absolute right-0 bottom-8 left-0 flex justify-between px-16">
          <div
            className="h-4 w-4 rounded-full bg-purple-500"
            style={{ boxShadow: "0 0 20px 10px rgba(168,85,247,0.4)" }}
          />
          <div
            className="h-4 w-4 rounded-full bg-pink-500"
            style={{ boxShadow: "0 0 20px 10px rgba(236,72,153,0.4)" }}
          />
          <div
            className="h-4 w-4 rounded-full bg-blue-400"
            style={{ boxShadow: "0 0 20px 10px rgba(96,165,250,0.4)" }}
          />
          <div
            className="h-4 w-4 rounded-full bg-blue-500"
            style={{ boxShadow: "0 0 20px 10px rgba(59,130,246,0.4)" }}
          />
          <div
            className="h-4 w-4 rounded-full bg-blue-600"
            style={{ boxShadow: "0 0 20px 10px rgba(37,99,235,0.4)" }}
          />
        </div>
      </div>

      {/* Optional content can be placed here */}
      <div className="relative z-10">{/* Your content goes here */}</div>
    </div>
  );
}

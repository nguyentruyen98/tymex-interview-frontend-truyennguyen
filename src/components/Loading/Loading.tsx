import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <Loader className="animate-spin" size={40} />
    </div>
  );
};

export default Loading;

export const Hero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-200">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

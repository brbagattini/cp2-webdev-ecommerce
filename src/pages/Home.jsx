import Card from "../components/Card";
export default function Home() {
  return (
    <div className="">
      <div className="w-full h-10 bg-black">
        <h1 className="text-white font-bold text-3xl">Destaque</h1>
      </div>
      <div className="flex gap-1 p-1">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full h-10 bg-black">
        <h1 className="text-white font-bold text-3xl">Eletrônicos</h1>
      </div>
      <div className="flex gap-1 p-1">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full h-10 bg-black">
        <h1 className="text-white font-bold text-3xl">Roupas</h1>
      </div>
      <div className="flex gap-1 p-1">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full h-10 bg-black">
        <h1 className="text-white font-bold text-3xl">Joias</h1>
      </div>
      <div className="flex gap-1 p-1">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

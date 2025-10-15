export default function Card({ titulo }) {
  return (
    <div className="w-90 h-90 border rounded-2xl Card p-4">
      <img src='' alt="" className=" h-30 w-80"/>
      <h2 className="text-lg font-bold">Titulo</h2>
      <h3>Stars</h3>
      <h3>Price</h3>
      <a href="">Ver detalhes</a>
    </div>
  );
}

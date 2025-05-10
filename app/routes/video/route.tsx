export default function VideoRoute() {
  return (
    <div>
      <h1 className="text-4xl">Videoサンプル</h1>
      <video controls width={800}>
        <source src="/oceans.mp4" />
      </video>
    </div>
  );
}

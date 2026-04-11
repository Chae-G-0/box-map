import boxmapIcon from "@/assets/boxmapIcon.png";

export default function GlobalLoader() {
  return (
    <div className="bg-muted flex h-screen w-screen flex-col items-center justify-center">
      <div className="mb-15 flex animate-bounce items-center gap-4">
        <img src={boxmapIcon} alt="boxmap icon" className="w-8" />
        <div className="text-2xl font-bold">BOX MAP</div>
      </div>
    </div>
  );
}

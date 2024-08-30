export default function Table() {
  return (
    <section >
      <div className="flex flex-col items-center justify-center p-4">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="w-24 h-32 border" />
          <div className="w-24 h-32 border" />
          <div className="w-24 h-32 border" />
        </div>
        <div className="flex justify-between w-full max-w-4xl">
          <div className="grid grid-rows-3 gap-4">
            <div className="w-32 h-24 border" />
            <div className="w-32 h-24 border" />
            <div className="w-32 h-24 border" />
          </div>
          <div className="grid grid-rows-3 gap-4">
            <div className="w-32 h-24 border" />
            <div className="w-32 h-24 border" />
            <div className="w-32 h-24 border" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="w-24 h-32 border" />
          <div className="w-24 h-32 border" />
          <div className="w-24 h-32 border" />
        </div>
      </div>
    </section>);
}

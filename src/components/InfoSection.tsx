export default function InfoSection({
  showSideView,
  setShowSideView,
}: {
  showSideView: boolean;
  setShowSideView: (value: boolean) => void;
}) {
  return (
    <div className="w-[60%] mx-auto text-center pt-[4vh] flex flex-col gap-2">
      {showSideView ? (
        <span
          onClick={() => setShowSideView(false)}
          className="underline cursor-pointer text-primary text-xs tracking-tighter"
        >
          Front view
        </span>
      ) : (
        <span
          onClick={() => setShowSideView(true)}
          className="underline cursor-pointer text-primary text-xs tracking-tighter"
        >
          Side view
        </span>
      )}
      <span className="uppercase text-[#6e6e73] font-semibold text-xs tracking-tighter">
        Apple Watch Series 10
      </span>
      <span className="font-semibold text-sm tracking-tighter">
        46mm Jet Black Aluminum Case with Black Solo Loop
      </span>
      <span className="text-sm tracking-tighter">From $429</span>
    </div>
  );
}

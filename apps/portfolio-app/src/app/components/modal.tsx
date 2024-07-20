interface modalprops {
  children: React.ReactNode;
  isopen: boolean;
  close: (arg0: boolean) => void;
}
const modal = ({ children, isopen, close }: modalprops) => {
  if (!isopen) return null;
  return (
    <div className="relative z-10 absolute w-full h-full bg-slate-800 ">
      <div>
        <h1>modal title</h1>
        <div>{children}</div>
        <button onClick={() => close(false)}>close</button>
      </div>
    </div>
  );
};

export default modal;

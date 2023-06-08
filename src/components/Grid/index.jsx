export default function Grid({ children }) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 items-start mb-24 lg:px-10">
      {children}
    </div>
  );
}

export default function Grid({ children }) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 items-start md:-mt-20 mb-24">
      {children}
    </div>
  );
}

export function ButtonIcon({ value, icon, isFull }) {
  return (
    <>
      <button
        style={{ width: isFull ? '100%' : '' }}
        className="p-2 text-purple-main-light bg-purple-main bg-opacity-40 rounded-xl font-semibold flex gap-2 text-sm items-center justify-center hover:bg-opacity-60" >
        <div>{value}</div>
        <div>{icon}</div>
      </button >
    </>
  );
}

// style={{
//   color: isSpecial ? 'red' : 'blue',
//   backgroundColor: isSpecial ? 'yellow' : 'green',
//   // Add more styles as needed
// }}

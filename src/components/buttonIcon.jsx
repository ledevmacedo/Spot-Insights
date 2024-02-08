export function ButtonIcon({ value, icon, isFull, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{ width: isFull ? '100%' : '' }}
        className="py-2 text-purple-main-light bg-purple-main bg-opacity-40 rounded-xl font-semibold 
         gap-2 text-xs  hover:bg-opacity-60 text-center" >
        <div className="text-center">{value}</div>
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

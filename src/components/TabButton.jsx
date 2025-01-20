export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
      {/* 
          Do not use here "handleClick()" like this because it will execute on when
          <button onClick={handleClick}>{props.children}</button> this line will execute
          thus it will execute "handleClick" only on button click.
      */}
      {/* 
          When we pass the function as prop value it must be start with "on" such as onMove, onClick and so on....
      */}
    </li>
  );
}

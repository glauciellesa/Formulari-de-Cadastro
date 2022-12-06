interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: any;
}
export default (props: BotaoProps) => {
  const cor = props.cor ?? "red";
  console.log(cor);
  return (
    <button
      className={`text-gray-50 px-4 py-2
  bg-gradient-to-r from-${cor}-900 to-${cor}-600 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
};

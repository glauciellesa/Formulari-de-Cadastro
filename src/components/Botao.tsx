interface BotaoProps {
  cor?: "green" | "sky" | "gray";
  className?: string;
  children: any;
}
export default (props: BotaoProps) => {
  const cor = props.cor ?? "gray";
  console.log(cor);
  return (
    <button
      className={`text-gray-50 px-4 py-2
  bg-gradient-to-r from-${cor}-800 to-${cor}-500 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
};

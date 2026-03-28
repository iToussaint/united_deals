interface ButtonProps {
  text: string;
  variant: "primary" | "secondary" | "warning";
  loading: boolean;
}

function Button({ text, variant, loading }: ButtonProps) {
  return (
    <button
      className={`${variant} uppercase text-[14px] text-white font-semibold rounded-[2px] px-[16px] py-[8px]`}
    >
      {" "}
      {loading ? "loading" : ""} {text}
    </button>
  );
}

export default Button;

import { motion } from "motion/react";

const icons = import.meta.glob("../../assets/logos/*.svg", {
  import: "default",
  eager: true,
})

interface LogoLoaderProps {
  name: string;
  size?: number | string;
  className?: string;
}

export const LogoLoader: React.FC<LogoLoaderProps> = ({
  name,
  size = 18,
  className = ""
}) => {
  const key = Object.keys(icons).find((k) => k.endsWith(name));
  const src = key ? (icons[key] as string) : null;

  if (!src) {
    return (
      <motion.div 
        style={{ width: size, height: size }}
        className="rounded-full bg-gray-700 animate-pulse"
      />
    )
  }

  return (
    <img 
      src={src}
      width={Number(size)}
      height={Number(size)}
      alt={name.replace(".svg", "")}
      className={`inline-block align-middle ${className}`}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        objectPosition: "center",
        verticalAlign: "middle",
        display: "inline-block"
      }}
    />
  )
}
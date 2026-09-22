export default function ThemeWrapper({
  vars,
  children,
}: {
  vars: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <div style={vars as React.CSSProperties} suppressHydrationWarning>
      {children}
    </div>
  );
}

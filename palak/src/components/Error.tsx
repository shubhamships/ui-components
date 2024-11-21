function Error({ children }: { children: string }) {
  return <p className="text-xs font-semibold text-red-600">{children}</p>;
}

export default Error;

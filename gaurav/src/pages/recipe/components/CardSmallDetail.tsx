interface ICardSmallDetail {
  iconName: React.ReactNode;
  detail: string;
}
export const CardSmallDetail = ({ iconName, detail }: ICardSmallDetail) => {
  return (
    <>
      {detail ? (
        <div className="flex items-center text-xs bg-primary/10 text-white rounded-full px-2 py-1">
          <span>{iconName}</span>
          {detail}
        </div>
      ) : null}
    </>
  );
};

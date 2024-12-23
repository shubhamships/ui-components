interface ICardSmallDetail {
  label: string;
  detail: string;
}
export const CardSmallDetail = ({ label, detail }: ICardSmallDetail) => {
  return (
    <>
      {detail ? (
        <div>
          <p className="text-white">
            <span className="font-semibold">{label}:</span> {detail}
          </p>
        </div>
      ) : null}
    </>
  );
};

const Status = ({ startDate, endDate }: { startDate: Date; endDate: Date }) => {
  const calculateStatus = () => {
    const diffInTime =
      new Date(endDate).getTime() - new Date(startDate).getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return Math.round(diffInDays);
  };

  const renderStatus = () => {
    const days = calculateStatus();
    return days <= 0 ? "Done" : `${days} days left`;
  };
  return <>{renderStatus()}</>;
};

export default Status;

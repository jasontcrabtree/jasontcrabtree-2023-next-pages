export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${day}-${month}-${year}`;
};

export const truncateString = (str: string, num: number) => {
  if (str.length > num) {
    const truncated = str.slice(0, num);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) {
      return truncated.slice(0, lastSpaceIndex) + '…';
    } else {
      return truncated + '…';
    }
  } else {
    return str;
  }
};

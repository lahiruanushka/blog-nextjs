
export const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', // e.g., December
      day: 'numeric', // e.g., 25
    });
  
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true // 12-hour format with AM/PM
    });
  
    return `${formattedDate}, ${formattedTime}`;
  };
  
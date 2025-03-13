function formatDate(dateString) {
    const date = new Date(dateString);
  
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "utc",
    };
  
    const formatter = new Intl.DateTimeFormat("fr-FR", options);
    const formattedDate = formatter.format(date);
  
    return formattedDate;
  }

export { formatDate as f };

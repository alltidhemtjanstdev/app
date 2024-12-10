export const formatDate = (dateString: string | null) =>
  dateString
    ? new Date(dateString).toLocaleDateString("sv", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

function getDateRange(days) {
    const currentDate = new Date();
    const startDate = new Date();
    startDate.setDate(currentDate.getDate() - days);

    const formatDate = (date) => {
        return date.toISOString().split('T')[0]; // Формат YYYY-MM-DD
    };

    return {
        currentDate: formatDate(currentDate),
        startDate: formatDate(startDate)
    };
}

export default getDateRange

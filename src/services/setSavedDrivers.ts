const getSavedDrivers = (): string[] => {
  if (typeof window !== 'undefined') {
    const savedDrivers = localStorage.getItem('savedDrivers');

    if (savedDrivers) {
      return JSON.parse(savedDrivers);
    }
  }

  return [];
};

export default getSavedDrivers;


export const formatCurrency = (value: number): string => {
  if (value >= 100000) {
    // Format as Lakhs (e.g. 5.5L)
    return `₹${(value / 100000).toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1')}L`;
  }
  // Standard Indian Rupee format for smaller amounts
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
};

const USD_TO_INR = 83;

export const toINR = (usd) => {
  const amount = Number(usd) || 0;
  const inr = Math.round(amount * USD_TO_INR);
  return inr.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });
};

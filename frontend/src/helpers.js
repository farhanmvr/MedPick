export const getBaseURL = () => {
  if (process.env === 'development') return 'http://localhost:5000';
  return 'https://medpick-backend.onrender.com';
};

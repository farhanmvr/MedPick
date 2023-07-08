export const getBaseURL = () => {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:5000';
  return 'https://medpick-backend.onrender.com';
};

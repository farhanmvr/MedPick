const express = require('express');
const getRandomValue = require('./helpers');
const cors = require('cors');
const app = express();

app.use(cors({}));

app.get('/report', async (req, res) => {
  const report = {
    incidents: {
      week1: getRandomValue(5, 50),
      week2: getRandomValue(5, 50),
      week3: getRandomValue(5, 50),
      week4: getRandomValue(5, 50),
      week5: getRandomValue(5, 50),
      week6: getRandomValue(5, 50),
      week7: getRandomValue(5, 50),
    },
    expenses: {
      cmc: getRandomValue(5000, 50000),
      amc: getRandomValue(5000, 50000),
      service_charges: getRandomValue(5000, 50000),
      spares: getRandomValue(5000, 50000),
    },
    services: {
      total: getRandomValue(10, 100),
      open: getRandomValue(10, 100),
    },
    assets: getRandomValue(20, 100),
    incident_management: {
      cleared: getRandomValue(5, 100),
      not_cleared: getRandomValue(5, 100),
    },
    departments: {
      laboratory: getRandomValue(5, 100),
      radiology: getRandomValue(5, 100),
      icu: getRandomValue(5, 100),
      operation_theatre: getRandomValue(5, 100),
      opd: getRandomValue(5, 100),
    },
    calibrated: {
      calibrated: getRandomValue(22, 100),
      not_calibrated: getRandomValue(25, 100),
      not_required: getRandomValue(25, 100),
    },
  };
  const response = {
    status: 'success',
    report,
  };
  res.status(200).json(response);
});

app.all('*', async (req, res) => {
  res
    .status(404)
    .json({ status: 'fail', message: 'This endpoint is not found' });
});

// Handle unhandled rejection like db connection
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION ----- Shutting down....');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1); // 0 for success 1 for uncalled exception
  });
});

// Set server PORT
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server listening to PORT ${PORT}`);
});

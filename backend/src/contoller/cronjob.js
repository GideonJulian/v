const cronjob = async (req, res) => {
  res.status(200).json({
    status: "Ok",
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
  });
};
export { cronjob };

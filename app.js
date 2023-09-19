const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const CustomError = require("./util/CustomError");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(express.json());


app.use("/api", customerRoutes);
app.use("/api", orderRoutes);

app.use((req, res, next) => {
  const error = new CustomError("Route not found", 404);
  next(error);
});

app.use((err, req, res, next) => {

  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

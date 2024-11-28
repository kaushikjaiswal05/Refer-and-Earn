const express = require("express");
const cors = require("cors");
const { PrismaClient } = require('@prisma/client');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/referrals", async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

  if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: refereeEmail,
      subject: "Referral Received",
      text: `Hi ${refereeName}, you have been referred by ${referrerName}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res
      .status(201)
      .json({
        success: true,
        message: "Referral saved successfully.",
        referral,
      });
  } catch (error) {
    console.error("Error saving referral:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred. Please try again.",
      });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/referrals", async (req, res) => {
  try {
    const referrals = await prisma.referral.findMany();
    res.json({ success: true, referrals });
  } catch (error) {
    console.error("Error fetching referrals:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred. Please try again.",
      });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

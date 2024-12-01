import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { useTheme } from "@mui/material/styles";

const RefModal = ({ open, handleClose }) => {
  const [step, setStep] = useState(1); 
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [friendPhone, setFriendPhone] = useState("");
  const [vertical, setVertical] = useState("");
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () => {
    setError("");
    if (!refereeName || !refereeEmail || !friendPhone || !vertical) {
      setError("All fields are required.");
      return;
    }
    setStep(2); // Move to step 2
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!referrerName || !referrerEmail) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        "https://refer-and-earn-db2g.onrender.com/api/referrals",
        {
          refereeName,
          refereeEmail,
          referrerName,
          referrerEmail,
        }
      );
      if (response.data.success) {
        setSuccess("Referral submitted successfully!");
        setTimeout(() => {
          setStep(1); // Reset steps
          handleClose();
        }, 2000);
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          background: "#fff",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isSmallScreen ? "90%" : "70%",
          height: isSmallScreen ? "100%" : "auto",
          maxHeight: "90%",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          boxShadow: 24,
          borderRadius: "12px",
          overflowY: "auto",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "40%",
            bgcolor: "#1976d2",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Refer your <span style={{ color: "#ffd700" }}>friend!</span>
          </Typography>
          <img
            src="/images/refer-modal-bg.svg"
            alt="Refer Illustration"
            style={{
              width: isSmallScreen ? "150px" : "220px",
              height: isSmallScreen ? "150px" : "220px",
            }}
          />
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "60%",
            p: 3,
          }}
        >
          {step === 1 && (
            <>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "normal",
                  mb: 1,
                  fontSize: "1.4rem",
                  textAlign: isSmallScreen ? "center" : "left",
                }}
              >
                Friend's details
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                label="Friend's Name"
                value={refereeName}
                onChange={(e) => setRefereeName(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Friend's Email"
                value={refereeEmail}
                onChange={(e) => setRefereeEmail(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Friend's Phone Number"
                value={friendPhone}
                onChange={(e) => setFriendPhone(e.target.value)}
              />
              <TextField
                select
                fullWidth
                margin="normal"
                label="Select Vertical"
                value={vertical}
                onChange={(e) => setVertical(e.target.value)}
              >
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Health">Health</MenuItem>
              </TextField>
              {error && (
                <Typography color="error" sx={{ mt: 1, textAlign: "center" }}>
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  height: "50px",
                  bgcolor: "#1976d2",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                onClick={handleNext}
              >
                Next
              </Button>
            </>
          )}
          {step === 2 && (
            <>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "normal",
                  mb: 1,
                  fontSize: "1.4rem",
                  textAlign: isSmallScreen ? "center" : "left",
                }}
              >
                Referrer's details
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                label="Your Name"
                value={referrerName}
                onChange={(e) => setReferrerName(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Your Email"
                value={referrerEmail}
                onChange={(e) => setReferrerEmail(e.target.value)}
              />
              {error && (
                <Typography color="error" sx={{ mt: 1, textAlign: "center" }}>
                  {error}
                </Typography>
              )}
              {success && (
                <Typography
                  color="success.main"
                  sx={{ mt: 1, textAlign: "center" }}
                >
                  {success}
                </Typography>
              )}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  height: "50px",
                  bgcolor: "#1976d2",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default RefModal;

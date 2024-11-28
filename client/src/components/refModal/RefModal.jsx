import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import axios from 'axios';
import './refmodal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const RefModal = ({ open, handleClose }) => {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
      setError('All fields are required.');
      return;
    }

    if (!validateEmail(referrerEmail) || !validateEmail(refereeEmail)) {
      setError('Please enter valid email addresses.');
      return;
    }

    try {
      const response = await axios.post("https://refer-and-earn-db2g.onrender.com/api/referrals", {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      });

      if (response.data.success) {
        setSuccess('Referral submitted successfully!');
        setReferrerName('');
        setReferrerEmail('');
        setRefereeName('');
        setRefereeEmail('');
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setError(response.data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} borderRadius={2}>
        <h2>Refer a Friend</h2>
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
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default RefModal;

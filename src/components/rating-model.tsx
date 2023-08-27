import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";

interface AddRatingModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (rating: number) => void;
}

const AddRatingModal: React.FC<AddRatingModalProps> = ({ open, onClose, onSave }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSave = () => {
    if (selectedRating !== null) {
      onSave(selectedRating);
    }
    setSelectedRating(null);
    onClose();
  };

  const renderedStars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      color={selectedRating !== null && index < selectedRating ? "primary" : "disabled"}
      onClick={() => handleRatingClick(index + 1)}
      style={{ cursor: "pointer" }}
    />
  ));

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px" }}>
        <Typography variant="h6">Add Your Rating</Typography>
        <div>{renderedStars}</div>
        <Button onClick={handleSave} variant="contained" color="primary" style={{ marginTop: "10px" }}>
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default AddRatingModal;

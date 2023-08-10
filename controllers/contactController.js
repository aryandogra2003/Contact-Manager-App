const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

const createContact = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};

const UpdateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  UpdateContact,
  deleteContact,
};

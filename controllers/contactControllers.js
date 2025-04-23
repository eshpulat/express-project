// @desc Get all contacts
// @routs GET /api/constcts
// @access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

// @desc create new contacts
// @routs GET /api/constcts
// @access public
const createContact = (req, res) => {
    res.status(201).json({ message: "Create contacts" });
};

// @desc create new contacts
// @routs GET /api/constcts
// @access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contacts for ${req.params.id}` });
};

// @desc create new contacts
// @routs GET /api/constcts
// @access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

// @desc create new contacts
// @routs GET /api/constcts
// @access public
const deleteContact = (req, res) => {
    res.status(201).json({ message: `Delete contacts for ${req.params.id}` });
};

module.exports = {
    getContact,
    createContact,
    getContacts,
    updateContact,
    deleteContact
};

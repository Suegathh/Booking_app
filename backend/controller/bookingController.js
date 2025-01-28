const Booking = require("../models/bookingModel");

// Get all bookings
const getBookings = async (req, res, next) => {
    try {
        const booking = await Booking.find();

        if (!booking) {
            res.status(400);
            throw new Error("bookings not found");
        }
        return res.status(200).json(booking);
    } catch (error) {
        next(error);
    }
};

// Create a booking
const createBooking = async (req, res, next) => {
    try {
        const booking = await Booking.create(req.body);

        if (!booking) {
            res.status(400);
            throw new Error("booking not created");
        }
        return res.status(201).json(booking);
    } catch (error) {
        next(error);
    }
};

// Get a single booking by ID
const getBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            res.status(400);
            throw new Error("booking not found");
        }
        return res.status(200).json(booking);
    } catch (error) {
        next(error);
    }
};

// Update a booking by ID
const updateBooking = async (req, res, next) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        );

        if (!updatedBooking) {
            res.status(400);
            throw new Error("Cannot update booking");
        }
        return res.status(200).json(updatedBooking);
    } catch (error) {
        next(error);
    }
};

// Delete a booking by ID
const deleteBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        if (!booking) {
            res.status(400);
            throw new Error("cannot delete booking");
        }
        return res.status(200).json({ id: req.params.id });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getBookings,
    createBooking,
    getBooking,
    updateBooking,
    deleteBooking,
};

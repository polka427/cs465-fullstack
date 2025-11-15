const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
require('./db');
const Trip = require('./travlr');

const dataPath = path.join(__dirname, '..', '..', 'data', 'trips.json');
const trips = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

async function seed() {
    try {
        console.log('Clearing trips collection');
        await Trip.deleteMany({});

        console.log(`Inserting ${trips.length} trips`);
        await Trip.insertMany(trips);

        console.log('Seeding complete');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        try {
            await mongoose.connection.close();
            console.log('Database connection closed');
        } catch (closeErr) {
            console.error('Error closing connection:', closeErr);
        } finally {
            process.exit(0);
        }
    }
}

seed();


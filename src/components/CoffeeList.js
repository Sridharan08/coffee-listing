import React, { useState } from 'react';
import CoffeeCard from './coffeeCard';
import coffeeData from '../data/coffeeData.json';
import { Button, Box, Typography } from '@mui/material';
import '@fontsource/dm-sans';

const CoffeeList = () => {
    const [filter, setFilter] = useState('all');

    // Filter logic to show only available products if "Available Now" is selected
    const filteredCoffeeData = coffeeData.filter(coffee =>
        filter === 'all' || (filter === 'available' && coffee.isAvailable)
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingLeft: '120px',
                backgroundColor: '#1A1A1A',
                fontFamily: 'DM Sans, sans-serif',
            }}
        >
            {/* Header */}
            <Typography
                variant="h3"
                gutterBottom
                sx={{ color: '#fff', fontWeight: 600, marginBottom: '30px', marginTop: '20px' }} // Add margin to the bottom
            >
                Cafe - Coffee Menu
            </Typography>

            {/* Background Image Box */}
            <Box
                sx={{
                    backgroundImage: 'url("/images/bg-cafe.jpg")', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    textAlign: 'center', 
                    borderRadius: '12px', 
                    padding: '20px', 
                    width: '80%', 
                    marginBottom: '30px', 
                    display: 'flex',
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ color: '#fff', fontWeight: 500, marginBottom: '15px' }} 
                >
                    Our Collection
                </Typography>

                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ color: '#fff', maxWidth: 600, textAlign: 'center', marginBottom: '40px' }} 
                >
                    Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                </Typography>

                {/* Filter Buttons */}
                <Box sx={{ marginBottom: '20px', display: 'flex', gap: 2 }}>
                    <Button
                        variant={filter === 'all' ? 'contained' : 'outlined'}
                        sx={{
                            backgroundColor: filter === 'all' ? '#F6C768' : '#333',
                            color: filter === 'all' ? '#000' : '#fff',
                            '&:hover': { backgroundColor: '#F6C768' },
                        }}
                        onClick={() => setFilter('all')}
                    >
                        All Products
                    </Button>
                    <Button
                        variant={filter === 'available' ? 'contained' : 'outlined'}
                        sx={{
                            backgroundColor: filter === 'available' ? '#F6C768' : '#333',
                            color: filter === 'available' ? '#000' : '#fff',
                            '&:hover': { backgroundColor: '#F6C768' },
                        }}
                        onClick={() => setFilter('available')}
                    >
                        Available Now
                    </Button>
                </Box>
            </Box>


            {/* Coffee Cards */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '10px',
                }}
            >
                {filteredCoffeeData.map((coffee, index) => (
                    <Box key={index} sx={{ flex: '0 0 calc(30.33% - 20px)', maxWidth: 'calc(33.33% - 20px)' }}>
                        <CoffeeCard
                            image={coffee.image}
                            name={coffee.name}
                            price={coffee.price}
                            rating={coffee.rating}
                            votes={coffee.votes}
                            isPopular={coffee.isPopular}
                            isAvailable={coffee.isAvailable}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default CoffeeList;

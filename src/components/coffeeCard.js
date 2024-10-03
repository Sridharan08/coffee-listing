import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const CoffeeCard = ({ image, name, price, rating, votes, isPopular, isAvailable }) => {
    // Format price
    const displayPrice = typeof price === 'number' ? `₹${price.toFixed(2)}` : 'N/A';

    return (
        <Card
            sx={{
                width: 340,
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#2A2A2A',
                color: '#fff',
            }}
        >
            {/* Popular Badge */}
            {isPopular && (
                <Chip
                    label="Popular"
                    sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        backgroundColor: '#43766C',
                        color: 'white',
                    }}
                />
            )}

            {/* Card Image */}
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={name}
                sx={{ filter: !isAvailable ? 'grayscale(100%)' : 'none' }}
            />

            {/* Card Content */}
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* Name and Price Row */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    {/* Coffee Name */}
                    <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 700 }}>
                        {name}
                    </Typography>

                    {/* Price */}
                    <Typography
                        variant="body2"
                        sx={{
                            backgroundColor: '#BEE3CC', // Background color resembling a button
                            color: 'black', // Text color for contrast
                            fontWeight: 600,
                            padding: '8px 10px', // Padding around the text
                            borderRadius: '4px', // Rounded corners
                            display: 'inline-block', // Makes the background only wrap the text
                            textAlign: 'center', // Centers the text inside the block
                        }}
                    >
                        {displayPrice}
                    </Typography>
                </Box>

                {/* Rating, Votes, and Sold Out in a single row */}
                <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
                    {/* Rating and Votes */}
                    {votes ? (
                        <Box display="flex" alignItems="center">
                            <StarIcon fontSize="small" color="primary" />
                            <Typography variant="body2" ml={0.5}>
                                {rating} ({votes} votes)
                            </Typography>
                        </Box>
                    ) : (
                        <Typography variant="body2" color="textSecondary">
                            No ratings
                        </Typography>
                    )}

                    {/* Sold Out Label */}
                    {!isAvailable && (
                        <Typography variant="body2" color="error" ml={4}>
                            Sold Out
                        </Typography>
                    )}
                </Box>
            </CardContent>

        </Card>
    );
};

export default CoffeeCard;

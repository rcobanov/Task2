# List of components for Task 2 - Feature Flicks

## MovieCards
The component moviecards is used to show the movies as cards on the startpage.
It receives movies and screenings as a prop to be able to display both their viewing times and information about the movie

## MovieRows
Is used in the bookings-page. The booking-page generates the table body, and the MovieRows takes a couple of props.
It is used to create the rows within the table, for each movie.

## Navigationbar
Creates the nav-bar that is visible throughout the page.


## TicketInfo
Shows simple information about your tickets in the SelectTicket.

## SelectTicketTypes 
Provides the dropdown list for each ticket type. This component receives a functino as a prop so it can use the hooks that are setup in SelectTickets.

## TicketDetails
Contains the total price of the ticket aswell as the button to get to SelectSeats

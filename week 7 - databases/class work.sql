-- 1
select * from customer
-- 2
select concat(first_name,' ',last_name) as "full_name" from customer
-- 3
select 	Distinct create_date from customer
-- 4
-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
select * from customer order by first_name desc;
-- 5
-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select film_id, title, description, release_year, rental_rate from film order by rental_rate desc;
-- 6
-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
select address, phone from address where district = 'Texas';
-- 7
-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
select * from film where film_id = 15 or film_id = 150;
-- 8
-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
select film_id, title, description, length, rental_rate from film where title = 'iron man'
-- 9
-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
select film_id, title, description, length, rental_rate from film where title = 'Ir$'
-- 10
-- Write a query which will find the 10 cheapest movies.
select * from film order by rental_rate asc limit 10;
-- 11
-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT * FROM film order by rental_rate asc 
OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;
-- 12
-- Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
select customer.first_name, customer.last_name, payment.amount, payment.payment_date
 from customer
 inner join payment
 on customer.customer_id = payment.customer_id
 order by customer.customer_id asc
--  13
-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT inventory.inventory_id, film.film_id, film.title
FROM inventory
FULL OUTER JOIN film
ON inventory.film_id = film.film_id
where inventory.film_id is null
-- 14
-- Write a query to find which city is in which country.
SELECT city.city, country.country
FROM city
FULL OUTER JOIN country
ON country.country_id = city.city_id
select * from city
-- 15
-- Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.

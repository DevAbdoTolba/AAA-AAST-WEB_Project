FROM php

# Set the working directory
WORKDIR /var/www/html

# Copy the current directory contents into the container
COPY ./ ./

# Install the MySQLi extension
RUN docker-php-ext-install mysqli

# Expose port 3000
EXPOSE 3000

# Run PHP built-in server
CMD ["php", "-S" , "0.0.0.0:8700"]

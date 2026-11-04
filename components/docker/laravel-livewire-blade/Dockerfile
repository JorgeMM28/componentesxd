# ============================================================================
# COMPONENTESXD — DOCKER BLUEPRINT: LARAVEL + LIVEWIRE + BLADE + PHP 8.3 FPM
# Archivo: components/docker/laravel-livewire-blade/Dockerfile
# ============================================================================

FROM php:8.3-fpm-alpine AS base

RUN apk add --no-cache \
    icu-dev \
    libzip-dev \
    libpng-dev \
    oniguruma-dev \
    postgresql-dev \
    && docker-php-ext-install pdo_mysql pdo_pgsql intl zip opcache bcmath

COPY --from=composer:2.8 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-Interaction --prefer-dist

COPY . .
RUN composer dump-autoload --optimize && \
    chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

USER www-data
EXPOSE 9000
CMD ["php-fpm"]


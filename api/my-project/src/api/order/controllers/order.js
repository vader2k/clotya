const stripe = require('stripe')(process.env.STRIPE_KEY);

'use strict';
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi}) => ({
    async create(ctx) {
        const { email, products } = ctx.request.body;
        try {
            const session = stripe.checkout.create({
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}?success=true`,
                cancel_url: `${process.env.CLIENT_URL}?success=false`,
            })
        } catch (error) {
            ctx.respond.status = 500;
            return error
        }
    }
}))
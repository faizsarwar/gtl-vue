<template>
    <div class="box mb-4">
        <h3 class="is-size-4 mb-6"><b> Order ID : {{ order.id }} </b> </h3>

        <h4 class="is-size-5 heading mt-4">Products</h4>

        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
                <tr
                    v-for="item in order.items"
                    v-bind:key="item.product.id"
                >
                    <td v-if="item.quantity!=0">{{ item.product.name }}</td>
                    <td v-if="item.quantity!=0">${{ item.price }}</td>
                    <td v-if="item.quantity!=0">{{ item.quantity }}</td>
                    <td v-if="item.quantity!=0">${{ getItemTotal(item).toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'OrderSummary',
    props: {
        order: Object
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.price
        },
        orderTotalLength(order) {
            return order.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
    }
}
</script>

<template>
    <div>
        <p>{{user.id}}. {{user.name}} --> ({{user.address.city}})</p>
        <!--
            id, name, username, email, phone, website,
            address (street, suite, city, zipcode, geo (lat, lng)),
            company (name, catchPhrase, bs)
        -->
    </div>
</template>

<script>
export default {
    name: 'Usuari',
    props: ['user']
}
</script>

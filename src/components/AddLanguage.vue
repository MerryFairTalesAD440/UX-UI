<template>
    <div>
        <b-jumbotron header="Add Language">
        <nav>
            <ul>
            <li><router-link to="">Add Text</router-link></li>
            <li><router-link to="">Add Audio</router-link></li>
            </ul>
        </nav>
        <router-link to='/' tag='button'>Back to book page</router-link>
        <router-view/>
        </b-jumbotron>
    </div>
</template>

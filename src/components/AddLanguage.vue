<template>
    <div>
        <b-card>
        <b-jumbotron header="Add Language" lead='Upload audio and/or text'>
        <hr />
        <nav>
            <ul>
            <li><router-link to="/uploadFile">Add Files</router-link></li>
            </ul>
        </nav>
        <hr>
        <router-link to='/bookpage' tag='button'>Back to book page</router-link>
        <router-view/>
        </b-jumbotron>
        </b-card>
    </div>
</template>

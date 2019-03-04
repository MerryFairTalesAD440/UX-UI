<template>
    <div>
        <b-card>
        <b-jumbotron header="Add Image" lead='Select image file to upload'>
        <hr />
        <nav>
            <ul>
            <li><router-link to="">Add Files</router-link></li>
            </ul>
        </nav>
        <hr />
        <router-link to='/' tag='button'>Back to book page</router-link>
        <router-view/>
        </b-jumbotron>
        </b-card>
    </div>
</template>

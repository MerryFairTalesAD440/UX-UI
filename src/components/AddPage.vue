<template>
    <div>
        <b-card>
        <b-jumbotron header="Add Page" lead='Upload language audio and text, and image'>
        <hr />
        <nav>
            <ul>
            <li><router-link to='/addlanguage'>Add Language</router-link></li>
            <li><router-link to='/addimage'>Add Image</router-link></li>
            </ul>
        </nav>
        <hr />
        <router-link to='/' tag='button'>Back to book page</router-link>
        <router-view/>
        </b-jumbotron>
        </b-card>
    </div>
</template>

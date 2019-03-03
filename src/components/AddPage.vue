<template>
    <div>
        <b-jumbotron header="Add Page">
        <nav>
            <ul>
            <li><router-link to='/addlanguage'>Add Language</router-link></li>
            <li><router-link to='/addimage'>Add Image</router-link></li>
            </ul>
        </nav>
        <b-button variant="outline-primary"><nav><router-link to='/'>Back to book page</router-link></nav></b-button>
        <router-view/>
        </b-jumbotron>
    </div>
</template>

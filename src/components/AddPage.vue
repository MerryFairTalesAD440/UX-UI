<template>
    <div>
        <b-jumbotron header="Add Page">
        <nav>
            <ul>
            <li><router-link to='/addlanguage'>Add Language</router-link></li>
            <li><router-link to='/addimage'>Add Image</router-link></li>
            </ul>
        </nav>
        <router-link to='/' tag='button'>Back to book page</router-link>
        <router-view/>
        </b-jumbotron>
    </div>
</template>

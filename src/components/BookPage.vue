<template>
<b-container id="topPage" border-variant="dark">
    <div>
        <b-card>
        <b-jumbotron header="Book Page" lead='Add or Edit Book'>
        <hr />
        <nav>
            <router-link to='/addpage'>Add Page</router-link>
        </nav>
        <router-view/>
        </b-jumbotron>
        </b-card>
    </div>
</b-container>
</template>
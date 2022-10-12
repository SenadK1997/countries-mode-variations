<script>
import NavBar from '../src/components/NavBar.vue';
import DetailBody from '../src/components/DetailBody.vue';
    export default {
    name: "DetailsPage",
    data() {
        return {};
    },
    components: { NavBar, DetailBody }
}
    </script>
    <template>
        <NavBar />
        <DetailBody />
    </template>
    
    <style scoped>
       .test {
        background-color: #fafafa;
       }
    </style>
        
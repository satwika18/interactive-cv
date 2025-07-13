import { ref, onMounted } from 'vue';  
import axios from 'axios';  
// import SectionTitle from './SectionTitle.vue'; // Aktifkan jika Anda punya  komponen ini  

const projects = ref([]);  
const API_URL = import.meta.env.PROD ? '/api/projects' :   
'http://localhost:3000/api/projects';  

onMounted(async () => {  
  try {    
    projects.value = (await axios.get(API_URL)).data;   
  } catch (error) {   
    console.error('Gagal mengambil data proyek:', error);    
  }  
});  
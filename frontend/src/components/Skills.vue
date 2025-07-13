import { ref, onMounted } from 'vue';  
import axios from 'axios';  
// import SectionTitle from './SectionTitle.vue'; // Aktifkan jika Anda punya  komponen ini  

const skills = ref([]);  
const API_URL = import.meta.env.PROD ? '/api/skills' :   
'http://localhost:3000/api/skills';  

onMounted(async () => {  
  try {    
    skills.value = (await axios.get(API_URL)).data;   
  } catch (error) {   
   console.error('Gagal mengambil data skill:', error);    
  }  
});  
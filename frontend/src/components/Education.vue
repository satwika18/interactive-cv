import { ref, onMounted } from 'vue';  
import axios from 'axios';  
// import SectionTitle from './SectionTitle.vue'; // Aktifkan jika Anda punya  komponen ini  
const educationHistory = ref([]); 
const API_URL = import.meta.env.PROD ? '/api/education' :   'http://localhost:3000/api/education';  
onMounted(async () => {  
  try {    
    educationHistory.value = (await axios.get(API_URL)).data;   
  } catch (error) {    
    console.error('Gagal mengambil data pendidikan:', error);  
  }  
});  
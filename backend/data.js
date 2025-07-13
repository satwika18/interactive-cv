// File: backend/data.js  
const educationHistory = [   
    { institution: 'Universitas AMIKOM Yogyakarta', major: 'S1 - Informatika',  period: '2023 - Sekarang' },  
    { institution: 'SMA Negeri 1 kabupaten sorong', major: 'MIPA', period: '2021 - 2023'  }  
    { institution: 'SMP Negeri 1 kabupaten sorong',  period: '2017 - 2021'  }  
    { institution: 'SD Negeri 1 cepu kabupaten blora', period: '2015 - 2016'  }  
    { institution: 'SD impres 13 kabupaten sorong ',  period: '2021 - 2023'  }  
    {institution: 'TK santo bernadus kabupaten sorong ', period: '2021 - 2023'  }  
];  
const skills = [  
    { name: 'Vue.js', level: 'Menengah' },  
    { name: 'JavaScript', level: 'Menengah' },  
    { name: 'Node.js', level: 'Pemula' },  
    { name: 'Express.js', level: 'Pemula' },  
];  const projects = [  
 {  
     title: 'Website Portofolio Responsi',   
     image: 'https://drive.google.com/file/d/1paRTOdae-XpLdrwJjRy2FMVUaBOX5yBV/view?usp=sharing',  
     description: 'Website portofolio pribadi yang dibangun sebagai syarat  kelulusan Responsi.',   
     tech: ['Vue.js', 'Express.js', 'Vercel'],   
     link: '#'  
    }  
];  
module.exports = { educationHistory, skills, projects };  